const Product = ({ product }) => {
  return (
    <div>
      <div>
        {product.name} - <strong>${product.price.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export { Product };
