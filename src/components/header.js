import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderStyles from "../components/header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return(

  <header className={HeaderStyles.header}>
    <Link className={HeaderStyles.title} to="/">
      {data.site.siteMetadata.title}
    </Link>
    <nav>
      <ul className={HeaderStyles.navList}>
        <li>
          <Link
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
            to="/about"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  )}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
  
export default Header
