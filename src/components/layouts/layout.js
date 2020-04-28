import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Footer from "../common/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
