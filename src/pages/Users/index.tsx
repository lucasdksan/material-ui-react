import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { LayoutDashBoard } from "../../shared/layouts";
import { ListingTools } from "../../shared/components";
import { IUserListProps, usersServices } from "../../shared/services";
import { useDebounce } from "../../shared/hooks";

interface IUsersProps { }

export const Users = ({ }: IUsersProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [rows, setRows] = useState<IUserListProps[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const search = useMemo(() => {
        return searchParams.get("search") || "";
    }, [searchParams]);

    const { debounce } = useDebounce();

    useEffect(() => {
        setIsLoading(true);

        debounce(() => {
            try {
                usersServices.getAll().then((response) => {
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
    }, [])

    return (
        <LayoutDashBoard title="Usuários" listingTools={<ListingTools textSearch={search} onChangeSearchText={text => setSearchParams({ search: text }, { replace: true })} showSearchInput showAddButton />}>
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
                            rows.map(({ email, name, id })=>(
                                <TableRow key={id}>
                                    <TableCell>Ações</TableCell>
                                    <TableCell>{name}</TableCell>
                                    <TableCell>{email}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </LayoutDashBoard>
    );
}