/* eslint-disable react/prop-types */

import Item from "../Item/Item";

function ListaItems( {productos} ) {

    // hasta aca se pasan bien 
    console.log(productos);

  return (

    <div className="flex flex-column justify-center align-center max-w-1/3 bg-red-200">
        <div >
        { productos.map((prod) => <Item key={prod.id} productos={prod}/>) }
        </div>
    </div>

  )

}

export default ListaItems;