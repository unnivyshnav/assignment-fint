import "./addProducts.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";

import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import SellerTopBar from "../../components/topbar/SellerTopBar";

const Login = () => {
  const { currentUser } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    category: "",
    price: "",
    brand: "",
  });

  const navitage = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues.email);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const id = currentUser.uid;
      const washingtonRef = doc(db, "sellers", id);
      await updateDoc(washingtonRef, {
        posts: arrayUnion(formValues),
      });

      navitage("/seller");
    } catch {
      setError(true);
    }
  };

  return (
    <>
      {" "}
      <SellerTopBar />
      <div className="login addProduct">
        <form onSubmit={handleAdd}>
          <input
            name="name"
            type="text"
            placeholder="Product Name"
            onChange={handleInput}
          />
          <input
            name="brand"
            type="text"
            placeholder="Brand"
            onChange={handleInput}
          />
          <select
            type="text"
            name="category"
            placeholder="select"
            onChange={handleInput}
          >
            <option value="">select</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
          </select>
          <input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleInput}
          />

          <button type="submit">Add</button>
          {error && <span>Something Went Wrong</span>}
        </form>
      </div>
    </>
  );
};

export default Login;
