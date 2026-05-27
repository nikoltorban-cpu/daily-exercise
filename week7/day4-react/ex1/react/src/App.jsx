import React from "react";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import ErrorBoundary from "./ErrorBoundary";

function HomeScreen() {
  return <h1>Home</h1>;
}

function ProfileScreen() {
  return <h1>Profile</h1>;
}

function ShopScreen() {
  throw new Error("Shop crashed");
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark p-3">
        <NavLink to="/" className="text-white me-3">
          Home
        </NavLink>

        <NavLink to="/profile" className="text-white me-3">
          Profile
        </NavLink>

        <NavLink to="/shop" className="text-white">
          Shop
        </NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />

        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />

        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
