import { useEffect, useState } from "react";
import styles from "./Jewelry.module.css";
import { getJewelery } from "../../Services/Store";

const Jewelry = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getJewelery()
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className={styles.jewelry}>
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
export default Jewelry;
