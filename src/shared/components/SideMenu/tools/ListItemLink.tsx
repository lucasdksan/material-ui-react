import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IListItemLinkProps {
    label: string;
    icon: React.ElementType; 
    to: string;
    onClick: (()=> void) | undefined;
}

export const ListItemLink = ({ icon: Icon, label, to, onClick }: IListItemLinkProps) => {
    const navigate = useNavigate();
    const resolvePath = useResolvedPath(to);
    const match = useMatch({
        end: true,
        path: resolvePath.pathname
    });
    
    const handleClick = ()=>{
        onClick?.();
        navigate(to);
    }
    
    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
}