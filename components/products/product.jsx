const Product = ({ product, classes }) => {
  return (
    <div className={classes.card}>
      {product.name} - <strong>${product.price.toFixed(2)}</strong>
    </div>
  );
};

export { Product };
