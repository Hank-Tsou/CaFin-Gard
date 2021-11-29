import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="register" className="set id just for remove warning error">
    <div className= "icon-container">

    <li className="icon-item">
      <a href="https://www.instagram.com" className="icon-link">
        <i className="social-icon fab fa-instagram 8x"></i>
      </a>
    </li>

    <li className="icon-item">
      <a href="https://www.facebook.com" className="icon-link">
        <i className="social-icon fab fa-facebook-square 8x"></i>
      </a>
    </li>

    <li className="icon-item">
      <a href="https://www.youtube.com" className="icon-link">
        <i className="fab fa-youtube 8x"></i>
      </a>
    </li>

    <li className="icon-item">
      <a href="https://www.twitter.com" className="icon-link">
        <i className="social-icon fab fa-twitter-square 8x"></i>
      </a>
    </li>
    </div>

    <p>Copyright ⓒ {year} Hank Tsou</p>
    </footer>
  );
}

export default Footer;
