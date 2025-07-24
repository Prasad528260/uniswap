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
import OrderPage from "./components/OrderCard/OrderPage";
import OrderDetails from "./components/OrderCard/OrderDetails";
import Qr from "./components/OrderCard/Qr";
import ProtectedRoutes from "./components/ProtectedRoutes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <ProtectedRoutes>
                  <Home />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoutes>
                  <Profile />
                </ProtectedRoutes>
              }
            />
            <Route path="/" element={<Landing />} />
            <Route
              path="/sell"
              element={
                <ProtectedRoutes>
                  <BookForm />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/get-books"
              element={
                <ProtectedRoutes>
                  <Books />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/view-requests"
              element={
                <ProtectedRoutes>
                  <Requests />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/view-orders"
              element={
                <ProtectedRoutes>
                  <Orders />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/book-details"
              element={
                <ProtectedRoutes>
                  <BookDetail />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/get-orders/:type"
              element={
                <ProtectedRoutes>
                  <OrderPage />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/order-details"
              element={
                <ProtectedRoutes>
                  <OrderDetails />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/qr"
              element={
                <ProtectedRoutes>
                  <Qr />
                </ProtectedRoutes>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
