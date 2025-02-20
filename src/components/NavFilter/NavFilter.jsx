/* eslint-disable react/prop-types */

import { useState } from "react";
import { Box, Select, MenuItem, TextField, Typography, InputAdornment, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import ModalCreate from "../ModalCreate/ModalCreate";
import FoodCard from "../FoodCard/FoodCard";

function NavFilter({ productos }) {

    // Estados iniciales
    const [availability, setAvailability] = useState("");

    // String porque recibimos inputs
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const [busqueda, setBusqueda] = useState("");

    // Modal Create
    const [open, setOpen] = useState(false);



    // Estos estados se actualizan con cada interacción del usuario.
    const listaProductosFiltrados = productos.filter(prod => {

        // Filtrado por disponibilidad - si no cumple con las condiciones ese elemento retorna false y no se renderiza
        if (availability === "in-stock" && !prod.availability) return false;
        if (availability === "out-of-stock" && prod.availability) return false;
        
        // Filtrado por precio
        const price = parseFloat(prod.price);
        const min = minPrice ? parseFloat(minPrice) : 0;
        const max = maxPrice ? parseFloat(maxPrice) : Infinity;
        if (price < min || price > max) return false;

        // Filtrado por búsqueda
        if (busqueda && !prod.name.toLowerCase().includes(busqueda.toLowerCase())) return false;

        return true;
    });



    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "60%"}}>

                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                    backgroundColor: "#f5f5f5",
                    padding: 2,
                    borderRadius: 2,
                    width: "94%",
                    height: 50,
                }}>

                    {/* Dropdown de disponibilidad */}
                    <Select
                        sx={{ minWidth: 120, backgroundColor: "white", height: 30 }}
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                        displayEmpty
                    >
                        <MenuItem value="">Availability</MenuItem>
                        <MenuItem value="in-stock">In Stock</MenuItem>
                        <MenuItem value="out-of-stock">Out of Stock</MenuItem>
                    </Select>
                    

                    {/* Min - Max Price */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <TextField
                            type="number"
                            placeholder="Min"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            sx={{ maxWidth: 80, backgroundColor: "white", height: 30 }}
                            inputProps={{ style: { height: 20, padding: "5px" } }}
                        />
                        <Typography sx={{ mx: 0.5, fontSize: 16, fontWeight: "700" }}>-</Typography>
                        <TextField
                            type="number"
                            placeholder="Max"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            sx={{ maxWidth: 80, backgroundColor: "white", height: 30 }}
                            inputProps={{ style: { height: 20, padding: "5px" } }}
                        />
                    </Box>
                    

                    {/* Campo de búsqueda con icono */}
                    <TextField
                        placeholder="Search"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        sx={{ backgroundColor: "white", width: "30%", height: 30 }}
                        InputProps={{
                            sx: { height: 30 },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton size="small">
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                {/* Llamamos al Modal de CREAR */}
                <ModalCreate open={open} handleClose={() => setOpen(false)} />
            </Box>

            {/* Renderizado de productos filtrados */}
            <div className="flex flex-col gap-8 w-full">
                {
                listaProductosFiltrados.map((prod) => (
                <FoodCard 
                key={prod.id}
                name={prod.name}
                description={prod.description}
                price={prod.price}
                imagen={prod.imagen}
                availability={prod.availability}
                rating={prod.rating}
                />
                ))}
            </div> 
        </>
    );
}

export default NavFilter;