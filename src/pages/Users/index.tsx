import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material";
import { LayoutDashBoard } from "../../shared/layouts";
import { ListingTools } from "../../shared/components";
import { IUserListProps, usersServices } from "../../shared/services";
import { useDebounce } from "../../shared/hooks";
import { env } from "../../shared/environment";

interface IUsersProps { }

export const Users = ({ }: IUsersProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [rows, setRows] = useState<IUserListProps[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const search = useMemo(() => {
        return searchParams.get("search") || "";
    }, [searchParams]);

    const page = useMemo(() => {
        return searchParams.get("page") || "1";
    }, [searchParams]);

    const { debounce } = useDebounce();

    useEffect(() => {
        setIsLoading(true);

        debounce(() => {
            try {
                usersServices.getAll(parseInt(page), search).then((response) => {
                    setIsLoading(false);
                    if (response instanceof Error) {
                        throw new Error("Erro ao listar os usuários");
                    }

                    setTotalCount(response.fullCount);
                    setRows(response.data);
                });
            } catch (error) {
                console.error("Error: ", error);
            }
        });
    }, [search, page]);

    const handleDelete = (id: number)=> {
        if(confirm("Realmente deseja deletar?")) {
            usersServices.deleteById(id)
                .then(result => {
                    if(result instanceof Error) {
                        alert(result.message);
                    } else {
                        setRows((oldRows)=>{
                            return[
                                ...oldRows.filter((row)=> row.id !== id)
                            ];
                        });

                        alert("Usuário deletado com sucesso!");
                    }
                });
        }
    }

    return (
        <LayoutDashBoard 
            title="Usuários" 
            listingTools={<ListingTools textSearch={search} onChangeSearchText={text => setSearchParams({ search: text, page: "1" }, { replace: true })} showSearchInput showAddButton onClickAddButton={()=> navigate("/users/details/new")} />}>
            <TableContainer sx={{ p: 1, width: "auto" }} component={Paper} variant="outlined">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ações</TableCell>
                            <TableCell>Nome Completo</TableCell>
                            <TableCell>E-mail</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map(({ email, name, id }, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <IconButton onClick={()=> handleDelete(id)} size="small">
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton size="small" onClick={()=> navigate(`/users/details/${id}`)}>
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>{name}</TableCell>
                                    <TableCell>{email}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                    { totalCount === 0 && !isLoading && (
                        <caption>{env.VITE_LISTING_EMPTY}</caption>
                    ) }
                    <TableFooter>
                        {
                            isLoading && (
                                <TableRow>
                                    <TableCell colSpan={3}>
                                        <LinearProgress
                                            variant="indeterminate"
                                        />
                                    </TableCell>
                                </TableRow>
                            )
                        }
                        {
                            (totalCount > 0 && totalCount >= parseInt(env.VITE_LIMIT)) && (
                                <TableRow>
                                    <TableCell colSpan={3}>
                                        <Pagination 
                                            page={parseInt(page)}
                                            count={Math.ceil(totalCount /parseInt(env.VITE_LIMIT))}
                                            onChange={(_, newPage)=> setSearchParams({ search, page: newPage.toString() }, { replace: true })}
                                        />
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableFooter>
                </Table>
            </TableContainer>
        </LayoutDashBoard>
    );
}