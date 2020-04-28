import React from "react"

const Features = () => (
  <div className="bg-gray-50 overflow-hidden">
    <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <svg
        className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
        />
      </svg>

      <div className="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
        <div className="lg:col-span-1">
          <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Crafted with love and shipped with care
          </h3>
        </div>
        <div className="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-gray-900">
                Competitive prices
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Consequuntur omnis dicta cumque, inventore atque ab dolores
                aspernatur tempora ab doloremque.
              </p>
            </div>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-gray-900">
                Free Shipping
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Corporis quisquam nostrum nulla veniam recusandae temporibus
                aperiam officia incidunt at distinctio ratione.
              </p>
            </div>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-gray-900">
                Money Back Guarantee
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Omnis, illo delectus? Libero, possimus nulla nemo tenetur
                adipisci repellat dolore eligendi velit doloribus mollitia.
              </p>
            </div>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-gray-900">
                Tracking notifications
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Veniam necessitatibus reiciendis fugit explicabo dolorem nihil
                et omnis assumenda odit? Quisquam unde accusantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Features
