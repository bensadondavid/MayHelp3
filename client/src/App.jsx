import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Services from './Pages/Services'
import Prices from './Pages/Prices'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
