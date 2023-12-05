import { Link } from "react-router-dom";
import "./App.css";

function ElementsArticle(props) {
  return (
    <div className="container">
      <div className="background-image"></div>
      <div className="row custom-row">
        {props.articles.map((article) => {
          return (
            <div key={article.id} className="col-sm-4">
              <div className="card custom-card">
                <img
                  src={article.imageartpetitf}
                  className="card-img-top custom-img"
                  alt={article.designation}
                />
                <div className="card-body cardb">
                  <h5 className="card-title">{article.designation}</h5>
                  <p className="card-text">{article.marque}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{article.prixVente} TND</li>
                </ul>
                <div className="card-body">
                  <Link
                    exact
                    to={`/editArticle/${article.id}`}
                    className="btn btn-primary"
                  >
                    Modifier
                  </Link>
                  <button
                    onClick={() => {
                      props.deleteProd(article.id);
                    }}
                    className="btn btn-danger"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ElementsArticle;
