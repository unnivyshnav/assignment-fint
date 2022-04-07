import "./App.css";

import AddProducts from "./pages/addproducts/AddProducts";
import Home from "./pages/home/Home";
import SellerHome from "./pages/home/SellerHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import LoginSelect from "./pages/loginSelect/LoginSelect";
import SignupSelect from "./pages/signupSelect/SignupSelect";
function App() {
  const { currentUser } = useContext(AuthContext);
  // const currentUser = false;
  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />;
  // };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={currentUser ? <Home /> : <LoginSelect />} />
          <Route
            path="/seller"
            element={currentUser ? <SellerHome /> : <LoginSelect />}
          />

          <Route path="/signup" element={<SignupSelect />} />
          <Route
            path="/login"
            element={currentUser ? <Home /> : <LoginSelect />}
          />
          <Route
            path="/add"
            element={currentUser ? <AddProducts /> : <LoginSelect />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
