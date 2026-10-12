//se importan los encabezados de los componnentes de las paginas principales
import Header from "../Components/header"
import Footer from "../Components/footer"

//se importan los estilos de la aplicación
import "../csscomponents/App.css"

//importar el enrrutador de react
import {BrowserRouter} from "react-router-dom"

//se importa las rutas definicas en AppRouter.jsx
import AppRouter from "./approuter"

// Este archivo es la base del proyecto y se importan todos los componentes y paginas adicionales que se van a utilizar en la aplicación. Se importa el archivo de estilos CSS para la aplicación, así como los componentes Header y Footer, y las páginas Home, About, Contact y Products. Se utiliza React Router para enrutar entre las diferentes páginas de la aplicación.
function App() {
  return (
    <browserRouter>



    <div className="App">
      <Header />
      <main>


        
        <AppRouter />
      </main>
      <Footer />
    </div>



    </browserRouter>
  )
}

export default App
