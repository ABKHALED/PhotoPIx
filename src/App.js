import { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Overlay from "./components/overlay/Overlay";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
import Photos from "./pages/Photos/Photos";
import Loved from "./pages/loved/Loved";
import Photo from "./pages/photo/Photo";
import Video from "./pages/video/Video";
import Videos from "./pages/Videos/Videos";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <div className="App">
      <Overlay />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="photos">
          <Route index element={<Photos />} />
          <Route path="photos/:id" element={<Photo />} />
        </Route>
        <Route path="loved" element={<Loved />} />
        <Route path="videos">
          <Route index element={<Videos />} />
          <Route path="videos/:vid" element={<Video />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
