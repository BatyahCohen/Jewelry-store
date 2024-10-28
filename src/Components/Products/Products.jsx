import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { getJewelery } from "../../Services/Store";
import { getElectronics } from "../../Services/Store";

const Products = ({ type }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let getProducts = type == "Jewelery" ? getJewelery : getElectronics;

    getProducts()
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);

  return (
    <div className={styles.Products}>
      {products.map((p, index) => (
        <div key={index} className={styles.card}>
          <h2 className={styles.title}>{p.title}</h2>
          <img src={p.image} className={styles.image} />
          <div className={styles.price}>₪{p.price}</div>
          <p className={styles.description}>{p.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Products;
