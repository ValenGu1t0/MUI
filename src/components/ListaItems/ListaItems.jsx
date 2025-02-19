/* eslint-disable react/prop-types */

import FoodCard from "../FoodCard/FoodCard";

function ListaItems( {productos} ) {

  return (

    <div className="flex flex-col justify-center items-center max-w-1/3 gap-8">

        <div className="flex flex-row justify-between items-center w-[60%] mt-8">
          <h2 className="text-3xl font-bold">Home Page</h2>
          <p className="text-xl font-bold">Total Results: 3</p>  {/* //aca va una variable de la funcion filtrar// */}
        </div>



        {/* ACA LLAMARIA AL COMPONENTE barra de nav de filtrar */}
        <div className="flex flex-row bg-slate-400 w-[60%] p-4">
          <p className="text-center">ACA VA EL NAV DE ITEMS</p>  {/* //aca va una variable de la funcion filtrar// */}
        </div>



        {/* Este div es el container de todas las cards */}
        <div className="flex flex-col gap-8 w-full">
          { productos.map((prod) => 
          
          <FoodCard 
          key={prod.id}
          titulo={prod.titulo}
          descripcion={prod.descripcion}
          precio={prod.precio}
          imagen={prod.imagen}
          stock={prod.stock}
          rating={prod.rating}
          />) 
            
        }
        </div>

        
    </div>

  )

}

export default ListaItems;