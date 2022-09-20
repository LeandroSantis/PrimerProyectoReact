import { Link } from "react-router-dom";

const InforBarComponent = ({ carrito, children, handleKeyUp }) => {
  return (
    <div className="bg-white py-4">
      <div>
        <input
          type="text"
          onInput={handleKeyUp}
          placeholder="buscar por nombre"
        />
      </div>
      <Link to={"/"}> ir a la home</Link>
      <br />
      Elementos del carrito: {carrito.length}
      {children}
    </div>
  );
};

export default InforBarComponent;
