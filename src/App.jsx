import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
