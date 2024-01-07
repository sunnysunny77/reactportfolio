import { BrowserRouter, Routes, Route } from "react-router-dom";
import { preloadImage } from './js/utilities.js';
import Layout from "./pages/Layout";
import Sites from "./pages/Sites";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import tempimg from './images/template/3px-tile.png';
import './scss/app.scss';
import './css/all.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Sites" element={<Sites />} />
          <Route path="Skills" element={<Skills />}> {preloadImage(tempimg)} </Route>
          <Route path="Contact" element={<Contact />}> {preloadImage(tempimg)} </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
