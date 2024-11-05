import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from "./Containers/Auth";
import Dashboard from "./Containers/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Auth} />
        <Route path="/dashboard" Component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
