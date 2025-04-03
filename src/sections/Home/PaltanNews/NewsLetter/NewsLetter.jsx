import React from "react";
import classes from "./NewsLetter.module.css";
import { Container } from "react-bootstrap";

function NewsLetter() {
  return (
    <Container fluid className={classes.newsLetter}>
      <div>
        <h1 data-aos="bouncing-zoom-in" data-aos-duration="1000">
          Subscribe to our newsletter
        </h1>
        <div className={classes.newsLetterInput}>
          <div>
            <input type="email" placeholder="Enter your email-id" />
          </div>
          <button>go</button>
        </div>
      </div>
    </Container>
  );
}

export default NewsLetter;
