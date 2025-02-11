import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import BlogDetails from "./pages/BlogDetails";
import Update from "./pages/Update";
import Delete from "./pages/Delete";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/create" element={<Create></Create>} />
        <Route path="/blogs/:id" element={<BlogDetails></BlogDetails>} />
        <Route path="/blogs/update/:id" element={<Update></Update>} />
        <Route path="/blogs/delete/:id" element={<Delete></Delete>} />
      </Routes>
    </Router>
  );
}

export default App;
