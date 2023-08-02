import React from "react"
import { Box, Paper, Avatar } from "@mui/material"
import { SearchInput } from "../../../components/SearchInput"
import { Transactions } from "./Transactions"
import { ListTitle } from "../../../components/ListTitle"
import { CardCrop } from "./CardCrop"
import { CardAgent } from "./CardAgent"
interface PanelProps {
    user: User
}

export const Panel: React.FC<PanelProps> = ({ user }) => {
    const agent: Agent = {
        id: 0,
        userId: user.id,
        user: user,
        date: "29/05/2000",
        name: "Julian Galdino",
        email: "",
        document: "",
        phone: "",
        image: "",
        rating: 5,
        ratings: 5,
        active: false,
    }
    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                padding: "0 3vw",
                gap: "3vw",
            }}
        >
            <Box sx={{ flexDirection: "column", width: "100%", height: "30%", gap: "3vw" }}>
                <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                    <p style={{ fontSize: "3.5vw" }}>Como os produtores veem</p>
                    <Paper
                        elevation={3}
                        sx={{
                            backgroundColor: "white",
                            width: "100%",
                            height: "max-content",
                            borderRadius: "2vw",
                            flexDirection: "column",
                            padding: "1vw",
                            gap: "1vw",
                        }}
                    >
                        <CardAgent agent={agent} />
                    </Paper>
                </Box>
                <SearchInput placeholder="Buscar por safra" onChange={() => {}} />
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "65%",
                    overflow: "auto",
                    paddingBottom: "1vh",
                    flexDirection: "column",
                    gap: "2vw",
                }}
            >
                <Transactions status="pending" />
                <Transactions status="contact" />
                <Box sx={{ flexDirection: "column" }}>
                    <ListTitle title="Suas Safras" location=""></ListTitle>
                    <CardCrop agent={agent} />
                </Box>
                <Box sx={{ flexDirection: "column" }}>
                    <ListTitle title="Agendadas" location=""></ListTitle>
                    <Transactions status="schedule" />
                </Box>
            </Box>
        </Box>
    )
}
