/* eslint-disable react/prop-types */

import { Card, CardContent, CardMedia, Typography, Box, Chip, IconButton } from "@mui/material";
import { Star, StarBorder, Edit, Delete } from "@mui/icons-material";


const FoodCard = ({ titulo, descripcion, precio, imagen, stock, rating }) => {

        return (
        <Card sx={{ display: "flex", alignItems: "center", p: 2, borderRadius: 2, boxShadow: 3, width: "60%", margin:"auto"}}>


            {/* Imagen de la Card*/}
            <CardMedia component="img" sx={{ width: 200, height: 150, borderRadius: 2 }} image={imagen} alt={titulo} />
    

            {/* Contenido de la Card*/}
            <CardContent sx={{ flex: 1, ml: 2 }}>

                {/* Título e Iconos */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" fontWeight="bold">{titulo}</Typography>
                    <Box>
                    <IconButton size="small"><Edit fontSize="small" /></IconButton>
                    <IconButton size="small"><Delete fontSize="small" /></IconButton>
                    </Box>
                </Box>
        
                {/* Descripción */}
                <Typography variant="body2" color="textSecondary">{descripcion}</Typography>
        
                {/* Sección de Precio, Stock y Rating */}
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={5}>


                    {/* Precio */}
                    <Typography variant="subtitle1" fontWeight="bold">
                    Price: ${precio}
                    </Typography>
        

                    {/* Stock */}
                    <Typography variant="subtitle1" fontWeight="bold">
                    Avaliability: <Chip 
                    label={stock ? "In Stock" : "Out of Stock"} 
                    color={stock ? "success" : "error"} 
                    sx={{ fontWeight: "bold" }} />
                    </Typography>
                    
        
                    {/* Rating */}
                    <Box display="flex">
                    {[...Array(5)].map((_, index) => (
                        index < rating ? <Star key={index} color="warning" /> : <StarBorder key={index} color="disabled" />
                    ))}
                    </Box>

                </Box>
            </CardContent>
        </Card>
        );
};
  
export default FoodCard;
