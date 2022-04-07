import "./home.css";
import SellerProducts from "../../components/products/SellerProducts";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import SellerTopBar from "../../components/topbar/SellerTopBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function SellerHome() {
  const { currentUser } = useContext(AuthContext);
  const id = currentUser.uid;
  const dummy = {
    posts: [],
  };
  const [posts, setPosts] = useState([dummy]);
  useEffect(() => {
    const list = [];
    try {
      const fetchdata = async () => {
        const docRef = doc(db, "sellers", id);
        const docSnap = await getDoc(docRef);
        // console.log(docSnap);

        if (docSnap.exists()) {
          //   console.log(posts);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        list.push(docSnap.data());
        setPosts(list);
      };
      fetchdata();
    } catch (err) {}
  });

  return (
    <div className="home">
      <SellerTopBar />

      <div className="productsView">
        <SellerProducts posts={posts} />
      </div>
    </div>
  );
}
