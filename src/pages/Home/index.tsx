import { ListingTools } from "../../shared/components";
import { LayoutDashBoard } from "../../shared/layouts";

export const Home = ()=> {
    return(
        <LayoutDashBoard 
            title="Página Inicial" 
            listingTools={<ListingTools showSearchInput />}
        >
            <div></div>
        </LayoutDashBoard>
    );
}