import React from "react";
import classes from "./Footer.module.css";

// social icons
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <div className={classes.copyright}>
          <h3>Copyright © 2025 Puneri Paltan</h3>
        </div>
        <div className={classes.social}>
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaYoutube />
          </div>
        </div>
        <div className={classes.footerLast}>
            <div className={classes.manageBy}>
                <p>Managed</p>
                <p>By</p>
            </div>
            <img src="./dl_logo.png" alt="manage by" />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
