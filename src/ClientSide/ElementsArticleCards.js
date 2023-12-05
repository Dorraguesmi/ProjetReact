import { useShoppingCart } from "use-shopping-cart";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ElementsArticleCards(props) {
  const { cartCount, addItem } = useShoppingCart();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addToCart = (product) => {
    const target = {
      id: product.id,
      title: product.designation,
      image: product.imageartpetitf,
      price: product.prixVente,
      qtestock: product.qtestock,
      quantity: 1,
    };
    addItem(target);
    console.log("Item added to cart:", target);
  };

  return (
    <>
      <div
        className={`fixed-bottom ${isScrolled ? "bg-light" : ""} ${
          isScrolled ? "mb-3" : ""
        } ${isScrolled ? "ml-3" : ""}`}
      >
        <Button color="inherit">
          <Link
            to="/cart"
            className="d-flex align-items-center text-decoration-none"
          >
            <ShoppingCartIcon fontSize="large" />
            <span className="ms-2">{cartCount}</span>
          </Link>
        </Button>
      </div>
      <div className={`container ${isScrolled ? "mt-5" : "mt-3"}`}>
        <div className="row">
          {props.articles &&
            props.articles.map((product) => (
              <article className="col-sm-4 mb-4" key={product.id}>
                <div className="card h-100">
                  <img
                    src={product.imageartpetitf}
                    className="card-img-top p-5 img-fluid"
                    alt={product.designation}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.designation}</h5>
                    <p className="card-text">Prix : {product.prixVente} TND</p>
                    <button
                      disabled={product.qtestock <= 1}
                      className="btn btn-warning"
                      onClick={() => addToCart(product)}
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </>
  );
}

export default ElementsArticleCards;
