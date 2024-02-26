import React, { useEffect, useState } from 'react'
import styles from './search.module.css'

const BaseURL = `https://api.spoonacular.com/recipes/complexSearch`
const API_KEY = "82a258d0f71c48c59346b965ebbe68a3";
const Search = ({foodData, setFoodData}) => {
  const [query, setQuery] = useState("");

  const URL = `${BaseURL}?query=${query}&apiKey=${API_KEY}`

  useEffect(() => {
    async function fetchData() {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data.results);
        setFoodData(data.results);
    }

    fetchData();
  }, [query])
  return (
    <div className={styles.searchContainer}>
        <input className={styles.input} type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search Recipe'></input>
    </div>
  )
}

export default Search