import "./App.css";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import About from "./pages/About";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import India from "./pages/India";
import Europe from "./pages/Europe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/india" element={<India />} />
          <Route path="/europe" element={<Europe/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
