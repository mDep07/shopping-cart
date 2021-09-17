import Head from 'next/head';
import mainStyles from '../styles/Main.module.css';

import Link from 'next/link';

import { ListProducts } from '../components/products/listProducts';
import { Navbar } from '../components/navbar';

const list_products = [
  { _id: 1, name: 'Coca Cola 1LT', price: 145.7, categories: ['Driks'], img_url: 'https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
  { _id: 2, name: 'Fernet 750', price: 540.55, categories: ['Driks'] },
  { _id: 3, name: 'Vino Toro 1LT', price: 120, categories: ['Driks'] },
  { _id: 4, name: 'Pritty 3LT', price: 140, categories: ['Driks'] },
  { _id: 5, name: 'Milanesas 1KG', price: 477.5, categories: ['Food']},
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
