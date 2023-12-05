import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Plus from "@mui/icons-material/AddAlarm";
import Minus from "@mui/icons-material/RemoveCircle";
import Delete from "@mui/icons-material/Delete";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const {
    cartDetails,
    removeItem,
    clearCart,
    totalPrice,
    cartCount,
    incrementItem,
    decrementItem,
  } = useShoppingCart();
  const navigate = useNavigate();

  const [payment, setPayment] = React.useState(false);

  const onToken = (token) => {
    console.log(token);
    clearCart();
    navigate("/");
  };

  const commander = async () => {
    setPayment(true);
  };

  const more = () => {
    navigate("/");
  };

  const clear = () => {
    clearCart();
  };

  const imprimer = () => {
    navigate("/pdfCart");
  };

  if (cartCount === 0) return <h1>Cart Empty</h1>;

  return (
    <div>
      <Grid container spacing={2} columns={15} marginTop={20} marginLeft={10}>
        <Grid item xs={8}>
          {cartDetails &&
            Object.values(cartDetails).map((item) => {
              return (
                <Grid item xs={8} key={item.id}>
                  <img
                    alt={item.title}
                    style={{ margin: "0 auto", maxHeight: "100px" }}
                    src={item.image}
                    className="img-fluid d-block"
                  />
                  <h5>{item.title}</h5>
                  <p>
                    Prix: Price:{" "}
                    {isNaN(parseFloat(item.price))
                      ? "Invalid price"
                      : parseFloat(item.price).toFixed(2)}{" "}
                    TND
                  </p>
                  <p>Qté: {item.quantity}</p>
                  <button
                    onClick={() => {
                      if (item.quantity < item.qtestock) {
                        incrementItem(item.id);
                      } else {
                        alert("Quantité stock indisponible");
                      }
                    }}
                  >
                    <Plus color="success" />
                  </button>
                  {item.quantity > 1 && (
                    <button onClick={() => decrementItem(item.id)}>
                      <Minus color="warning" />
                    </button>
                  )}
                  {item.quantity === 1 && (
                    <button onClick={() => removeItem(item.id)}>
                      <Delete color="error" />
                    </button>
                  )}
                  <hr />
                </Grid>
              );
            })}
        </Grid>
        <Grid item xs={4} justifyContent="flex-end">
          <Button color="error" variant="outlined" onClick={more}>
            Ajouter des articles
          </Button>
          <p>Total Articles</p>
          <h4>{cartCount}</h4>
          <p>Total Payement</p>
          <h3>{totalPrice} TND</h3>
          <hr />
          <div>
            <Button color="info" variant="outlined" onClick={clear}>
              Annuler
            </Button>
            <Button color="secondary" variant="outlined" onClick={imprimer}>
              Imprimer PDF
            </Button>
          </div>
          {payment && (
            <StripeCheckout
              token={onToken}
              stripeKey="pk_test_51OCI9xGGzwNTy6j3ImAFyy5wm8vo5dCMKloF5Gj1J6DEYW6raIDb0mPgdhkioLDDNuFhGxg2rQ1SQ2wNXsEDPQIb00wfFhJ4fe"
              amount={totalPrice * 100} 
              currency="USD" 
            />
          )}
          {!payment && (
            <Button color="warning" variant="outlined" onClick={commander}>
              Commander
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
