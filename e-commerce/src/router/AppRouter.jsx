import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../App"
import ProductList from "../components/Products/ProductList"
import ProductDetail from "../components/Products/ProductDetail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/productos" element={<ProductList />} />
        <Route path="/productos/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
