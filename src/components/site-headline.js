import React from "react"

import Layout from "../templates/article"

const Headline = () => {
  return (
  <div className="bg-grey-200">

    <div className="container">
      <section className="section">

        <h1 className="heading-above-the-fold">{title}</h1>

      </section>
    </div>

  </div>
  )
}

export default Headline