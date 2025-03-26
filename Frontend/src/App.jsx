import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Features from "./pages/Features"
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import UserRegister from "./pages/auth/UserRegister"
import CompanyRegister from "./pages/auth/CompanyRegister"
import UserLogin from "./pages/auth/UserLogin"
import CompanyLogin from "./pages/auth/CompanyLogin"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/company/register" element={<CompanyRegister />} />
      <Route path="/company/login" element={<CompanyLogin />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
