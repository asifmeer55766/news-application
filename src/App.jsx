import Header from "./Components/Header/Header";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Trending from "./Components/Trending/Trending";
import SingleNews from "./Components/SingleNews/SingleNews";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {

  return (
    <>


      <div className="main"></div>
      <BrowserRouter>
        <div className="header">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single-news" element={<SingleNews />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>


        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
