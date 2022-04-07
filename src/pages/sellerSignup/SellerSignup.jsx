import { useState } from "react";
import "./login.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const navitage = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues.email);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );
      console.log(res.user.uid);

      await setDoc(doc(db, "sellers", res.user.uid), {
        email: formValues.email,
        password: formValues.password,
        accountType: "seller",
        posts: [],
      });
      navitage("/login");
    } catch (err) {
      setError(true);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div className="login" data-aos="flip-right">
      <form onSubmit={handleSignup}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleInput}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInput}
        />
        <button type="submit">SignUp</button>
        {error && <span>Enter valid data!</span>}
      </form>
    </div>
  );
};

export default Login;
