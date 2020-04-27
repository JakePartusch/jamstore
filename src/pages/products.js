import React from "react"
import SEO from "../components/seo"
import SimpleHeaderLayout from "../components/SimpleHeaderLayout"
import { navigate, useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

const ProductCard = ({ imageUrl, name, price, imageFluid, slug, ...rest }) => {
  const navigateToProduct = () => {
    navigate(`/products/${slug}`)
  }
  return (
    <li
      className="flex flex-col cursor-pointer justify-between bg-white shadow overflow-hidden sm:rounded-lg transition duration-200 ease-out transform hover:-translate-y-2"
      onClick={navigateToProduct}
      tabIndex={0}
      {...rest}
    >
      <div className="flex items-center justify-center py-4">
        {imageFluid ? (
          <GatsbyImage className="min-w-full" fluid={imageFluid} />
        ) : (
          <img className="object-cover" src={imageUrl} alt={name} />
        )}
      </div>

      <div className="flex flex-col items-center justify-center mt-4 pb-8">
        <h2 className="text-md font-bold text-gray-800">{name}</h2>
        <p className="mt-2 font-bold text-green-500">{`$${price}`}</p>
      </div>
    </li>
  )
}

const Products = () => {
  const data = useStaticQuery(graphql`
    query AllProducts {
      allSanityProduct {
        edges {
          node {
            images {
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
    <SimpleHeaderLayout title="Products">
      <SEO title="Products" />
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard
            key={product.sku}
            slug={product.slug.current}
            imageFluid={product.images[0].asset.fluid}
            name={product.title}
            price={product.price}
          />
        ))}
      </ul>
    </SimpleHeaderLayout>
  )
}

export default Products
