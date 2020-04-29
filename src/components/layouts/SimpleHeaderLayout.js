import React from "react"
import { Link } from "gatsby"
import Footer from "../common/Footer"

const SimpleHeaderLayout = ({ title, children }) => (
  <div className="flex flex-col min-h-screen">
    <nav className="bg-teal-600">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline">
                <Link
                  to="/"
                  className="px-3 py-2 text-sm font-medium text-teal-200 rounded-md hover:text-white hover:bg-teal-600 focus:outline-none focus:text-white focus:bg-teal-600"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="px-3 py-2 ml-4 text-sm font-medium text-white bg-teal-800 rounded-md focus:outline-none focus:text-white focus:bg-teal-600"
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className="px-3 py-2 ml-4 text-sm font-medium text-teal-200 rounded-md hover:text-white hover:bg-teal-600 focus:outline-none focus:text-white focus:bg-teal-600"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {title && (
      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
    )}
    <main className="flex-grow pb-16 bg-gray-50">
      <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
    </main>
    <Footer />
  </div>
)

export default SimpleHeaderLayout
