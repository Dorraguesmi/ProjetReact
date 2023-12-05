import axios from "axios";
import { useEffect, useState } from "react";
import ElementsArticle from "./ElementsArticle";
import "./App.css";

function ListArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3003/produits")
      .then((response) => setArticles(response.data));
  }, []);
  const deleteProd = async (id) => {
    if (!window.confirm("Are you sure you want to delete")) {
      return;
    }
    axios
      .delete("http://localhost:3003/produits/" + id)
      .then(() => {
        console.log("successfully deleted!");
        setArticles((prevArticles) =>
          prevArticles.filter((article) => article.id !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="color">
      {/* <h2>Liste des articles </h2> */}
      <ElementsArticle articles={articles} deleteProd={deleteProd} />
    </div>
  );
}
export default ListArticles;
