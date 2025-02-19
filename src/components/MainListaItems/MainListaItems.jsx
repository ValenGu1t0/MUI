
import fetchData from "../../helpers/fetchData"
import ListaItems from "../ListaItems/ListaItems";
import { useState, useEffect } from 'react';


function MainListaItems() { 

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        fetchData()
        .then((res) => {  setProductos(res);  })

    }, [])


    return (

        <div>
            <ListaItems productos = {productos} />   
        </div>
    )

}

export default MainListaItems;