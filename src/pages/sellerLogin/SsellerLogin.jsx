import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      // Signed in
      const user = res.user;
      const docRef = doc(db, "sellers", res.user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        console.log(user);
        dispatch({ type: "LOGIN", payload: user });
        navitage("/seller");
      } else {
        // return error;
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div className="login" data-aos="flip-right">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Seller Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;
