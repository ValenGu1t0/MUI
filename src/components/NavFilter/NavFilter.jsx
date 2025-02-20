
import { Box, TextField, Select, MenuItem, InputAdornment, IconButton, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import ModalCreate from "../ModalCreate/ModalCreate";


const SearchBar = () => {


    const [availability, setAvailability] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    // Estado inicial del boton CREAR
    const [open, setOpen] = useState(false);


    return (

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
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                displayEmpty
                sx={{ minWidth: 120, backgroundColor: "white", height: 30 }}
            >
                <MenuItem value="">Availability</MenuItem>
                <MenuItem value="in-stock">In Stock</MenuItem>
                <MenuItem value="out-of-stock">Out of Stock</MenuItem>
            </Select>
            


            {/* Min - Max Price */}
            <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

            {/* Llamamos al Modal de CREATE */}
            <ModalCreate open={open} handleClose={() => setOpen(false)} />
            

        </Box>
    );
};

export default SearchBar;
