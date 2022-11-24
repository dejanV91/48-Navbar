import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const refContainer = useRef(null);
  const refLinks = useRef(null);

  useEffect(() => {
    const dimension = refLinks.current.getBoundingClientRect().height;
    if (show) {
      refContainer.current.style.height = `${dimension}px`;
    } else {
      refContainer.current.style.height = "0px";
    }
  }, [show]);

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" className="logo" />
            <button className="nav-toggle" onClick={() => setShow(!show)}>
              <FaBars />
            </button>
          </div>
          <div className={"links-container"} ref={refContainer}>
            <ul className="links" ref={refLinks}>
              {links.map((link, index) => {
                const { url, text } = link;
                return (
                  <li key={index}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((item, index) => {
              const { url, icon } = item;
              return (
                <li key={index}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};
