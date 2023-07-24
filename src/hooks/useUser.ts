import { useContext } from "react"
import UserContext from "../contexts/userContext"
import { useIo } from "./useIo"
import { useNavigate } from "react-router-dom"

export const useUser = () => {
    const io = useIo()
    const navigate = useNavigate()

    const { user, setUser, loginLoading, setLoginLoading, signupLoading, setSignupLoading } = useContext(UserContext)

    const login = (data: LoginData) => {
        io.emit("user:login", data)
    }

    const logout = () => {
        io.emit("user:logout")
        navigate("/login")
        setUser(null)
    }

    const update = (data: {
        name: string | undefined
        email: string | undefined
        cpf: string | undefined
        birth: string
        phone: string
        rg: string
        address: string
        cep: string
        number: string
        image: string
        uf: string
    }) => {
        io.emit("user:update", data)
    }

    return { user, login, loginLoading, setLoginLoading, signupLoading, setSignupLoading, logout, update }
}
