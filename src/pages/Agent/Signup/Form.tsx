import React, { useState } from "react"
import {
    Box,
    Button,
    Checkbox,
    CircularProgress,
    FormControlLabel,
    IconButton,
    Paper,
    SxProps,
    TextField,
} from "@mui/material"
import { Formik, Form as Formu } from "formik"
import { Avatar } from "@files-ui/react"
import ArrowCircleUpSharpIcon from "@mui/icons-material/ArrowCircleUpSharp"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import { useSnackbar } from "burgos-snackbar"
import { useAgents } from "../../../hooks/useAgents"
import MaskedInput from "../../../components/MaskedInput"
import { useDocumentMask } from "../../../hooks/useDocumentMask"
import { inputStyle, paperStyle, styleBox } from "./../../styles"

interface FormProps {
    user: User
}

export const Form: React.FC<FormProps> = ({ user }) => {
    const agents = useAgents()

    const { snackbar } = useSnackbar()
    const documentMask = useDocumentMask()

    const [image, setImage] = useState<File>()

    const initialValues: Agent = {
        id: 0,
        userId: user.id,
        user: user,
        date: "",
        name: "",
        email: "",
        document: "",
        phone: "",

        image: "",
        rating: 5,
        ratings: 5,
        active: false,
    }

    const handleSubmit = (values: Agent) => {
        if (agents.loading) return

        if (!image) {
            snackbar({ severity: "error", text: "Envie uma imagem" })
            return
        }

        agents.new({ ...values, file: image })
    }

    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                gap: "5vw",
                height: "100%",
                overflowY: "auto",
                paddingBottom: "10vw",
            }}
        >
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Formu>
                        <Paper sx={paperStyle}>
                            <Box sx={styleBox}>
                                <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                                    <p style={{ fontSize: "3.5vw", fontWeight: "600" }}>Informações Básicas</p>
                                    <hr />
                                </Box>
                                <TextField
                                    variant="standard"
                                    label="Nome"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    sx={inputStyle}
                                    required
                                />
                                <TextField
                                    variant="standard"
                                    label="CPF"
                                    name="document"
                                    value={values.document}
                                    onChange={handleChange}
                                    sx={inputStyle}
                                    InputProps={{
                                        inputComponent: MaskedInput,
                                        inputProps: { mask: "000.000.000-00" },
                                    }}
                                    required
                                />
                                <TextField
                                    variant="standard"
                                    label="E-mail"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    sx={inputStyle}
                                    required
                                />

                                <TextField
                                    variant="standard"
                                    label="Data de Nascimento"
                                    name="birth"
                                    value={values.date}
                                    onChange={handleChange}
                                    sx={inputStyle}
                                />
                                <TextField
                                    variant="standard"
                                    label="Telefone"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    sx={inputStyle}
                                    InputProps={{
                                        inputComponent: MaskedInput,
                                        inputProps: { mask: "(00) 0 0000-0000" },
                                    }}
                                    required
                                />
                            </Box>
                        </Paper>

                        <Paper sx={paperStyle}>
                            <Box sx={{ ...styleBox, gap: "4vw" }}>
                                <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                                    <p style={{ fontSize: "3.5vw", fontWeight: "600", textAlign: "center" }}>
                                        Foto do perfil
                                    </p>
                                    <hr />
                                </Box>
                                <Avatar
                                    src={image}
                                    onChange={(file) => setImage(file)}
                                    smartImgFit={"orientation"}
                                    changeLabel="Clique para trocar a imagem"
                                    emptyLabel="Clique para enviar uma imagem"
                                    // style={{ width: "100%", height: "30vw" }}
                                    style={{
                                        width: "25vw",
                                        height: "25vw",
                                        borderRadius: "20vw",
                                        fontSize: "2.5vw",
                                        alignSelf: "center",
                                    }}
                                />
                            </Box>
                        </Paper>
                        <Paper sx={paperStyle}>
                            <Box sx={{ ...styleBox, gap: "4vw", justifyContent: "end" }}>
                                <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                                    <p style={{ fontSize: "3.5vw", fontWeight: "600" }}>Documentos</p>
                                    <hr />
                                </Box>
                                <Box sx={{ gap: "1vw", width: "100%" }}>
                                    <img
                                        src="https://contratocerto.com.br/wp-content/uploads/2020/07/Contrato-de-coaching-pdf.jpg"
                                        style={{ width: "15vw" }}
                                        alt="Documento"
                                    />
                                    <img
                                        src="https://s2-g1.glbimg.com/_bCeHe8l8gGuZ6XfL0C_rYHhNB4=/0x0:1280x854/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/x/K/iF7eHyTky2IZDMsAvVHQ/whatsapp-image-2019-04-04-at-4.55.07-pm.jpeg"
                                        style={{ width: "15vw", transform: "rotate(90deg)" }}
                                        alt=""
                                    />
                                    <img
                                        src="https://manuais.ifsp.edu.br/uploads/images/gallery/2022-07/scaled-1680-/image-1657389184596.png"
                                        style={{ width: "15vw" }}
                                        alt=""
                                    />

                                    <IconButton sx={{ display: "flex", justifyContent: "end" }} onClick={() => {}}>
                                        <AddCircleOutlineIcon color="primary" />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Paper>

                        <Button variant="contained" type="submit">
                            {agents.loading ? <CircularProgress color="secondary" size="1.5rem" /> : "Confirmar"}
                        </Button>
                    </Formu>
                )}
            </Formik>
        </Box>
    )
}
