import { Link } from "gatsby"
import React from "react"

const Header = () => {

  return (
  <header className="site-header">

  <div className="site-header-content bg-primary flex is-jus-spbetween is-alt-center">

    <div className="site-header-branding">
      <h1 className="site-branding"><Link className="site-branding-title" to="/">SITE TITLE</Link></h1>
    </div>

    <div className="site-header-menu hidden-lg-min">
      <button className="site-menu">
        <span className="site-menu-box">
          <span className="site-menu-inner"></span>
        </span>
      </button>
    </div>

  </div>

  <div className="site-header-content bg-secondary">

    <nav className="site-header-navigation">
      <ul className="site-nav">
        <li className="site-nav-item"><Link to="/">Home</Link></li>
        <li className="site-nav-item"><Link to="/about/">About</Link></li>
        <li className="site-nav-item"><Link to="/page/">Page</Link></li>
      </ul>
    </nav>

  </div>

  </header>
  )
}

export default Header