import React from "react"
import SimpleHeaderLayout from "../components/SimpleHeaderLayout"

const ProductTempate = ({ pageContext }) => {
  return (
    <SimpleHeaderLayout>
      <section className="max-w-4xl mx-auto mt-8">
        <div className="flex items-center justify-center">
          <img src={pageContext.imageUrl} />
        </div>
      </section>
      <section className="flex flex-wrap justify-between md:justify-end items-center max-w-4xl mx-2 md:mx-auto mt-8">
        <h1 className="text-lg md:text-2xl font-bold text-gray-700">
          {pageContext.title}
        </h1>
        <p className="mx-2 md:mx-8 text-xl font-bold text-green-500">{`$${pageContext.price}`}</p>
        <span className="w-full md:w-40 mt-4 md:mt-0 rounded-full shadow-sm">
          <button
            type="button"
            className="snipcart-add-item w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150"
          >
            Add to Cart
          </button>
        </span>
      </section>
      <section className="max-w-4xl mx-2 md:mx-auto my-16">
        <div>
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <div
            className="product"
            dangerouslySetInnerHTML={{ __html: pageContext.html }}
          ></div>
        </div>
      </section>
    </SimpleHeaderLayout>
  )
}
export default ProductTempate
