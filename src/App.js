import React, { useState, useEffect, useRef } from "react";
import logo from "./components/logo.svg";
import { links, socials } from "./components/data";
import { FaBars } from "react-icons/fa";
import "./style.scss";

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const linksContainer = useRef(null);
  const linksRef = useRef(null);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    if (openNav) {
      const containerHeight = linksRef.current.getBoundingClientRect().height;
      linksContainer.current.style.height = containerHeight + "px";
    } else {
      linksContainer.current.style.height = "0px";
    }
  });
  useEffect(() => {
    if (window.innerWidth > 850) {
      console.log("setted");
      setOpenNav(true);
    }
  }, []);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <button id="navbar-toggle" onClick={() => toggleNav()}>
          <FaBars />
        </button>
      </div>
      <div className="linksContainer" ref={linksContainer}>
        <ul className="list" ref={linksRef}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="socials">
        {socials.map((social, idx) => {
          return (
            <a key={idx} href={social.url}>
              {social.icon}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
