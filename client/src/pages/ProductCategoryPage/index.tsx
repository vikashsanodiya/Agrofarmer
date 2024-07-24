import React from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'
import StoreNavbar from '../../components/StoreNavbar'
import Rating from '@mui/material/Rating'
import Pagination from '@mui/material/Pagination'

const ProductCategoryPage = () => {
  const { category } = useParams()
  const categories = [
    'Apple',
    'Banana',
    'Apricot',
    'Avocados',
    'Blueberry',
    'Blackcurrant',
    'Cranberry',
    'Cantaloupe',
    'Cherry',
    'Dragonfruit',
    'Dates',
    'Cherimoya',
  ]
  return (
    <div className="mb-20">
      <StoreNavbar />
      <div className="md:px-36 px-14 flex">
        <div className="w-40 md:w-64 py-14 font-workSans">
          <h1 className="text-xl font-bold">Filters</h1>
          <h3 className="text-sm pt-4 pb-1 border-b border-solid border-gray-200 border-1 font-bold">
            Category
          </h3>
          <div className="py-2">
            {categories.map((childCategory) => {
              return (
                <div className="flex pb-2 text-sm items-center">
                  <input
                    title={childCategory}
                    type="radio"
                    name="childCategory"
                    id={childCategory}
                  />
                  <label className="pl-1" htmlFor={childCategory}>
                    {childCategory}
                  </label>
                </div>
              )
            })}
          </div>
          <div>
            <h3 className="text-sm pt-4 pb-1 border-b border-solid border-gray-200 border-1 font-bold">
              Customer reviews
            </h3>
            <div className="py-2">
              <div className="flex pb-2 items-center gap-1">
                <input className="pt-1" title="4" type="radio" />
                <Rating
                  defaultValue={3.5}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <p className="text-md">& up</p>
              </div>
              <div className="flex pb-2 items-center gap-1">
                <input className="pt-1" title="4" type="radio" />
                <Rating
                  defaultValue={3.5}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <p className="text-md">& up</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6">
          <div className="flex items-center justify-between pl-14 font-workSans">
            <div>
              <h1 className="text-xl font-bold">Results</h1>
            </div>
            <div className="flex gap-3">
              <select
                className="px-2 py-1 border border-gray-200"
                title="location=filter"
                name="location-filter"
                id="filter"
              >
                <option value="">Distance Filter</option>
                <option value="">Within 20 Miles</option>
                <option value="">Within 15 Miles</option>
                <option value="">Within 10 Miles</option>
                <option value="">Within 5 Miles</option>
              </select>
              <select
                className="px-2 py-1 border border-gray-200"
                title="sort"
                name="sort"
                id="filter"
              >
                <option value="">Sort By</option>
                <option value="">Price low to high</option>
                <option value="">Price high to low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 pl-10 gap-x-4 gap-y-1">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className="mt-3 flex justify-center">
            <Pagination count={4} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategoryPage
