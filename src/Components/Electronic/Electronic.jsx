import { useEffect, useState } from "react";
import styles from "./Electronic.module.css";
import { getElectronics } from "../../Services/Store";

const Electronic = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getElectronics()
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className={styles.electronic}>
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
export default Electronic;

