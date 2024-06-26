import { useNavigate, useParams } from "react-router-dom";
import { LayoutDashBoard } from "../../shared/layouts";
import { DetailTools } from "../../shared/components";
import { useEffect, useState } from "react";
import { usersServices } from "../../shared/services";
import { LinearProgress } from "@mui/material";

interface IUserDetailsProps { }

export const UserDetails = ({}:IUserDetailsProps)=>{
    const { id = "new" } = useParams<"id">();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");

    useEffect(()=> {
        if(id !== "new") {
            setIsLoading(true);

            usersServices.getById(parseInt(id))
                .then((response)=>{
                    setIsLoading(false);

                    if(response instanceof Error) {
                        alert(response.message);
                        navigate("/users");
                    } else {
                        setName(response.name);
                        console.log(response);
                    }
                });
        }
    }, []);

    const handleDelete = ()=> {
        if(confirm("Realmente deseja deletar?")) {
            if(id !== "new") {
                usersServices.deleteById(parseInt(id))
                .then(result => {
                    if(result instanceof Error) {
                        alert(result.message);
                    } else {
                        alert("Usuário deletado com sucesso!");
                        navigate("/users");
                    }
                });
            }
        }
    }

    const handleSave = ()=> {}

    return(
        <LayoutDashBoard title={id === "Nova" ? "Nova Pessoa": name}
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
            { isLoading && (
                <LinearProgress variant="indeterminate" />
            ) }
            <div>Detalhe {id}</div>
        </LayoutDashBoard>
    );
}