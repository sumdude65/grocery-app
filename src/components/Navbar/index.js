import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>{`< OSARETIN />`}</h1>
      </div>
      <div className="links">
        <a href="#about">About Me</a>
        <a href="#project">Projects</a>
        <div className="contact">
          <p>
            <strong>Email:</strong> Imadeosaretin@gmail.com
          </p>
          <p>
            <strong>WhatsApp:</strong> +234 811 601 9655
          </p>
        </div>
      </div>
    </nav>
  );
};
