import Head from 'next/head';
import mainStyles from '../styles/Main.module.css';

import { Navbar } from '../components/navbar';
import { ListCategory } from '../components/categories/listCategories';

function Categories() {
  return (
    <div className={mainStyles.container}>
      <Head>
        <title>Categories</title>
      </Head>

      <Navbar
        buttons={[{ path: '/', text: '← Back to Home' }]}
        title="Categories"
      />

      <main className={mainStyles.main}>
        <h1>Categories List</h1>
        {/* <ListCategory categories={list_categories} /> */}
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

export default Categories;
