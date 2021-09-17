import styles from '../../styles/Product.module.css';

import { Product } from './product';

const ListProducts = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map((p, i) => (
        <Product product={p} classes={styles} key={i} />
      ))}
    </div>
  );
};

export { ListProducts };
