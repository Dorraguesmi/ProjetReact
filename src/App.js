import ListArticles from "./ListArticles";
import AjoutArticle from "./AjoutArticle";
import EditArticle from "./EditArticle";
import ListCards from "./ClientSide/ListCards";
import { CartProvider } from "use-shopping-cart";
import Cart from "./ClientSide/Cart";
import Menu from "./Menu";
import PdfCart from "./ClientSide/PdfCart";
import LoginClient from "./AuthentificationClient/LoginClient";
import SignUp from "./AuthentificationClient/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Menu />
          <Routes>
            <Route path="/articles" element={<ListCards />} />
            <Route path="/addArticle" element={<AjoutArticle />} />
            <Route path="/editArticle/:id" element={<EditArticle />} />
            <Route path="/" element={<ListArticles />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pdfCart" element={<PdfCart />} />
            <Route path="/loginclient" exact element={<LoginClient />} />
            <Route path="/signup" exact element={<SignUp />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
// les methodes de la bibliotheque use-shopping-cart
// npm i use-shopping-cart
