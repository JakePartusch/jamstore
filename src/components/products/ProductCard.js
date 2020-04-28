import React from "react"
import { Link } from "gatsby"
import GatsbyImage from "gatsby-image"

const ProductCard = ({ imageUrl, name, price, imageFluid, slug, ...rest }) => {
  return (
    <li {...rest}>
      <Link
        to={`/products/${slug}`}
        className="flex flex-col cursor-pointer justify-between bg-white shadow overflow-hidden sm:rounded-lg transition duration-200 ease-out transform hover:-translate-y-2"
      >
        <div className="flex items-center justify-center py-4">
          {imageFluid ? (
            <GatsbyImage className="min-w-full" fluid={imageFluid} alt={name} />
          ) : (
            <img className="object-cover" src={imageUrl} alt={name} />
          )}
        </div>

        <div className="flex flex-col items-center justify-center mt-4 pb-8">
          <h2 className="text-md font-bold text-gray-800">{name}</h2>
          <p className="mt-2 font-bold text-pink-500">{`$${price}`}</p>
        </div>
      </Link>
    </li>
  )
}
export default ProductCard
