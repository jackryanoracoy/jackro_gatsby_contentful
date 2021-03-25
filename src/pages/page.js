import { Link } from "gatsby"
import React from "react"

import Layout from "../components/site-layout"
import AboveTheFold from "../components/site-above-the-fold"

const Page1 = () => (
  <Layout className="site-main">
    <AboveTheFold/>
    <div className="container">
      <section className="section">
        <h1>Page 1</h1>
        <p>Welcome to the site.</p>
        <Link to="/">Go to front page</Link>
      </section>
    </div>
  </Layout>
)

export default Page1
