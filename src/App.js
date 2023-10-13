import { BrowserRouter, Routes, Route } from "react-router-dom"
;import { preloadImage } from './js/utilities.js';
import { useEffect } from 'react';
import global from "./images/home/global.png";
import furniture from "./images/home/furniture.jpg";
import fas from "./images/home/fas.jpg";
import dave from "./images/home/dave.jpg";
import bus from "./images/home/bus.jpg";
import candid from "./images/home/candid.jpg";
import stick from "./images/home/stick.jpg";
import login from "./images/home/login.jpg";
import tempimg from './images/template/tempimg.jpg';
import Layout from "./pages/Layout";
import Sites from "./pages/Sites";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import './scss/app.scss';
import './css/all.min.css';

const App = () => {

  useEffect(() => {

    const arr = [tempimg, global, furniture, fas, dave, bus, candid, stick, login];

    arr.forEach((img)=>{
      preloadImage(img);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Sites" element={<Sites />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
