import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
import NotFound from "./pages/NotFound.jsx";
import './App.css'

function App() {

  return (
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default App
