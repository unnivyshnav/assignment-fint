import "./products.css";
import SellerProduct from "../product/SellerProduct";

export default function Products({ posts }) {
  //   const post = posts.posts;
  //   console.log(posts);

  return (
    <div className="products">
      {posts.map((c, key) => (
        <SellerProduct product={c} />
      ))}
    </div>
  );
}
