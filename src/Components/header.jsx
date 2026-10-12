//importa el componente link para navegar entre las paginas
//import {link} from "react-router-dom"


//se importa el archivo de estilos CSS para el encabezado, se importen link para enrutar, imagenes
import "../csscomponents/header.css"


import logo from "..assets/react.svg"
//Se crea componente Header.jsx para el encabezado de la página, que incluye el logo y el título de la aplicación.
function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo de la compañia" className="logo-img"/>
                <h1>Tienda electrónica IntelCell</h1>
            </div>

            <nav className="menu">
                <link to="/">Inicio</link>
                <link to="/productos">Productos</link>
                <link to="/contacto">Contacto</link>
            </nav>
        </header>
    )
}

export default Header