import "./products.css";
import Product from "../product/Product";

export default function Products({ posts }) {
  return (
    <div className="products">
      {posts.map((c, key) => (
        <Product product={c} key={key} />
      ))}
    </div>
  );
}
