import { useEffect, useState } from "react";
import styles from "./Electronic.module.css";
import { getElectronics } from "../../Services/store";

const Electronic = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getElectronics().then((data) => {setProducts(data);});
  }, []);

  return (
    <div className={styles.electronic}>
      <div>
        {products.map((p, index) => (
          <div key={index}>{p.title}</div>
        ))}
      </div>
    </div>
  );
};
export default Electronic;
