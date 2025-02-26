
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

            {/* Pagina principal, listamos productos */}
            <Route path="/" element={ <MainListaItems /> } />

            {/* Pagina About */}
            <Route path="/about" element={ <About /> } />

          </Routes>

        <Footer />
      </BrowserRouter>
    );
}

export default App;