// importar las herramientas de enrutamento
import {Routes, Route} from "react-router-dom"

// importar las paginas principales
import Home from "./Home"
import Products from "./Products"
import Contact from "./Contact"

//definir las rutas principales de la aplicacion
function AppRouter() {
    return (
        <Routes>
            {/*enruta a la pagina princiap*/} 
            <Route path="/" element={<Home />} />

            {/*enruta a la pagina productos*/}
            <Route path="/productos" element={<Productos />} />
            
            {/*enruta a la pagina Contacto*/}
            <Route path="/contacto" element={<Contacto />} />
        </Routes>
    )
}

export default AppRouter