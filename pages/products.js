import Head from 'next/head';
import mainStyles from '../styles/Main.module.css';

import { useRouter } from 'next/router'
import Link from 'next/link';

import { ListProducts } from '../components/products/listProducts';
import { Navbar } from '../components/navbar';

const list_products = [
  { _id: 1, name: 'Coca Cola 1LT', price: 145.7, categories: ['Driks'], img_url: 'https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
  { _id: 2, name: 'Fernet 750', price: 540.55, categories: ['Driks'] },
  { _id: 3, name: 'Vino Toro 1LT', price: 120, categories: ['Driks'], img_url: 'https://www.cordiez.com.ar/arquivos/ids/163326-500-400/Vino-Tinto-Tetra-Brik-con-Tapa-Toro-1-Lt-1-6424.jpg?v=637541081682630000' },
  { _id: 4, name: 'Pritty 3LT', price: 140, categories: ['Driks'], img_url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/839/products/005-004-021_gaseosa-pritty-limon-3-litros1-bf609ad69b255b735015884686086936-1024-1024.jpg' },
  { _id: 5, name: 'Milanesas 1KG', price: 477.5, categories: ['Food'], img_url: 'https://www.filo.news/__export/1588698815967/sites/claro/img/2020/05/05/milanesa.jpg_554688468.jpg'},
  { _id: 6, name: 'Medallones de Carne 1KG', price: 125, categories: ['Food']},
  { _id: 7, name: 'Medallones de Pollo 1KG', price: 135.85, categories: ['Food']},
];

function Products() {
  const router = useRouter();
  const { category } = router.query;

  console.log({category})

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
