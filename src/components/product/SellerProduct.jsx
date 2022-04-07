import "./product.css";

export default function SellerProduct({ product }) {
  console.log(product.posts);
  return (
    <>
      {product.posts.map((c, key) => (
        <div className="product">
          <div className="productInfo">
            <img
              className="productImg"
              src="https://s3.amazonaws.com/mentoring.redesign/s3fs-public/900product.jpg"
              alt=""
            />
            <span className="productTitle">{c.name}</span>
            <span className="productprice">{`Category: ${c.category}`}</span>
            <span className="productprice">{`Brand: ${c.brand}`}</span>
            <span className="productprice">{`Price: ${c.price}`}</span>
          </div>
        </div>
      ))}
    </>
  );
}
