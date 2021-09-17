import styles from '../styles/Navbar.module.css';
import mainStyles from '../styles/Main.module.css';

import Link from 'next/link';

const Navbar = ({ buttons, title }) => {
  return (
    <nav className={styles.container}>
      {title && <h1>{title}</h1>}
      <div className={styles.buttons}>
        {buttons.map((btn) => {
          <Link href={btn.path}>
            <a className={mainStyles.button}>{btn.text}</a>
          </Link>;
        })}
      </div>
    </nav>
  );
};

export { Navbar };
