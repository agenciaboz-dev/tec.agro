import GrassIcon from "@mui/icons-material/Grass"
import ChatIcon from "@mui/icons-material/Chat"
import GridViewIcon from "@mui/icons-material/GridView"
import SearchIcon from "@mui/icons-material/Search"

export const useNavigationList = () => {
    const list: NavigationMenu[] = [
        {
            id: 1,
            title: "Lojas & Serviços",
            location: "/home",
            navigation: [
                {
                    id: 1,
                    title: "Painel",
                    location: "/",
                    icon: <GridViewIcon />,
                },
                {
                    id: 2,
                    title: "Conversas",
                    location: "/chats",
                    icon: <ChatIcon />,
                },
                {
                    id: 3,
                    title: "Buscar",
                    location: "/search",
                    icon: <SearchIcon />,
                },
            ],
        },
        {
            id: 2,
            title: "Minhas Safras",
            location: "/producer",
        },
        {
            id: 3,
            title: "Seja um Corretor",
            location: "/agent",
        },
        {
            id: 4,
            title: "Meu Negócio",
            location: "/business",
        },
        {
            id: 5,
            title: "Minha Transportadora",
            location: "/shipping",
        },
        {
            id: 6,
            title: "Configurações",
            location: "/settings",
        },
    ]

    return list
}
