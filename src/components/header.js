import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar,Nav} from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
    <Navbar expand="lg">
      <Navbar.Brand>{ siteTitle }</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"  />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav as="ul" className="navbar-nav ml-auto">
        <Nav.Item as="li" className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link className="nav-link" to="/portfolio">Portfolio</Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link className="nav-link" to="/blog">Blog</Link>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
