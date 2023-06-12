import './App.css'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import Dashboard from './Pages/Dashboard'
import NotFound from "./Pages/404Page"
import UrlPage from './Pages/UrlPage'
import LinkShortener from './Pages/QRCodePage'
import ProtectedRoute from './Components/ProtectedRoute'
import { Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './Context/AuthContext'
function App() {
  
  return (
    <>
    <AuthContextProvider>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/dashboard"
       element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
      <Route path="/urlshortener"
        element={<ProtectedRoute> <UrlPage /> </ProtectedRoute>} />
      <Route path="/qrcodegenerator"
        element={<ProtectedRoute> <LinkShortener /> </ProtectedRoute>} />
    </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
