
import { useState } from "react";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import { Delete, Close } from "@mui/icons-material";

function ModalDelete({ producto, handleUpdate }) {

    // Estado del ModalDelete
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    function handleDelete() {

        fetch(`https://67b634b907ba6e59084014c8.mockapi.io/food/${producto.id}`, {

            method: "DELETE",
            headers: { "Content-Type": "application/json" }, 
        })
        .then(res => {

            if (!res.ok) { throw new Error("Error al eliminar el producto");  }            
            return res.json();
        })
        .then(() => {

            handleUpdate();  
            handleClose();   
        })
        .catch(error => console.error("Error en la eliminación:", error));
    }
    
    

    return (
        <>
        {/* Boton DELETE */}
        <IconButton size="small" onClick={handleOpen}>
            <Delete fontSize="small" />
        </IconButton>

        {/* ModalDelete */}
        <Modal open={open} onClose={handleClose}>

            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: 350, maxWidth: "90%", bgcolor: "white", boxShadow: 24, p: 4, borderRadius: 2, textAlign: "center" }} >


                {/* Botón de cerrar */}
                <IconButton onClick={handleClose} sx={{ position: "absolute", top: 8, right: 8, color: "#666" }}>
                    <Close />
                </IconButton>


                {/* Ícono grande */}
                <IconButton>
                    <Box sx={{ width: 50, height: 50, borderRadius: "50%", border: "2px solid #D32F2F", display: "flex", alignItems: "center", justifyContent: "center" }} >
                    <Close sx={{ fontSize: 30, color: "#D32F2F" }} />
                    </Box>
                </IconButton>


                {/* Mensaje de Eliminado */}
                <Typography sx={{ fontSize: 25, fontWeight: "bold", mb: 2 }}>Are you sure you want to delete this item?</Typography>


                {/* Botones de Acción */}
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                    <Button variant="outlined" onClick={handleClose} sx={{ borderColor: "#9C27B0", color: "#9C27B0" }}>CANCEL</Button>
                    <Button variant="contained" color="error" onClick={handleDelete}>DELETE</Button>
                </Box>

            </Box>
        </Modal>
        </>
    );
}

export default ModalDelete;