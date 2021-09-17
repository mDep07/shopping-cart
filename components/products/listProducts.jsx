import styles from '../../styles/Product.module.css';

import { Product } from './product';

const ListProducts = ({ products }) => {
  return products.map((p) => <Product product={p} classes={styles} />);
};

export { ListProducts };
