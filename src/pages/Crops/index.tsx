import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { useHeader } from "../../hooks/useHeader"
import { CategoriesList } from "./CategoriesList"
import { Banners } from "./Banners"
import { NearYouList } from "./NearYouList"
import { CropsList } from "./CropsList"

interface CropsProps {}

export const Crops: React.FC<CropsProps> = ({}) => {
    const header = useHeader()
    const images = [
        "https://imagens-cdn.canalrural.com.br/wp-content/uploads/safra-do-ibge-2023-erdenrson-araujo-trilux-cna.jpg",
        "https://www.portaldoagronegocio.com.br/img/cache/cover//storage/images/notices/607452f8cbeeb.jpg",
    ]

    useEffect(() => {
        header.setTitle("Safras")
    }, [])

    return (
        <Box
            sx={{
                padding: "20vw 0"
            }}
        >
            <Box
                sx={{
                    flexDirection: "column",
                    padding: "0 4vw 4vw",
                    gap: "4vw",
                    width: "100vw",
                    height: "100%",
                    overflowX: "hidden",
                    overflowY: "auto"
                }}
            >
                <CategoriesList />
                <Banners images={images} />
                <NearYouList />
                <CropsList />
            </Box>
        </Box>
    )
}
