import React from 'react'
import Item from './Item'

const styleObj = {
    display : 'flex',
    flexWrap : 'wrap'
}
const ItemList = ({food}) => {
  return (
    <div style={styleObj}>
        {food.extendedIngredients.map((item, ind) => {
          return (
            <Item key={ind} item={item}/>
          )
        })}
    </div>
  )
}

export default ItemList