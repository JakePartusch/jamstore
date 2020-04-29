import React from "react"
import { Link } from "gatsby"
import GatsbyImage from "gatsby-image"

const ProductCard = ({ imageUrl, name, price, imageFluid, slug, ...rest }) => {
  return (
    <li {...rest}>
      <Link
        to={`/products/${slug}`}
        className="flex flex-col justify-between overflow-hidden transition duration-200 ease-out transform bg-white shadow cursor-pointer sm:rounded-lg hover:-translate-y-2"
      >
        <div className="flex items-center justify-center py-4">
          {imageFluid ? (
            <GatsbyImage className="min-w-full" fluid={imageFluid} alt={name} />
          ) : (
            <img className="object-cover" src={imageUrl} alt={name} />
          )}
        </div>

        <div className="flex flex-col items-center justify-center pb-8 mt-4">
          <h2 className="font-bold text-gray-800 text-md">{name}</h2>
          <p className="mt-2 font-bold text-pink-600">{`$${price}`}</p>
        </div>
      </Link>
    </li>
  )
}
export default ProductCard
