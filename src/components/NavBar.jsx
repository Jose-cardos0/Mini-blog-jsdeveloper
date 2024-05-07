import styles from "./NavBar.module.css";

import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";

import { useState } from "react";

const NavBar = () => {
  const { user } = useAuthValue();

  const { logout } = useAuthentication();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>BLOG</span>
      </NavLink>

      <ul
        className={styles.links_list}
        style={{ display: isNavOpen ? "flex" : "none" }}
      >
        <li onClick={handleLinkClick}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>

        {!user && (
          <>
            <li onClick={handleLinkClick}>
              <NavLink
                to="/Login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Login
              </NavLink>
            </li>
            <li onClick={handleLinkClick}>
              <NavLink
                to="/Registro"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Registro
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li onClick={handleLinkClick}>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                NewPost
              </NavLink>
            </li>
            <li onClick={handleLinkClick}>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                DashBoard
              </NavLink>
            </li>
          </>
        )}

        <li onClick={handleLinkClick}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About
          </NavLink>
        </li>
        {user && (
          <li onClick={handleLinkClick}>
            <button onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
      <button className={styles.toggleButton} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </nav>
  );
};

export default NavBar;
