import { Route, Routes } from "react-router-dom";
import { SearchProvider } from "./pages/Context/SearchContext";
import Home from "./pages/LandingPage/Home";
import ProductDetailPage from "./pages/Product/ProductDetailPage";

function App() {
  return (
    <>
    <SearchProvider>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product-detail-page/:id' exact element={<ProductDetailPage/>}/>
    </Routes>
    
    </SearchProvider>
      
    </>
  );
}

export default App;
