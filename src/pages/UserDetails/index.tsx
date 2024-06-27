import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";

import { LayoutDashBoard } from "../../shared/layouts";
import { DetailTools, VForm } from "../../shared/components";
import { usersServices } from "../../shared/services";
import { listFormUserDetails } from "../../shared/utils";

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
            <VForm fields={listFormUserDetails} onSubmit={(e)=>{console.log("Uiu: ", e)}} />
        </LayoutDashBoard>
    );
}