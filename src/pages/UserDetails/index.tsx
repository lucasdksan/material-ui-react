import { useNavigate, useParams } from "react-router-dom";
import { LayoutDashBoard } from "../../shared/layouts";
import { DetailTools } from "../../shared/components";

interface IUserDetailsProps { }

export const UserDetails = ({}:IUserDetailsProps)=>{
    const { id = "new" } = useParams<"id">();
    const navigate = useNavigate();

    const handleDelete = ()=> {}
    const handleSave = ()=> {}

    return(
        <LayoutDashBoard title="Detalhe do Usuário"
            listingTools={
                <DetailTools
                    textNewBtn="Novo"
                    showNewBtn
                    showDeleteBtn={id !== "new"}
                    showSaveCloseBtn

                    onClickDeleteBtn={handleDelete}
                    onClickSaveBtn={handleSave}
                    onClickNewBtn={()=> navigate("/users/details/new")}
                    onClickToBackBtn={()=> navigate("/users")}
                />
            }
        >
            <div>Detalhe {id}</div>
        </LayoutDashBoard>
    );
}