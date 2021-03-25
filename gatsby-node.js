const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allContentfulArticle {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )
  .then(result => {
    if (result.errors) {
      console.log("Error with contentful data", result.errors)
    }

    const articleTemplate = path.resolve("./src/templates/article.js")

    result.data.allContentfulArticle.edges.forEach(article => {
      createPage({
        path: `/article/${article.node.id}/`,
        component: slash(articleTemplate),
        context: {
          id: article.node.id
        },
      })
    })
  })
  .catch(error => console.log("Error with contentful data", error))
}