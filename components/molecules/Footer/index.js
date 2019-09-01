import React from "react";
import "./index.scss";
import Typography from "components/atoms/Typography";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="d-flex justify-content-between container">
        <div>
          <img className='footer__logo' src="../../../static/images/logo.png" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Footer;
