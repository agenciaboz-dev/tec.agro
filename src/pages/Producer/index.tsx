import React from "react"
import { Signup } from "./Signup"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router"
import { Header } from "../../components/Header"
import { Form } from "./Signup/Form"
import { Verification } from "./Signup/Verification"
import { BottomNavigation } from "../../components/BottomNavigation"
import { useNavigationList } from "../../hooks/useNavigationList"
import { Panel } from "./Panel"
import { Chats } from "../Chats"
import { IntroCrop } from "./Panel/IntroCrop"
import { RegisterCrop } from "../../components/RegisterCrop"
import { Analysis } from "../../components/PanelProducerAgent/Analysis"
import { Transactions } from "./Transactions"
import { useLocation } from "react-router-dom"

interface ProducerProps {
    user: User
}

export const Producer: React.FC<ProducerProps> = ({ user }) => {
    const bottomMenu = useNavigationList()

    const location = useLocation()
    const { pathname } = location

    const producer: Producer = {
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
    const agent: Agent = {
        id: 0,
        userId: user.id,
        user: user,
        date: "29/05/2000",
        name: "Marcel Fonseca",
        email: "",
        document: "",
        phone: "",
        image: "",
        rating: 5,
        ratings: 5,
        active: false,
    }
    const renderHeaderMenu = () => {
        console.log(pathname)
        if (pathname === "/producer/intro") {
            return (
                <>
                    {" "}
                    <Header back location="/producer/panel" />
                    <BottomNavigation section={bottomMenu.producer} external />
                </>
            )
        } else if (pathname === "/producer/register") {
            return (
                <>
                    <Header back location="/producer/intro" />
                    <BottomNavigation section={bottomMenu.producer} external />
                </>
            )
        } else if (pathname === "/producer/analysisag") {
            return (
                <>
                    <Header back location="/search/zonespr" />
                    <BottomNavigation section={bottomMenu.producer} external />
                </>
            )
        } else {
            return (
                <>
                    <Header />
                    <BottomNavigation section={bottomMenu.producer} />
                </>
            )
        }
    }

    return (
        <>
            {renderHeaderMenu()}
            <Box sx={{ width: "100%" }}>
                {user.producer ? (
                    user.producer.active ? (
                        <></>
                    ) : (
                        <Verification />
                    )
                ) : (
                    <Box sx={{ width: "100vw" }}>
                        <Routes>
                            {}
                            <Route index element={<Signup user={user}></Signup>} />
                            <Route path="form" element={<Form user={user}></Form>} />
                            <Route path="panel" element={<Panel user={user} agent={agent}></Panel>} />
                            <Route path="chats" element={<Chats channel="buyer" />} />
                            <Route path="intro" element={<IntroCrop />} />
                            <Route path="register" element={<RegisterCrop />} />
                            <Route path="transactions" element={<Transactions agent={agent} />} />
                            <Route
                                path="analysisag"
                                element={<Analysis user={user} button="Enviar Solicitação" location="producer/"></Analysis>}
                            />
                        </Routes>
                    </Box>
                )}
            </Box>
        </>
    )
}
