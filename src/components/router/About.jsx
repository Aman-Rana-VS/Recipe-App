import React from 'react'

export default function About() {
  return (
      <div className="my-2 py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://st3.depositphotos.com/13324256/17303/i/450/depositphotos_173034766-stock-photo-woman-writing-down-recipe.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Recipe App
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Search popular dishes and recipes along with detailed instruction on how to cook them.
                          Also view the detailed list of ingredients and servings for the recipe.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}