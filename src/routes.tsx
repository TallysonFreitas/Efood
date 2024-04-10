import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pratos" element={<Home />} />
  </Routes>
)

export default Rotas
