import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import classes from "./Header.module.css";
import headerLogo from "../../../assets/logo.gif"; 

function Header() {

  const navigate = useNavigate();
  return (
    <div className={classes.box}>
      <Navbar expand="lg" className={classes.navbar}>
        <img 
        onClick={() => navigate("/")}
        src={headerLogo} alt="logo" />
        <Container>
          <Navbar.Toggle
            className={classes.toggle}
            aria-controls="basi-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink to="/players">Players</NavLink>             

              <NavLink to="/puneri-world">Paltan World</NavLink>

              <NavLink target="blank" to="https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457">Tickets</NavLink>

              <NavLink to="/yuva-paltan">Yuva Paltan</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
