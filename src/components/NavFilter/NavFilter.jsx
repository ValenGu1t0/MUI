
import { useState, useEffect } from "react";
import { Box, Select, MenuItem, TextField, Typography, InputAdornment, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import ModalCreate from "../ModalCreate/ModalCreate";
import FoodCard from "../FoodCard/FoodCard";

function NavFilter({ productos, handleUpdate }) {

    // Modal Create
    const [open, setOpen] = useState(false);


    // Estados iniciales de búsqueda - String porque recibimos inputs
    const [availability, setAvailability] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [busqueda, setBusqueda] = useState("");


    // Función que filtra en base los parámetros ingresados - estos states se actualizan con cada interacción del usuario.
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


    // Contador de resultados
    const [resultados, setResultados] = useState(0);
    // Se ejecuta cada vez que la lista de resultados cambia
    useEffect(() => {  setResultados(listaProductosFiltrados.length);  }, [listaProductosFiltrados]);   



    return (

        <>
            {/* Home Page */}
            <div className="flex flex-row justify-between items-center w-full max-w-[60%] celu-s:flex-col celu:flex-col sm:max-w-[70%] md:max-w-[70%] ">
                <h2 className="text-3xl font-bold text-indigo-950">Home Page</h2>
                <p className="text-xl font-bold">Total Results: {resultados}</p>
            </div>

            {/* Contenedor de filtros */}
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: {xs:"space-between", sm:"center"},
            width: "100%", maxWidth: { xs:"75%", sm:"90%", md:"85%" }, gap: "2rem", p: 2 }} >

                {/* NavFilter */}
                <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "row" }, justifyContent: { xs: "center", sm: "space-between" }, alignItems: { xs:"center" },
                gap: 2, backgroundColor: "#f5f5f5", padding: 2, borderRadius: 1, width: { xs: "100%", sm: "65%"}, maxWidth: "100%" }} >

                    {/* Dropdown de Stock */}
                    <Select sx={{ minWidth: 120, maxWidth: 130, backgroundColor: "white", height: 30 }} value={availability}
                    onChange={(e) => setAvailability(e.target.value)} displayEmpty >
                        <MenuItem value="">Availability</MenuItem>
                        <MenuItem value="in-stock">In Stock</MenuItem>
                        <MenuItem value="out-of-stock">Out of Stock</MenuItem>
                    </Select>


                    {/* Rango de Precio */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <TextField sx={{ maxWidth: 80, backgroundColor: "white", height: 30 }} type="number" placeholder="Min" value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}  
                        inputProps={{ min: 0, style: { height: 20, padding: "5px" } }}/>
                        
                        <Typography sx={{ mx: 0.5, fontSize: 16, fontWeight: "700" }}>-</Typography>

                        <TextField sx={{ maxWidth: 80, backgroundColor: "white", height: 30 }} type="number" placeholder="Max" value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)} 
                        inputProps={{ min: 0, style: { height: 20, padding: "5px" } }} />
                    </Box>


                    {/* Input de búsqueda */}
                    <TextField sx={{ backgroundColor: "white", width: { xs: "100%", sm: "30%" }, maxWidth: "70%", height: 30 }} 
                    placeholder="Search" value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    InputProps={{ sx: { height: 30 }, endAdornment: (
                        <InputAdornment position="end">
                            <IconButton size="small">
                            <Search />
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
                    />


            {/* Modal de CREAR */}
            </Box>
            <ModalCreate open={open} handleClose={() => setOpen(false)} handleUpdate={handleUpdate} />
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
                id={prod.id}
                handleUpdate={handleUpdate}
                />
                ))}
            </div> 
        </>
    );
}

export default NavFilter;