import { Box, Button, Divider, Paper, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface IDetailToolsProps {
    textNewBtn?: string;
    showNewBtn?: boolean;
    showToBackBtn?: boolean;
    showDeleteBtn?: boolean;
    showSaveBtn?: boolean;
    showSaveCloseBtn?: boolean;
    onClickNewBtn?: () => void;
    onClickToBackBtn?: () => void;
    onClickDeleteBtn?: () => void;
    onClickSaveBtn?: () => void;
    onClickSaveCloseBtn?: () => void;
}

export const DetailTools = ({
    textNewBtn = "Novo",
    showNewBtn = true,
    showToBackBtn = true,
    showDeleteBtn = true,
    showSaveBtn = true,
    showSaveCloseBtn = false,
    onClickDeleteBtn,
    onClickNewBtn,
    onClickSaveBtn,
    onClickSaveCloseBtn,
    onClickToBackBtn
}: IDetailToolsProps) => {
    const theme = useTheme();

    return (
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
            {showSaveBtn && (
                <Button
                    color="primary"
                    disableElevation
                    variant="contained"
                    startIcon={<SaveIcon />}
                    onClick={onClickSaveBtn}
                >
                    Salvar
                </Button>
            )}

            {showSaveCloseBtn && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<SaveIcon />}
                    onClick={onClickSaveCloseBtn}
                >
                    Salvar e Voltar
                </Button>
            )}
            {showNewBtn && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<AddIcon />}
                    onClick={onClickNewBtn}
                >
                    {textNewBtn}
                </Button>
            )}

            {showDeleteBtn && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={onClickDeleteBtn}
                >
                    Apagar
                </Button>
            )}

            <Divider
                variant="middle"
                orientation="vertical"
            />
            {showToBackBtn && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={onClickToBackBtn}
                >
                    Voltar
                </Button>
            )}

        </Box>
    );
}