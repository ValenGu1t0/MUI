import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Nav() {

    return (

        <nav className="flex flex-row p-4 bg-indigo-500 justify-between items-center">
            
            {/* LOGO */}
            <div className="flex flex-row items-center gap-4">
                <img className="max-w-12" src="src/assets/food.png" alt="logo-pagina"/>
                <h2 className="font-bold text-2xl" id="foodar">FoodAr</h2>
            </div>

            {/* OPCIONES */}
            <ul className="flex flex-row gap-4">
                <li className="flex items-center gap-2 transition duration-200 hover:scale-105">
                    <i className="fa-solid fa-house"></i>
                    <Link className="font-semibold h:" to="/">Home</Link>
                </li>
                <li className="flex items-center gap-2 transition duration-200 hover:scale-105">
                    <i className="fa-solid fa-circle-info"></i>
                    <Link className="font-semibold" to="/about">About</Link>
                </li>
                <li className="flex items-center gap-2 transition duration-200 hover:scale-105">
                    <i className="fa-brands fa-github"></i>
                    <Link className="font-semibold" to="https://github.com/ValenGu1t0" target="_blank">GitHub</Link>
                </li>
            </ul>

        </nav>

    )


}

export default Nav;
