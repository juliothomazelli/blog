import * as React from "react";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Career from "./pages/Career";
import About from "./pages/About";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Certification from "./pages/Certification";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="photo" element={<Photo />} />
            <Route path="career" element={<Career />} />
            <Route path="certification" element={<Certification />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet />

      <Footer />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}