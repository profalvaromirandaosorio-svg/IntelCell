//se importa el archivo de estilos CSS para el encabezado, se importen link para enrutar, imagenes
import "../csscomponents/header.css"

//Se crea componente Header.jsx para el encabezado de la página, que incluye el logo y el título de la aplicación.
function Header() {
    return (
        <header className="header">
            <div className="logo">
                {/* Se agrega el logo de la tienda electrónica IntelCell */}
                
                <h1>Tienda electrónica IntelCell</h1>
            </div>
        </header>
    )
}

export default Header