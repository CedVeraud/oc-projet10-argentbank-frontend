import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/guards/PrivateRoute";

import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Home from "./pages/home/Home";
import Error404 from "./pages/error/Error404";
import Login from "./pages/login/Login";
import UserProfile from "./pages/user/UserProfile";

import "./assets/style/main.module.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Error404 />} />
          <Route path="/profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App