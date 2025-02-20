/* eslint-disable react/prop-types */

import FoodCard from "../FoodCard/FoodCard";
import NavFilter from "../NavFilter/NavFilter";

function ListaItems( {productos} ) {

  console.log(productos);

  return (

    <div className="flex flex-col justify-center items-center max-w-1/3 gap-8 py-8">


        <div className="flex flex-row justify-between items-center w-[60%]">
          <h2 className="text-3xl font-bold">Home Page</h2>
          <p className="text-xl font-bold">Total Results: 3</p>
        </div>


        {/* Este nav filter deberia influir en que se muestra */}
        <NavFilter />
        

        {/* Este div es el container de todas las cards */}
        <div className="flex flex-col gap-8 w-full">
          { productos.map((prod) => 
          
          <FoodCard 
          key={prod.id}
          name={prod.name}
          description={prod.description}
          price={prod.price}
          imagen={prod.imagen}
          availability={prod.availability}
          rating={prod.rating}
          />) 
            
        }
        </div>

        
    </div>

  )

}

export default ListaItems;