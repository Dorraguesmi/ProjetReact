import { useState } from "react";
function ElementsPanier(props) {
  const [quantity, setQuantity] = useState(1);
  const decraseQuantuty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div key={props.product.id} className="col-sm-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.product.imageartpetitf}
          className="card-img-top"
          alt={props.product.designation}
        />
        <div className="card-body">
          <h5 className="card-title">{props.product.designation}</h5>
          <p className="card-text">{props.product.marque}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.product.prixVente} TND</li>
        </ul>
        <div>
          <button
            className="btn "
            style={{ backgroundColor: "lightblue" }}
            onClick={decraseQuantuty}
          >
            -
          </button>
          {quantity}
          <button
            className="btn"
            style={{ backgroundColor: "lightblue" }}
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
        <div className="card-body">
          <button className="btn btn" style={{ backgroundColor: "lightgray" }}>
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
}
export default ElementsPanier;
