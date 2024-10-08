import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";

import { fetchProducts } from "../store/productSlice";

import { STATUSES } from "../store/productSlice";

const Products = () => {
  //   const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  //we have products array inside that we have data and status

  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());

  }, [dispatch]);
  

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading ......</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong ......</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img  className="imgCard" src={product.image} alt="Images" />
          <h4>{product.title}</h4>
          <h1>{product.price}</h1>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>

      ))}
    </div>
  );
};

export default Products;
