
import fetchData from "../../helpers/fetchData"
import ListaItems from "../ListaItems/ListaItems";
import { useState, useEffect, useCallback } from 'react';

function MainListaItems() { 

    const [productos, setProductos] = useState([]);

    // Función principal
    const handleUpdate = useCallback(() => {

        fetchData()
        .then((res) => {  setProductos(res);   })

    }, [])


    useEffect(() => {

        handleUpdate();

    }, [handleUpdate])


    return (

        <>
            <ListaItems productos={productos} handleUpdate={handleUpdate} />   
        </>
    )

}

export default MainListaItems;