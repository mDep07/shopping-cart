const Categories = ({ name, class_style }) => (
  <small className={class_style}>{name}</small>
)

const Product = ({ product, classes }) => {
  return (
    <div className={classes.card}>
      <div className={classes.img}>
        <img src={product.img_url || 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'} />
      </div>
      <div className={classes.content}>
        <h3>{product.name}</h3>
        {
          product.categories.map((c, i) => {
            return <Categories name={c} class_style={classes.category} key={i} />
          })
        }        
        <span className={classes.price}>${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export { Product };
