import Link from 'next/link';

const Category = ({ category, classes }) => {
  return (
    <li>
      <Link href={`/products?category=${category._id}`}>
        <a>
          {category.name}
        </a>
      </Link>
    </li>
  );
};

export { Category };
