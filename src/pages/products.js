import React from "react"
import SEO from "../components/common/seo"
import SimpleHeaderLayout from "../components/layouts/SimpleHeaderLayout"
import { useStaticQuery, graphql } from "gatsby"
import ProductCard from "../components/products/ProductCard"

const Products = () => {
  const data = useStaticQuery(graphql`
    query AllProducts {
      allSanityProduct {
        edges {
          node {
            image {
              asset {
                fluid(maxWidth: 350) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            price
            sku
            slug {
              current
            }
            title
          }
        }
      }
    }
  `)
  const products = data.allSanityProduct.edges.map(product => ({
    ...product.node,
  }))
  return (
    <SimpleHeaderLayout title="Sofas">
      <SEO title="Products" />
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard
            key={product.sku}
            slug={product.slug.current}
            imageFluid={product.image.asset.fluid}
            name={product.title}
            price={product.price}
          />
        ))}
      </ul>
    </SimpleHeaderLayout>
  )
}

export default Products
