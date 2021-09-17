import { Product } from '../components/products/product';

const products = [
  { name: 'Coca Cola 1LT', price: 145.7, category: 'Driks' },
  { name: 'Fernet 750', price: 540.55, category: 'Driks' },
  { name: 'Vino Toro 1LT', price: 120, category: 'Driks' },
  { name: 'Pritty 3LT', price: 140, category: 'Driks' },
  { name: 'Milanesas 1KG', price: 477.5, category: 'Food' },
];

function Products() {
  return (
    <div>
      {products.map((p) => (
        <Product product={p} />
      ))}
    </div>
  );
}

export default Products;
