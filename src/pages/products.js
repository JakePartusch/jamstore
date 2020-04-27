import React from "react"
import SEO from "../components/seo"
import SimpleHeaderLayout from "../components/SimpleHeaderLayout"
import { navigate } from "gatsby"

const ProductCard = ({ imageUrl, name, price }) => {
  const navigateToProduct = () => {
    navigate(`/test`)
  }
  return (
    <li
      className="flex flex-col cursor-pointer justify-between bg-white shadow overflow-hidden sm:rounded-lg transition duration-200 ease-out transform hover:-translate-y-2"
      onClick={navigateToProduct}
      tabIndex={0}
    >
      <div className="flex items-center justify-center py-4">
        <img className="object-cover" src={imageUrl} alt={name} />
      </div>

      <div className="flex flex-col items-center justify-center mt-4 pb-8">
        <h2 className="text-md font-bold text-gray-800">{name}</h2>
        <p className="mt-2 font-bold text-green-500">{`$${price}`}</p>
      </div>
    </li>
  )
}

const Products = () => (
  <SimpleHeaderLayout title="Products">
    <SEO title="Products" />
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <ProductCard
        imageUrl={
          "https://cdn-images.article.com/products/SKU2128/2890x1500/image46788.jpg?fit=max&w=350&q=60&fm=webp"
        }
        name={"Timber Charme Tan Sofa"}
        price={1799}
      />
    </ul>
  </SimpleHeaderLayout>
)

export default Products
