/* eslint-disable react/prop-types */

import NavFilter from "../NavFilter/NavFilter";

function ListaItems( {productos} ) {


  return (

    <div className="flex flex-col justify-center items-center max-w-1/3 gap-8 py-8">

        <div className="flex flex-row justify-between items-center w-[60%]">
          <h2 className="text-3xl font-bold">Home Page</h2>

          {/* Como resuelvo la parte de pasarle los resultados???  */}
          <p className="text-xl font-bold">Total Results: 3</p>
        </div>

        {/* Barra de Filtrado + ListaItems en base a los filtros */}
        <NavFilter productos = {productos} />
        
    </div>

  )
}

export default ListaItems;