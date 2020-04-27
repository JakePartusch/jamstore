import React from "react"
import ProductTempate from "../templates/ProductTemplate"

const Test = () => {
  return (
    <ProductTempate
      pageContext={{
        imageUrl:
          "https://cdn-images.article.com/products/SKU2128/2890x1500/image46788.jpg?fit=max&w=600&q=60&fm=webp",
        title: "Timber Charme Tan Sofa",
        price: 1799,
        html: "<div>test</div>",
      }}
    />
  )
}

export default Test
