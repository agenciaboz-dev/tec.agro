import React from "react"
import { Signup } from "./Signup"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router"
import { Header } from "../../components/Header"
import { Form } from "./Signup/Form"
import { Verification } from "./Signup/Verification"
import { MyShipping } from "../../components/MyShipping"
import { BottomNavigation } from "../../components/BottomNavigation"
import { useNavigationList } from "../../hooks/useNavigationList"
import { Panel } from "./Panel"
import { NewCategory as NewZone } from "../../components/PanelBusinessShipping/NewCategory"
import { useLocation } from "react-router-dom"
interface ShippingProps {
    user: User
}

export const Shipping: React.FC<ShippingProps> = ({ user }) => {
    const location = useLocation()
    const { pathname } = location

    const shipping: Shipping = {
        active: false,
        name: "Transportadora Feed",
        phone: "00000000000",
        document: "",
        user: user,
        image: "https://encurtador.com.br/bgrtZ",
        email: "transportadorafeed@gmail.com",
        id: 0,
        date: "",
        userId: 0,
        rating: 0,
        ratings: 0,
    }

    const car: Car = {
        image: "",
        name: "trator",
        type: "",
    }

    const renderHeader = () => {
        console.log(pathname)
        if (pathname === "/shipping/newZone") {
            return <Header back location="/shipping/panel" />
        } else {
            return <Header />
        }
    }

    const bottomMenu = useNavigationList()
    return (
        <Box sx={{ width: "100%", padding: "7vh 0vw 10vh 0vw" }}>
            {renderHeader()}
            {user.shipping ? (
                user.shipping.active ? (
                    <></>
                ) : (
                    <Verification />
                )
            ) : (
                <Box sx={{ padding: "10vw 4vw 0", width: "100vw" }}>
                    <Routes>
                        <Route index element={<Signup user={user}></Signup>} />
                        <Route path="form" element={<Form user={user}></Form>} />
                        <Route path="account" element={<MyShipping shipping={shipping}></MyShipping>} />
                        {/* <Route path="new" element={<NewCar shipping={shipping}></NewCar>} /> */}
                        <Route path="/newZone" element={<NewZone user={user} product={car} />} />
                        <Route path="/panel" element={<Panel></Panel>} />
                    </Routes>
                    <BottomNavigation section={bottomMenu.shipping} />
                </Box>
            )}
        </Box>
    )
}
