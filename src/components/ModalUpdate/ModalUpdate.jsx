
import { useState } from "react";
import { Modal, Box, Typography, TextField, Button, Select, MenuItem, IconButton } from "@mui/material";
import { Close, Edit } from "@mui/icons-material";


function ModalUpdate({ producto, handleUpdate }) {

    // Estado del ModalUpdate
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    // States iniciales del producto a modificar - las props del item actual
    const [name, setName] = useState(producto.name);
    const [price, setPrice] = useState(producto.price);
    const [rating, setRating] = useState(producto.rating);
    const [description, setDescription] = useState(producto.description);
    const [imagen, setImagen] = useState(producto.imagen);
    const [availability, setAvailability] = useState(producto.availability);


    function handleSubmit() {

        // Recibimos el id del item a modificar y hacemos un PUT con la nueva info
        fetch(`https://67b634b907ba6e59084014c8.mockapi.io/food/${producto.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                price,
                rating,
                description,
                imagen,
                availability
            })
        })
        .then(() => {   // Actualizamos estado y cerramos el modal

            handleUpdate();
            handleClose();
        })
        .catch(e => {  console.error("Error en la actualización:", e);  });

    }
    
    
    return (
        <>
        <IconButton size="small" onClick={handleOpen}>
        <Edit fontSize="small" />
        </IconButton>

        <Modal open={open} onClose={handleClose}>

            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: { xs:"90%", sm:"55%" }, bgcolor: "white", boxShadow: 24, p: 4, borderRadius: 1 }}>
                
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography variant="h6" sx={{ color: "#9C27B0" }}>Update Product</Typography>
                    <IconButton onClick={handleClose} sx={{ color: "#9C27B0" }}><Close /></IconButton>
                </Box>

                <Box sx={{ display: "flex", flexDirection: { xs:"column", sm:"column", md:"row" }, gap: 2 }}>

                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField label="Name of food" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField label="Price" type="number" fullWidth value={price} onChange={(e) => setPrice(e.target.value)} />
                        <TextField label="Number of stars" type="number" fullWidth value={rating} onChange={(e) => setRating(Number(e.target.value))} />
                    </Box>

                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField label="Description" fullWidth value={description} onChange={(e) => setDescription(e.target.value)} />
                        <Select fullWidth value={availability.toString()} onChange={(e) => setAvailability(e.target.value === "true") }>
                            <MenuItem value="true">In Stock</MenuItem>
                            <MenuItem value="false">Out of Stock</MenuItem>
                        </Select>
                        <TextField label="Image URL" fullWidth value={imagen} onChange={(e) => setImagen(e.target.value)} />
                    </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Button variant="contained" sx={{ backgroundColor: "#9C27B0", px: 6, py: 1 }} onClick={handleSubmit}>Update</Button>
                </Box>
            </Box>
        </Modal>
        </>
    );
}

export default ModalUpdate;