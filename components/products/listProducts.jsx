import styles from '../../styles/Product.module.css';

import { Product } from './product';

const ListProducts = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map((p) => (
        <Product product={p} classes={styles} />
      ))}
    </div>
  );
};

export { ListProducts };
