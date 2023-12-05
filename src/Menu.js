// Menu.jsx

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./fireConfig";
import "./App.css"; 

function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });

    return () => unsubscribe();
  }, []);

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("signOut");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-transparent");
      if (navbar) {
        const scrollY = window.scrollY;
        const navbarHeight = navbar.offsetHeight;


        const transparency = Math.min(1, scrollY / navbarHeight);
        navbar.style.backgroundColor = `rgba(255, 255, 255, ${transparency})`;
      }
    };

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="menu-container">
      <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
        <div className="container-fluid">
          <a className="navbar-brand">Site</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles">
                  Liste des articles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addArticle">
                  Ajout articles
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {!isLoggedIn ? (
              <Link className="btn btn-outline-primary" to="/loginclient">
                Log In
              </Link>
            ) : (
              <button
                className="btn btn-outline-primary"
                onClick={() => logOut()}
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
