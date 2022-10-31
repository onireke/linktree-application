import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <main className="footer-main">
      <div className="footer">
        <img
          src="/images/zuri-internship.png"
          alt="zuri-intership"
          className="zuri-intership"
        />
        <p className="hng-internship">HNG Internship 9 Frontend Task</p>
        <img
          src="/images/hng-internship.png"
          alt="ingressive"
          className="ingressive"
        />
      </div>
    </main>
  );
}

export default Footer;
