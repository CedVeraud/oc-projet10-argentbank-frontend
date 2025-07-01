import "./assets/style/main.module.scss";
import Footer from "./layout/footer/footer";
import Header from "./layout/header/header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import ErrorPage from "./pages/error/error";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Counter from "./redux/tutorial/counter/counter"

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
          <Route path="/counter" element={<Counter />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App