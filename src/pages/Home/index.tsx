import { DetailTools } from "../../shared/components";
import { LayoutDashBoard } from "../../shared/layouts";

export const Home = ()=> {
    return(
        <LayoutDashBoard 
            title="Página Inicial" 
            listingTools={<DetailTools showSaveCloseBtn />}
        >
            <div></div>
        </LayoutDashBoard>
    );
}