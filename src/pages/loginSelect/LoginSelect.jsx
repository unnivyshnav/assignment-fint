import "./loginselect.css";
import UserLogin from "../userLogin/UserLogin";
import SellerLogin from "../sellerLogin/SsellerLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginSelect() {
  const [userlogin, setUserLogin] = useState(true);
  const [sellerlogin, setSellerLogin] = useState(false);
  const [head, setHead] = useState("USER");
  const navitage = useNavigate();
  const navigate = (e) => {
    navitage("/signup");
  };
  const setUser = (e) => {
    setUserLogin(true);
    setSellerLogin(false);
    setHead("USER");
  };
  const setSeller = (e) => {
    setUserLogin(false);
    setSellerLogin(true);
    setHead("SELLER");
  };
  return (
    <div className="loginSelect">
      <div className="heading">
        <h3>LOGIN</h3>
      </div>

      <div className="box">
        <div className="buttons">
          <button
            className={userlogin ? "select userSelect" : "select"}
            onClick={setUser}
          >
            USER
          </button>
          <button
            className={sellerlogin ? "select userSelect" : "select"}
            onClick={setSeller}
          >
            SELLER
          </button>
        </div>
        <h3 className="head">{head}</h3>
        <div className="loginpages">
          {userlogin && (
            <div className="userLogin">
              <UserLogin />
            </div>
          )}
          {sellerlogin && (
            <div className="sellerLogin">
              <SellerLogin />
            </div>
          )}
        </div>

        <div className=" signupbtn">
          <p>No account?</p>
          <button className="change" onClick={navigate}>
            SIGNUP
          </button>
        </div>
      </div>
    </div>
  );
}
