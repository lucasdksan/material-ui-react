import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material";
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
                usersServices.getAll(1, search).then((response) => {
                    setIsLoading(false);
                    if (response instanceof Error) {
                        throw new Error("Erro ao listar os usuários");
                    }

                    console.log(response.fullCount)
                    setTotalCount(response.fullCount);
                    setRows(response.data);
                });
            } catch (error) {
                console.error("Error: ", error);
            }
        });
    }, [search ]);

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
                            rows.map(({ email, name, id }) => (
                                <TableRow key={id}>
                                    <TableCell>Ações</TableCell>
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