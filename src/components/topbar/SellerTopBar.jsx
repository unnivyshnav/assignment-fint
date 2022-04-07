// import { useContext } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import "./topbar.css";

export default function SellerTopBar() {
  const { currentUser, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/seller">
              HOME
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/add">
              ADD PRODUCT
            </Link>
          </li>

          <li className="topListItem" onClick={handleLogout}>
            {currentUser && "LOGOUT"}
          </li>
        </ul>
      </div>
    </div>
  );
}
