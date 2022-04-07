import "./home.css";
import Products from "../../components/products/Products";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import TopBar from "../../components/topbar/TopBar";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const list = [];
    const fetchdata = async () => {
      const querySnapshot = await getDocs(collection(db, "sellers"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push({ id: doc.id, ...doc.data() });
      });
      setPosts(list);
    };

    fetchdata();
  });

  return (
    <div className="home">
      <TopBar />

      <div className="productsView">
        <Products posts={posts} />
      </div>
    </div>
  );
}
