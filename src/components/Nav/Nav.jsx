import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Nav() {

    return (

        <nav className="flex flex-row p-4 bg-indigo-600 justify-between items-center shadow-md shadow-gray-300/70">
            
            {/* LOGO */}
            <Link to="/">
            <div className="flex flex-row items-center gap-4">
                <img className="max-w-12" src="src/assets/food.png" alt="logo-pagina"/>
                <h2 className="font-bold text-2xl text-indigo-950 drop-shadow-lg" id="foodar">FoodAr</h2>
            </div>
            </Link>

            {/* OPCIONES */}
            <ul className="flex flex-row gap-6">
                
                <Link className="font-semibold" to="/">
                <li className="flex items-center gap-2 transition duration-200 text-indigo-950 hover:scale-105 hover:text-slate-100">
                <i className="fa-solid fa-house"></i>Home
                </li>
                </Link>

                <Link className="font-semibold" to="/about">
                <li className="flex items-center gap-2 transition duration-200 text-indigo-950 hover:scale-105 hover:text-slate-100">
                <i className="fa-solid fa-circle-info"></i>About
                </li>
                </Link>

                <Link className="font-semibold" to="https://github.com/ValenGu1t0" target="_blank">
                <li className="flex items-center gap-2 transition duration-200 text-indigo-950 hover:scale-105 hover:text-slate-100">
                <i className="fa-brands fa-github"></i>GitHub
                </li>
                </Link>
            </ul>

        </nav>

    )


}

export default Nav;
