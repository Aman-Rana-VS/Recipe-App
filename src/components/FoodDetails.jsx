import React, { useEffect, useState } from 'react'
import styles from './fooddetails.module.css'
import ItemList from './ItemList';

const FoodDetails = ({foodId}) => {
  const BaseURL = `https://api.spoonacular.com/recipes/${foodId}/information`
  const API_KEY = "82a258d0f71c48c59346b965ebbe68a3";
  const URL = `${BaseURL}?apiKey=${API_KEY}`
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data.analyzedInstructions[0].steps);
      setFood(data);
      setIsLoading(false);
    } 

    if(foodId) fetchData();
  }, [foodId])
  
  if(!foodId) return <div style={{textAlign : "center"}}>Nothing to show</div>
  if(isLoading) return <div>Loading ...</div>
  return (
    <div>
      <div className={styles.recipeCard}> 
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt=''/>
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱️{food.readyInMinuter} Minutes </strong>
          </span>
          <span>
            <strong>👨‍👦‍👦 Serves {food.servings} </strong>
          </span>
          <span>
            {food.vegetarian ? "🥦 Vegetarian" : "🥩 Non-Vegetarian"}
          </span>
          <span>{food.vegan ? "🐮 Vegan" : ""}</span>
        </div>
        <div>
          <span>${food.pricePerServing} per serving</span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol className='list-decimal'>
            {food.analyzedInstructions[0].steps.map((curr, ind) => {
              return (<li key={ind}>{curr.step}</li>)
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default FoodDetails