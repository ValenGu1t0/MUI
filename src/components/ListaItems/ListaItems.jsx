
import NavFilter from "../NavFilter/NavFilter";

function ListaItems( {productos, handleUpdate} ) {

  return (

    <div className="flex flex-col justify-center items-center max-w-1/3 gap-8 py-8">

        {/* Barra de Filtrado + ListaItems en base a los filtros */}
        <NavFilter productos={productos} handleUpdate={handleUpdate}/>
        
    </div>

  )
}

export default ListaItems;