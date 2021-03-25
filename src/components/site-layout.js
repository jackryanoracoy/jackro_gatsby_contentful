import React from "react"
import PropTypes from "prop-types"

import Header from "./site-header"
import Footer from "./site-footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main className="site-main">{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout