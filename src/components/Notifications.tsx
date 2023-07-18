import React, { useState } from "react"
import { Box, Drawer, IconButton, Avatar } from "@mui/material"
import { useNotifications } from "../hooks/useNotifications"
import CloseSharpIcon from "@mui/icons-material/CloseSharp"
import profile from "../assets/notification.jpeg"
import profile2 from "../assets/person.jpg"
import { MessageNotification } from "./MessageNotification"

interface NotificationsProps {}

export const Notifications: React.FC<NotificationsProps> = ({}) => {
    const { open, setOpen } = useNotifications()

    const [quantity, setQuantity] = useState(30)
    const [name, setName] = useState("Omar Donin")
    const [time, settime] = useState(4)
    const [imageProfile, setimageProfile] = useState(profile)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Drawer anchor={"right"} open={open} onClose={handleClose} PaperProps={{ sx: { width: "80vw" } }}>
            <Box sx={{ padding: "8vw", display: "flex", flexDirection: "column", gap: "5vw" }}>
                <Box sx={{ alignItems: "flex-start", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <h3>Notificações</h3>
                        <p style={{ fontSize: "3.2vw" }}>
                            Você tem <span style={{ fontWeight: "bold" }}>{quantity} notificações </span> hoje
                        </p>
                    </Box>
                    <IconButton onClick={handleClose}>
                        <CloseSharpIcon sx={{ padding: "0 0 0vw 0", width: "6vw" }} color="primary" />
                    </IconButton>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "5vw" }}>
                    <p style={{ fontSize: "3.7vw", fontWeight: "bolder" }}>Hoje</p>
                    <MessageNotification
                        name={name}
                        color="#FF4747"
                        avatarIcon={<Avatar src={profile} sx={{ width: "13vw", height: "13vw", borderRadius: "50%" }} />}
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "5vw" }}>
                    <p style={{ fontSize: "3.7vw", fontWeight: "bolder" }}>Esta Semana</p>
                    <MessageNotification
                        name={name}
                        avatarIcon={<Avatar src={profile2} sx={{ width: "13vw", height: "13vw", borderRadius: "50%" }} />}
                    />
                    <MessageNotification
                        name={name}
                        avatarIcon={<Avatar src={""} sx={{ width: "13vw", height: "13vw", borderRadius: "50%" }} />}
                    />
                </Box>
            </Box>
        </Drawer>
    )
}
