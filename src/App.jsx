
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import MainListaItems from './components/MainListaItems/MainListaItems';
import About from './components/About/About';

function App() {

    return (
      <BrowserRouter>
        <Nav />

          <Routes>

            {/* Pagina principal, listamos */}
            <Route path="/" element={ <MainListaItems /> } />

            {/* About */}
            <Route path="/about" element={ <About /> } />

          </Routes>

        <Footer />
      </BrowserRouter>
    );
}

export default App;




/* 
/* Componente que lista todos los items de la API 
import ItemsListContainer from "./components/ItemsListContainer";

/* Componente que permite acceder a X item con su id 
import ItemDetailContainer from "./components/ItemDetailContainer";

import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros"



function App() {

    return (
        <BrowserRouter> {/* Todo debe ser envuelto en BrowserRouter}

          {/* Barra de Navegación - va a estar en cualquier pagina}
          <Navbar />

          <Routes>

            <Route path="/" element={ <ItemsListContainer/> } />  {/* Osea http://localhost:5173/ }

            {/* REVISAR PQ NO ANDA }
            <Route path="/item/:id" element={ <ItemDetailContainer/> } />  {/* http://localhost:5173/item }
          
            {/* En este path llegamos a la pagina nosotros }
            <Route path="/nosotros" element={ <Nosotros/>} />


          </Routes>

        </BrowserRouter>
    );

}

export default App;
 */