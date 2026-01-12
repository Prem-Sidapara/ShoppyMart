import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import HomePage from "./pages/HomePage.jsx"
import ProductPage from "./pages/ProductPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import EditProductPage from "./pages/EditProductPage.jsx"
import ThemeSelector from "./components/ThemeSelector.jsx"

function App() {


  return (
    <div className="min-h-screen bg-white ">
      <Navbar/>
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
        </Routes>

      </main>
      
    </div>
  )
}

export default App
