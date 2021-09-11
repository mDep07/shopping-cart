import styles from '../../styles/Product.module.css';

import { Product } from './product';

const products = [
  { name: 'Coca Cola 1LT', price: 145.7, category: 'Driks' },
  { name: 'Fernet 750', price: 540.55, category: 'Driks' },
  { name: 'Vino Toro 1LT', price: 120, category: 'Driks' },
  { name: 'Pritty 3LT', price: 140, category: 'Driks' },
  { name: 'Milanesas 1KG', price: 477.5, category: 'Food' }
];

const productsByCategory = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [product];
    return acc;
  }

  acc[product.category].push(product);
  return acc;
}, {});

console.log({ productsByCategory });

const ListProducts = () => {
  return (
    <div className={styles.container}>
      {Object.keys(productsByCategory).map(category => {
        console.log('asdsa', productsByCategory[category]);
        return (
          <div className={styles.category}>
            <p className={styles.category_title}>{category}</p>
            {productsByCategory[category].map(p => (
              <Product product={p} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export { ListProducts };
