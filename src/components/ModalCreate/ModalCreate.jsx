
import { useState } from "react";
import { Modal, Box, Typography, TextField, Button, Select, MenuItem, Fab, IconButton } from "@mui/material";
import { Add, Close } from "@mui/icons-material";


// Función que abre el modal de creación y envía el nuevo item al servidor
function ModalCreate({ handleUpdate }) {

        // Estado del Modal
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
    
        // States del value de cada Textfield (input) - cada atributo de la comida que se quiere listar
        const [name, setName] = useState("");
        const [price, setPrice] = useState("");
        const [rating, setRating] = useState("");
        const [description, setDescription] = useState("");
        const [imagen, setImagen] = useState("");
        const [availability, setAvailability] = useState("true");
    
        function handleSubmit() {

            fetch("https://67b634b907ba6e59084014c8.mockapi.io/food", {

                // LAS PROPIEDADES SI O SI respetar nombre pq en la API se escribe cualquier cosa
                method: "POST", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    price: parseFloat(price),
                    rating,
                    description,
                    imagen,
                    availability: availability === "true",
                }),
            })
            .then(() => {

                // Actualizamos y cerramos el Modal
                handleUpdate();
                handleClose();
            })
            .catch(e => console.error(e));
        }
    
        
        return (
            <>
            <Fab size="small" color="primary" sx={{ backgroundColor: "#9C27B0", height: 30, width: 35 }} onClick={handleOpen}>
            <Add fontSize="small" />
            </Fab>
    
            <Modal open={open} onClose={handleClose} aria-labelledby="create-product-title">

                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "55%",
                    bgcolor: "white",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 1,
                }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography id="create-product-title" variant="h6" sx={{ color: "#9C27B0" }}>Create Product</Typography>
                    <IconButton onClick={handleClose} sx={{ color: "#9C27B0" }}><Close /></IconButton>
                    </Box>
    
                    <Box sx={{ display: "flex", gap: 2 }}>

                        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField label="Name of food" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                            <TextField label="Price" type="number" fullWidth value={price} onChange={(e) => setPrice(e.target.value)} />
                            <TextField label="Number of stars" type="number" fullWidth value={rating} inputProps={{ min: 0, max: 5 }} onChange={(e) => setRating(Number(e.target.value))} />
                        </Box>
    
                        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField label="Description" fullWidth value={description} onChange={(e) => setDescription(e.target.value)} />
                            <Select fullWidth value={availability} onChange={(e) => setAvailability(e.target.value)}>
                                <MenuItem value="true">In Stock</MenuItem>
                                <MenuItem value="false">Out of Stock</MenuItem>
                            </Select>
                            <TextField label="Image URL" fullWidth value={imagen} onChange={(e) => setImagen(e.target.value)} />
                        </Box>

                    </Box>

                    {/* Toma los valores actuales de cada prop (TextField) y envía un item nuevo al servidor */}
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                    <Button variant="contained" sx={{ backgroundColor: "#9C27B0", px: 6, py: 1 }} onClick={handleSubmit}>Create</Button>
                    </Box>
                </Box>
            </Modal>
            </>
        );
}
    
export default ModalCreate;