

const ProductoCard = () => {
  const [cantidad, setCantidad] = useState(0);

  const aumentar = () => {
    setCantidad(cantidad + 1);
  };

  const disminuir = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="card">
      <img
        src="https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg"
        alt="Consola"
      />

      <h3>Consola de videojuegos</h3>

      <p>
        Esta es una consola de videojuegos que entretiene a los programadores en
        sus breaks.
      </p>

      <div className="contador">
        <button onClick={disminuir}>-</button>
        <span>{cantidad}</span>
        <button onClick={aumentar}>+</button>
      </div>
    </div>
  );
};


