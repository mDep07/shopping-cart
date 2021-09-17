import Head from 'next/head';
import mainStyles from '../styles/Main.module.css';

import Link from 'next/link';

import { ListProducts } from '../components/products/listProducts';
import { Navbar } from '../components/navbar';

const list_products = [
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
        <title>Products</title>
      </Head>

      <Navbar
        buttons={[{ path: '/', text: '← Back to Home' }]}
        title="Products"
      />

      {/* <Link href="/">
        <a className={mainStyles.button}>← Back to Home</a>
      </Link> */}

      <main className={mainStyles.main}>
        <ListProducts products={list_products} />
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
