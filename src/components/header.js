import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand is-size-3">
          <Link
            to="/"
            style={{
              textDecoration: `none`,
              fontStyle: 'italic',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            {siteTitle}
          </Link>
        </div>
        <ul className="navbar-menu">
          <li>
            <a className="navbar-item" href="#projects">Portfolio</a>
          </li>
          <li>
            <a className="navbar-item" href="#about">About</a>
          </li>
          <li>
            <a className="navbar-item" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
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
