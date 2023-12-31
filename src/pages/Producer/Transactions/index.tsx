import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../../../components/SearchInput"
import { CardCrop } from "../../../components/PanelProducerAgent/CardCrop"
import { ListTitle } from "../../../components/ListTitle"
import { Schedule } from "../../../components/PanelProducerAgent/Schedule"
import { useNavigate } from "react-router-dom"
import { useHeader } from "../../../hooks/useHeader"

interface TransactionsProps {
    agent: Agent
}

export const Transactions: React.FC<TransactionsProps> = ({ agent }) => {
    const navigate = useNavigate()
    const header = useHeader()

    useEffect(() => {
        return () => {
            header.setTitle("Transações")
        }
    }, [])

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                gap: "4vw",
                padding: "20vw 0"
            }}
        >
            <SearchInput placeholder="safras pagas" onChange={() => {}} />
            <Box
                sx={{
                    width: "100%",
                    overflow: "auto",
                    height: "90%",
                    flexDirection: "column",
                    gap: "4vw",
                    padding: "0 4vw 4vw",
                }}
            >
                <Box
                    sx={{
                        flexDirection: "column",
                        gap: "1vw",
                    }}
                >
                    <ListTitle title="Transações Recentes" location="" />
                    <Box
                        sx={{
                            flexDirection: "column",
                            gap: "4vw",
                        }}
                    >
                        <CardCrop
                            user={agent}
                            type="agent"
                            name="Corretor"
                            transactions={true}
                            handleClick={() => {
                                navigate("")
                            }}
                            variant={false}
                        />
                        <CardCrop
                            user={agent}
                            type="agent"
                            name="Corretor"
                            variant={false}
                            transactions={true}
                            handleClick={() => {}}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        flexDirection: "column",
                        gap: "1vw",
                    }}
                >
                    <ListTitle title="Transações Pagas" location="" />
                    <Box
                        sx={{
                            flexDirection: "column",
                            gap: "4vw",
                        }}
                    >
                        <Schedule status="schedule" />
                        <Schedule status="schedule" />
                    </Box>
                </Box>
                <Box
                    sx={{
                        flexDirection: "column",
                        gap: "1vw",
                    }}
                >
                    <ListTitle title="Transações Pendentes" location="" />
                    <Box
                        sx={{
                            flexDirection: "column",
                            gap: "4vw",
                        }}
                    >
                        <Schedule status="schedule" />
                        <Schedule status="schedule" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
