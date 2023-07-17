import { createContext, useEffect, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"
import { useSnackbar } from "burgos-snackbar"
import { useNavigate } from "react-router-dom"

interface UserContextValue {
    user: User | null
    setUser: (value: User | null) => void
    loginLoading: boolean
    setLoginLoading: (value: boolean) => void
}

interface UserProviderProps {
    children: React.ReactNode
}

const UserContext = createContext<UserContextValue>({} as UserContextValue)

export default UserContext

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const io = useIo()
    const navigate = useNavigate()

    const { snackbar } = useSnackbar()

    const [user, setUser] = useState<User | null>(null)
    const [loginLoading, setLoginLoading] = useState(false)

    io.on("login:success", (data: User) => {
        setUser(data)
        snackbar({ severity: "success", text: "login sucesso" })
        setLoginLoading(false)
        navigate("/")
    })

    io.on("login:error", () => {
        snackbar({ severity: "error", text: "login error" })
        setLoginLoading(false)
    })

    io.on("signup:success", () => {
        navigate("/login")
        snackbar({severity: "success", text: "usuário criado com sucesso"})
    })

    io.on("signup:error", () => {
        snackbar({severity: "error", text: "erro ao criar usuário"})
    })

    useEffect(() => {
        console.log({ user })
    }, [user])

    return <UserContext.Provider value={{ user, setUser, loginLoading, setLoginLoading }}>{children}</UserContext.Provider>
}
