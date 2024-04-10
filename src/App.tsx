import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
