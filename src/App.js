import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
