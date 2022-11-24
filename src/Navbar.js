import React, { useEffect } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";

export const Navbar = () => {
  const screenExpanding = (e) => {
    e.preventDefault();
    console.log("dejan");
  };

  useEffect((e) => {
    e.preventDefault();
    window.addEventListener("resize", screenExpanding);
  });
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" className="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container">
          <ul class="links">
            {links.map((link) => {
              const { url, text } = link;
              return (
                <li>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((item) => {
            const { url, icon } = item;
            return (
              <li>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
