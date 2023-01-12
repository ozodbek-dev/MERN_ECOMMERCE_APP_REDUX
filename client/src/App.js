import { useEffect } from "react";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import webfont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";

function App() {
  useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
