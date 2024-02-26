import React from 'react'
import FoodItem from './FoodItem'

export const FoodList = ({foodData, setFoodId}) => {
  return (
    <>
        {foodData.map(food => <FoodItem key={food.id} food={food} setFoodId={setFoodId}/>)}
    </>
  )
}
