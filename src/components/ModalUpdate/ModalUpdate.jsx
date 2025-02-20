
import { useState } from "react";
import { Modal, Box, Typography, TextField, Button, Select, MenuItem, IconButton } from "@mui/material";
import { Close, Edit } from "@mui/icons-material";

function ModalUpdate() {

    // useState manejado por el <Fab /> 
    const [open, setOpen] = useState(false);

    // Funciones para Mostrar / Ocultar
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (

            <>
            {/* Botón flotante que abre el modal de UPDATE */}
            <IconButton size="small" onClick={handleOpen}>
            <Edit fontSize="small" />
            </IconButton>


            {/* Modal */}
            <Modal open={open} onClose={handleClose} aria-labelledby="create-product-title">

                <Box
                sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "55%", 
                bgcolor: "white",
                boxShadow: 24,
                p: 4,
                borderRadius: 1,
                }}
                >

                    {/* HEADER */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>

                        {/* Titulo */}
                        <Typography id="create-product-title" variant="h6" sx={{ color: "#9C27B0" }}>Update Product</Typography>

                        {/* Cerrar - handleClose */}
                        <IconButton onClick={handleClose} sx={{ color: "#9C27B0" }}><Close /></IconButton>
                    </Box>
                    

                    {/* FORM */}
                    <Box sx={{ display: "flex", gap: 2 }}>

                        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField label="Name of food" fullWidth />
                            <TextField label="Price" type="number" fullWidth />
                            <TextField label="Number of stars" type="number" fullWidth />
                        </Box>

                        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField label="Ingredients" fullWidth />
                            <Select fullWidth defaultValue="In Stock">
                                <MenuItem value="In Stock">In Stock</MenuItem>
                                <MenuItem value="Out of Stock">Out of Stock</MenuItem>
                            </Select>
                            <TextField label="Image URL" fullWidth />
                        </Box>

                    </Box>

                    
                    {/* SUBMIT */}
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                        <Button variant="contained" sx={{ backgroundColor: "#9C27B0", px: 6, py: 1 }}>Create</Button>
                    </Box>

                </Box>


            </Modal>
            </>
        );
}

export default ModalUpdate;