const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  console.log("Generating Product pages")
  const { createPage } = actions

  //Generate Campaign pages
  const productTemplate = path.resolve(`src/templates/ProductTemplate.js`)
  const result = await graphql(`
    query AllProducts {
      allSanityProduct {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allSanityProduct.edges.forEach(({ node }) => {
    console.info(`Generating product — ${node.slug.current}`)
    createPage({
      path: `/products/${node.slug.current}`,
      component: productTemplate,
      context: {
        slug: node.slug.current,
      },
    })
  })
}
