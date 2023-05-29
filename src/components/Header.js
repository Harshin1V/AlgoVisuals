import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  };

  return (
    <div className="header">
      <div
        id="header__bar"
        style={{
          transform: showHeaderBar ? `translateY(120px)` : `translateY(0px)`,
        }}
      >
        <h3 className="header__bar__title">Frontend Developer</h3>
        <div className="header__bar__icons">
          {/* <a href="https://www.facebook.com/dasharath.dasharath.1694/" target='_blank'><img src="https://img.icons8.com/ios/50/000000/facebook--v1.png"/></a> */}
          <a
            href="https://www.instagram.com/harshini_vutukuri/?hl=en"
            target="_blank"
          >
            <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" />
          </a>
          <a href="https://github.com/Harshin1V" target="_blank">
            <img src="https://img.icons8.com/ios/50/000000/github--v1.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/harshini-v-a4b16321a/"
            target="_blank"
          >
            <img src="https://img.icons8.com/ios/50/000000/linkedin.png" />
          </a>
        </div>
      </div>

      <div className="header-logo">
        Algo<span>Visuals</span>
      </div>
      <div className="header__options">
        <h3 className="header__option" onClick={contactHandler}>
          <span>Contact</span>
        </h3>
      </div>
    </div>
  );
}

export default Header;
