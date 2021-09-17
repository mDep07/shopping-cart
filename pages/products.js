import Head from 'next/head';
import mainStyles from '../styles/Main.module.css';

import Link from 'next/link';

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
    <div className={mainStyles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={mainStyles.main}>
        <Link href="/products">
          <a>Products</a>
        </Link>
        {products.map((p) => (
          <Product product={p} />
        ))}
      </main>

      <footer className={mainStyles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </div>
  );
}

export default Products;
