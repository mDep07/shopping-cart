import styles from '../styles/Navbar.module.css';
import mainStyles from '../styles/Main.module.css';

import Link from 'next/link';

const Navbar = ({ buttons, title }) => {
  return (
    <nav className={styles.container}>
      {title && <p className={styles.title}>{title}</p>}

      <div className={styles.buttons}>
        {buttons.map((btn, i) => (
          <Link href={btn.path} key={i}>
            <button className={mainStyles.button}>{btn.text}</button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export { Navbar };
