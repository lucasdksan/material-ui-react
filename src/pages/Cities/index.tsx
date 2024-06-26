import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { ListingTools } from "../../shared/components";
import { LayoutDashBoard } from "../../shared/layouts";

interface ICitiesProps {}

export const Cities = ({}: ICitiesProps)=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const search = useMemo(()=>{
        return searchParams.get("search") || "";
    }, [searchParams]);

    return(
        <LayoutDashBoard title="Cidades" listingTools={<ListingTools textSearch={search} onChangeSearchText={text => setSearchParams({ search: text }, {replace: true})} showSearchInput showAddButton />}>
            <div></div>
        </LayoutDashBoard>
    );
}