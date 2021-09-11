import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { ListProducts } from '../components/products/list_products';

import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        {/* <Link href="/about">
          <a>About</a>
        </Link> */}

        <ListProducts />
      </main>

      <footer className={styles.footer}>
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
