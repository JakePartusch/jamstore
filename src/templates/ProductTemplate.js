import React from "react"
import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import SimpleHeaderLayout from "../components/layouts/SimpleHeaderLayout"

const ProductTempate = ({ data }) => {
  const { sanityProduct } = data
  const { image, price, title, _rawBody } = sanityProduct
  return (
    <SimpleHeaderLayout>
      <section className="max-w-md mx-auto mt-8">
        <div className="flex items-center justify-center">
          <GatsbyImage
            fluid={image.asset.fluid}
            alt={title}
            className="min-w-full"
          />
        </div>
      </section>
      <section className="flex flex-wrap justify-between md:justify-end items-center max-w-4xl mx-2 md:mx-auto mt-8">
        <h1 className="text-lg md:text-2xl font-bold text-gray-700">{title}</h1>
        <p className="mx-2 md:mx-8 text-xl font-bold text-pink-500">{`$${price}`}</p>
        <span className="w-full md:w-40 mt-4 md:mt-0 rounded-full shadow-sm">
          <button
            type="button"
            className="snipcart-add-item w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-pink-500 hover:bg-pink-400 focus:outline-none focus:border-pink-700 focus:shadow-outline-pink active:bg-pink-700 transition ease-in-out duration-150"
          >
            Add to Cart
          </button>
        </span>
      </section>
      <section className="max-w-4xl mx-2 md:mx-auto my-16">
        <div>
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <div className="product">{_rawBody[0].children[0].text}</div>
        </div>
      </section>
    </SimpleHeaderLayout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    sanityProduct(slug: { current: { eq: $slug } }) {
      image {
        asset {
          fluid(maxWidth: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
      price
      title
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`
export default ProductTempate
