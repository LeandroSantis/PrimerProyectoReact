const CardComponent = ({ product, AgregarAlCarrito }) => {
  return (
    <div>
      <div className="card col-4">
        <img src={product.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {product.title} - <b>$ {product.price}</b>
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            className="btn btn-primary"
            onClick={(event) => {
              AgregarAlCarrito(event, product);
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
