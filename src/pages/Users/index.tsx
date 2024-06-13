import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { LayoutDashBoard } from "../../shared/layouts";
import { ListingTools } from "../../shared/components";
import { usersServices } from "../../shared/services";

interface IUsersProps {}

export const Users = ({}: IUsersProps)=> {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = useMemo(()=>{
        return searchParams.get("search") || "";
    }, [searchParams]);

    useEffect(()=> {
        try {
            usersServices.getAll().then((response)=>{
                if(response instanceof Error) {
                    throw new Error("Erro ao listar os usuários");
                }

                console.log(response);
            });
        } catch (error) {
            console.error("Error: ", error);
        }
    }, [])

    return(
        <LayoutDashBoard title="Usuários" listingTools={<ListingTools textSearch={search} onChangeSearchText={text => setSearchParams({ search: text }, {replace: true})} showSearchInput showAddButton />}>
            <div></div>
        </LayoutDashBoard>
    );
}