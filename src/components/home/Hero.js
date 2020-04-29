import React from "react"
import { Link, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "jam-cover.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-xl mx-auto ">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div className="hidden md:block md:pr-4">
                <Link
                  to="/products"
                  className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                >
                  Products
                </Link>
                <Link
                  to="/"
                  className="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                >
                  About Us
                </Link>
                <Link
                  to="/"
                  className="ml-8 font-medium text-teal-600 transition duration-150 ease-in-out hover:text-teal-900 focus:outline-none focus:text-teal-700"
                >
                  Log in
                </Link>
              </div>
            </nav>
          </div>

          <div className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Hand-crafted jams
                <br />
                <span className="text-pink-600">made with love</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/products"
                    className="flex items-center justify-center w-full px-8 py-3 text-base text-lg font-bold leading-6 text-white transition duration-150 ease-in-out bg-teal-400 border border-transparent rounded-md hover:bg-teal-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <GatsbyImage
          className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
          fluid={data.coverImage.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}

export default Hero
