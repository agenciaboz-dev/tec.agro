import React from "react"
import { Box } from "@mui/material"
import { Category } from "../../components/Category"
import { useCrops } from "../../hooks/useCrops"

interface CategoriesListProps {}

export const CategoriesList: React.FC<CategoriesListProps> = ({}) => {
    const { categories } = useCrops()
    
    return (
        <Box sx={{ gap: "2vw", overflowX: "auto", margin: "0 -4vw", padding: "0 4vw" }}>
            {categories.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </Box>
    )
}
