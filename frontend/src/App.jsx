import { useState } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router";
import "./App.css";
import Body from "./components/layout/BOdy";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Landing from "./components/Landing";
import BookForm from "./components/BookForm";
import Books from "./components/Books";
import BookDetail from "./components/BookDetail";
import Requests from "./components/Requests";
import Orders from "./components/Orders";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Landing />} />
            <Route path="/sell" element={<BookForm />} />
            <Route path="/get-books" element={<Books />} />
            <Route path="/view-requests" element={<Requests />} />
            <Route path="/view-orders" element={<Orders />} />
            <Route path="/book-details" element={<BookDetail />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
