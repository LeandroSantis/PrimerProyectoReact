import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import ProductsContainer from "./containers/ProductsContainer";
import { EcommerceProvider } from "./context/EcommerceContext";

function App() {
  return (
    <div className="App">
      <Router>
        <EcommerceProvider>
          <Routes>
            <Route path="/productos" element={<ProductsContainer />} />
            <Route path="/" element={<HomeContainer />} />
            <Route path="/productos:busqueda" element={<ProductsContainer />} />
          </Routes>
        </EcommerceProvider>
      </Router>
    </div>
  );
}

export default App;
