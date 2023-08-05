import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginAdmin from "./pages/LoginAdmin.jsx";
import NotFound from "./pages/NotFound.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { AdminProvider } from "./context/adminContext.jsx";
import Statistics from "./pages/Statistics.jsx";
import './App.css'

function App() {

  return (
      <AuthProvider>
          <AdminProvider>
              <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/login' element={<LoginAdmin/>}/>
                  <Route path='/statistics' element={<Statistics/>}/>
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </AdminProvider>
      </AuthProvider>
  )
}

export default App
