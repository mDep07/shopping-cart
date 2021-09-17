import Head from 'next/head';
import mainStyles from '../styles/Main.module.css';
import styles from '../styles/Home.module.css';

import Link from 'next/link';
import { Navbar } from '../components/navbar';

export default function Home() {
  return (
    <div className={mainStyles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar
        buttons={[
          { path: '/products', text: 'Products' },
          { path: '/categories', text: 'Categories' },
        ]}
        title="Home"
      />

      <Link href="/products">
        <a className={mainStyles.button}>Products</a>
      </Link>

      <main className={mainStyles.main}>
        <p>Home</p>
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
