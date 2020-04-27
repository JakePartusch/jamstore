import React from "react"
import { Link } from "gatsby"

const SimpleHeaderLayout = ({ title, children }) => (
  <div className="min-h-screen flex flex-col">
    <nav className="bg-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-green-200 hover:text-white hover:bg-green-600 focus:outline-none focus:text-white focus:bg-green-600"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-green-800 focus:outline-none focus:text-white focus:bg-green-600"
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-green-200 hover:text-white hover:bg-green-600 focus:outline-none focus:text-white focus:bg-green-600"
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
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
    )}
    <main className="flex-grow bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
    </main>
  </div>
)

export default SimpleHeaderLayout
