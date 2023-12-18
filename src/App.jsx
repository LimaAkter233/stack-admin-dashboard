/* eslint-disable react/jsx-no-undef */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Users from "./pages/Users";
// import PublicRoute from "./pages/routes/PublicRoutes";
// import PrivateRoute from "./pages/routes/PublicRoutes";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />

        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
