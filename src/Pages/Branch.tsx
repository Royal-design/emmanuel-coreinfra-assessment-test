import React, { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";

const names = ["ola", "ade", "ife"];

export const Branch: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div className="group relative max-w-sm bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="p-6 pb-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <h1 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
            Premium Headphones
          </h1>
          <p className="text-slate-300 text-sm mt-1">
            Wireless • Noise Cancelling
          </p>
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1556745763-1a6f0ddb0250?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
            alt="Premium wireless headphones"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Slide-in overlay content */}
          <div className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <div className="text-center text-white p-6 space-y-3">
              <div className="flex items-center justify-center space-x-4 text-sm">
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>40H Battery</span>
                </span>
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Hi-Res Audio</span>
                </span>
              </div>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Quick View
              </button>
            </div>
          </div>

          {/* New Badge */}
          <div className="absolute top-4 -right-12 group-hover:right-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
            NEW
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 relative">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Experience crystal-clear sound with advanced noise cancellation
                technology.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">$299</span>
              <span className="text-lg text-gray-500 line-through">$399</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">(127)</span>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform group-hover:scale-[1.02] shadow-md hover:shadow-lg">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="max-w-sm md:w-70 md:h-80 bg-gradient-to-r from-black via-black/90 to-orange-600 overflow-hidden relative rounded-md shadow-md group my-4">
        {/* image */}
        <img
          src="https://images.unsplash.com/photo-1556745763-1a6f0ddb0250?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
          alt="image"
          className="w-full object-cover h-full"
        />
        {/* overlay content */}
        <div className="absolute inset-0 py-3 px-2 flex flex-col justify-end -translate-x-full group-hover:translate-x-0 duration-200 transition-transform bg-gradient-to-r from-black/80 to-orange-900/60">
          <article className="space-y-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent">
              Lorem ipsum dolor sit.
            </h1>
            <p className="text-white max-w-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              fuga similique illum minima voluptates odit laborum nihil non
              dolorum. Commodi?
            </p>
            <button className="rounded-md py-2 px-4  hover:bg-green-500 bg-green-700">
              Check
            </button>
          </article>
          {/* like badge */}
          <div className="absolute right-2 top-2 rounded-full w-4 h-4 bg-orange-400 p-3 text-white flex justify-center items-center">
            1
          </div>
        </div>
      </div>
      <button className="relative group h-12 rounded-lg p-0.5 overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 ease-out">
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Button content */}
        <div className="relative px-6 flex items-center justify-center bg-gray-900 hover:bg-gray-800 rounded-md h-full text-white font-medium transition-colors duration-200">
          <span className="relative z-10">Click Me</span>
        </div>
      </button>
      <div className="mb-3 flex space-x-4 items-center  bg-red-400">
        {names.map((name, index) => (
          <React.Fragment key={index}>
            <a
              href="#"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-white/50 rounded-md transition-all duration-200 font-medium whitespace-nowrap"
            >
              {name}
            </a>
            {index < names.length - 1 && (
              <div className="flex items-center justify-center h-full">
                <div className="w-px h-4 bg-gray-300"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* product card */}

      {/* Deepseek response */}

      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Product Image */}
        <div className="relative pb-[75%] overflow-hidden">
          <img
            className="absolute h-full w-full object-cover hover:scale-105 transition-transform duration-500"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            alt="Running Shoes"
          />
          {/* Badge */}
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            SALE
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Nike Air Max
              </h3>
              <p className="text-gray-600 text-sm">Running Shoes</p>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-gray-700 ml-1">4.8</span>
            </div>
          </div>

          <div className="mt-3 flex justify-between items-center">
            <div>
              <span className="text-gray-900 font-bold text-xl">$129.99</span>
              {false && ( // Set to true to show old price
                <span className="text-gray-400 line-through ml-2">$159.99</span>
              )}
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
              Add to Cart
            </button>
          </div>

          {/* Color Options */}
          <div className="mt-4">
            <p className="text-gray-600 text-sm">Colors:</p>
            <div className="flex space-x-2 mt-1">
              {["bg-red-500", "bg-blue-500", "bg-black", "bg-gray-300"].map(
                (color, index) => (
                  <div
                    key={index}
                    className={`w-6 h-6 rounded-full ${color} border-2 border-white shadow-md cursor-pointer hover:opacity-80`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="group my-4 relative w-full max-w-sm mx-auto overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl">
        {/* Product Image - Full Bleed */}
        <div className="relative h-90 w-full">
          <img
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80"
            alt="Designer Watch"
          />

          {/* Dark overlay that appears on hover */}
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-30"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
          {/* Top Content */}
          <div className="flex justify-between items-start">
            {/* Badge */}
            <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
              NEW
            </span>

            {/* Wishlist Button */}
            <button className="p-2 rounded-full bg-red-500  backdrop-blur-sm hover:bg-red-500/80 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>

          {/* Bottom Content - Slides up on hover */}
          <div className="transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Luxury Chrono Watch</h3>
              <p className="text-sm opacity-90">Premium Edition</p>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-2xl font-bold">$599</span>
                {false && ( // Set to true to show old price
                  <span className="text-sm line-through ml-2 opacity-75">
                    $799
                  </span>
                )}
              </div>

              <button className="flex items-center justify-center bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>

          {/* Always visible minimal info */}
          <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
            <h3 className="text-lg font-semibold">Luxury Chrono</h3>
            <span className="text-xl font-bold">$599</span>
          </div>
        </div>
      </div>

      {/* second deep response*/}
    </div>
  );
};
