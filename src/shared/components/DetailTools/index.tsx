import { Box, Button, Divider, Paper, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material";
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
    showNewBtnLoading?: boolean;
    showToBackBtnLoading?: boolean;
    showDeleteBtnLoading?: boolean;
    showSaveBtnLoading?: boolean;
    showSaveCloseBtnLoading?: boolean;
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
    showSaveBtnLoading = false,
    showDeleteBtnLoading = false,
    showNewBtnLoading = false,
    showSaveCloseBtnLoading = false,
    showToBackBtnLoading = false,
    onClickDeleteBtn,
    onClickNewBtn,
    onClickSaveBtn,
    onClickSaveCloseBtn,
    onClickToBackBtn
}: IDetailToolsProps) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

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
            {(showSaveBtn && !showSaveBtnLoading) && (
                <Button
                    color="primary"
                    disableElevation
                    variant="contained"
                    startIcon={<SaveIcon />}
                    onClick={onClickSaveBtn}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        Salvar
                    </Typography>
                </Button>
            )}

            {showSaveBtnLoading && (
                <Skeleton
                    width={110}
                    height={60}
                />
            )}

            {(showSaveCloseBtn && !showSaveCloseBtnLoading && !smDown && !mdDown) && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<SaveIcon />}
                    onClick={onClickSaveCloseBtn}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        Salvar e Voltar
                    </Typography>
                </Button>
            )}

            {(showSaveCloseBtnLoading && !smDown && !mdDown) && (
                <Skeleton
                    width={110}
                    height={60}
                />
            )}

            {(showNewBtn && !showNewBtnLoading && !smDown && !mdDown) && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<AddIcon />}
                    onClick={onClickNewBtn}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        {textNewBtn}
                    </Typography>
                </Button>
            )}

            {(showNewBtnLoading && !smDown && !mdDown) && (
                <Skeleton
                    width={110}
                    height={60}
                />
            )}

            {(showDeleteBtn && !showDeleteBtnLoading) && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={onClickDeleteBtn}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        Apagar
                    </Typography>
                </Button>
            )}

            {showDeleteBtnLoading && (
                <Skeleton
                    width={110}
                    height={60}
                />
            )}

            {(!smDown || !mdDown) && <Divider
                variant="middle"
                orientation="vertical"
            /> }

            {(showToBackBtn && !showToBackBtnLoading) && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={onClickToBackBtn}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        Voltar
                    </Typography>
                </Button>
            )}

            {showToBackBtnLoading && (
                <Skeleton
                    width={110}
                    height={60}
                />
            )}
        </Box>
    );
}