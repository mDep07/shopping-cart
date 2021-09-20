import styles from '../../styles/Category.module.css';

import { Category } from './category';

const ListCategory = ({ categories }) => {
  return (
    <div className={styles.container}>
      {categories.map((c, i) => (
        <Category category={c} key={i} />
      ))}
    </div>
  );
};

export { ListCategory };
