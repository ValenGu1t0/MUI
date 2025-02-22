
import { Card, CardContent, CardMedia, Typography, Box, Chip, IconButton } from "@mui/material";
import { Star, StarBorder  } from "@mui/icons-material";
import ModalUpdate from "../ModalUpdate/ModalUpdate";
import ModalDelete from "../ModalDelete/ModalDelete";


const FoodCard = ({ name, description, price, imagen, availability, rating, id, handleUpdate }) => {

        // Desestructuramos la información para pasarla a los Modales
        const producto = { name, description, price, imagen, availability, rating, id };

        return (
        <Card 
        sx={{ display: "flex", alignItems: { xs:"stretch", sm:"stretch", md:"center" }, justifyContent:"center",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        p: 2, borderRadius: 3, boxShadow: 3, margin:"auto", 
        width: "100%", maxWidth: {xs:"70%", sm:"350px", md:"800px" }, 
        }}>


            {/* Imagen de la Card*/}
            <CardMedia component="img" sx={{ width: "100%",  maxWidth: {xs:"350px", sm:"350px", md:"200px"}, 
            height: 150, borderRadius: 2}} image={imagen} alt={name} />
    

            {/* Contenido de la Card*/}
            <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent:"space-between", gap: "1.5rem" }}>

                {/* Título e Iconos */}
                <Box sx={{
                    display:"flex",
                    justifyContent:"space-between", 
                    alignItems:"center", 
                    width:"100%", 
                    gap: 4,
                    }} >
                    
                    {/* Titulo Producto */}
                    <Typography sx={{ fontSize: { xs:"1rem", sm:"1.5rem"} }} variant="h6" fontWeight="bold">{name}</Typography>

                    {/* Modals de Create y Delete */}
                    <Box sx={{ display:"flex", flexDirection: "row", justifyContent:"flex-end"}}>
                        
                        {/* Llamamos al Modal de UPDATE - Actualiza el elemento del id actual */}
                        <IconButton size="small">
                            <ModalUpdate producto={producto} handleUpdate={handleUpdate} />
                        </IconButton> 

                        {/* Llamamos al Modal de DELETE - Elimina el elemento del id actual */}
                        <IconButton size="small">
                            <ModalDelete producto={producto} handleUpdate={handleUpdate} />        
                        </IconButton>

                    </Box>

                </Box>
        
                {/* Descripción */}
                <Typography variant="body2" color="textSecondary" textAlign="justify">{description}</Typography>
        

                {/* Sección de Precio, Stock y Rating*/}
                <Box sx={{ 
                display: "flex", 
                flexDirection: { xs: "column", md: "row" }, 
                justifyContent: "space-between", 
                alignItems: "center", 
                gap: "1.5rem",
                }}>
                
                    {/* Sección de Precio y Stock */}
                    <Box sx={{ 
                    display: "flex", 
                    flexDirection: { xs: "column", sm: "row" }, 
                    alignItems: "center", 
                    justifyContent: "space-between", 
                    width: "100%", 
                    gap: 1.5 
                    }}>
                    
                        {/* Precio */}
                        <Typography variant="subtitle1" fontWeight="bold">
                        Price: ${price}
                        </Typography>

                        {/* Stock */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <Typography 
                            sx={{ display: { xs: "none", md: "block" } }} 
                            variant="subtitle1" 
                            fontWeight="bold"
                            >Availability:</Typography>

                            <Chip 
                            label={availability ? "In Stock" : "Out of Stock"} 
                            color={availability ? "success" : "error"} 
                            sx={{ fontWeight: "bold" }} 
                            />
                        </Box>

                        {/* Rating */}
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {[...Array(5)].map((_, index) => 
                            index < rating ? <Star key={index} color="warning" /> : <StarBorder key={index} color="disabled" />
                        )}
                        </Box>

                    </Box>
                
                </Box>

              
            </CardContent>

        </Card>
        );
};
  
export default FoodCard;