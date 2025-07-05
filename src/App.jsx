import "./assets/style/main.module.scss";
import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/privateroute/tokenIsRequired";

import Home from "./pages/home/home";
import ErrorPage from "./pages/error/error";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/profile"
            element={
              <PrivateRoute>
                <Profile />
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