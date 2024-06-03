import { Box, Button, Paper, TextField, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface IListingToolsProps {
    textSearch ?: string;
    showSearchInput ?: boolean;
    onChangeSearchText ?: (text: string) => void;
    textAddButton ?: string;
    showAddButton ?: boolean;
    onClickAddButton ?: ()=> void;
}

export const ListingTools = ({ 
    onChangeSearchText, 
    showSearchInput = false, 
    textSearch = "",
    onClickAddButton,
    showAddButton = true,
    textAddButton = "Novo" 
}:IListingToolsProps)=> {
    const theme = useTheme();

    return(
        <Box 
            height={theme.spacing(6)}
            marginX={2}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            gap={1}
            component={Paper}
        >
            {
                showSearchInput && (
                    <TextField 
                        size="small"
                        value={textSearch}
                        onChange={(value)=> onChangeSearchText?.(value.target.value)}
                        placeholder="Pesquisar..."
                    />
                )
            }
            <Box
                flex={1}
                display="flex"
                justifyContent="end"
            >
                { showAddButton && (
                    <Button
                        color="primary"
                        disableElevation 
                        variant="contained"
                        endIcon={<AddIcon />}
                        onClick={onClickAddButton}
                    >
                        { textAddButton }
                    </Button>
                ) }
            </Box>
        </Box>
    );
}