
import Header from '../Components/header.jsx'
import Footer from '../Components/footer.jsx'
import '../csscomponents/App.css'

import { BrowserRouter } from 'react-router-dom'

import AppRouter from './approuter.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="contenido">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
