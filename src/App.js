import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductItem } from "./pages/ProductItem";
import { ProductsList } from "./pages/ProductsList";
import { InvalidUrl } from "./components/InvalidUrl";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="min-h-full min-w-full">
        <Routes>
          <Route path="" element={<ProductsList api="products" />} />
          <Route path="/products/:id" element={<ProductItem />} />
          <Route path="*" element={<InvalidUrl />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
