import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Payment } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
