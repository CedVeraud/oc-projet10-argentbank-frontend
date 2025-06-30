import "./assets/style/main.module.scss";
import Footer from "./layout/footer/footer";
import Header from "./layout/header/header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import ErrorPage from "./pages/error/error.jsx";
import Login from "./pages/login/login.jsx";
import Profile from "./pages/profile/profile.jsx";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App