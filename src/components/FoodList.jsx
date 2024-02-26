import React, { useState } from 'react'
import FoodItem from './FoodItem'
import Pagination from './Pagination'
export const FoodList = ({foodData, setFoodId}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const LIMIT = 5;

  let lastIndex = currentPage * LIMIT;
  let firstIndex = lastIndex - LIMIT;
  let currFoodData = foodData.slice(firstIndex, lastIndex);
  let totalLength = foodData.length;
  return (
    <>
        {currFoodData.map(food => <FoodItem key={food.id} food={food} setFoodId={setFoodId}/>)}
        <Pagination LIMIT={LIMIT} totalLength={totalLength} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>
  )
}
