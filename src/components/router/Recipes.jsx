import React, { useState } from 'react'
import Search from '../Search';
import InnerContainer from '../InnerContainer';
import { Container } from '../Container';
import { FoodList } from '../FoodList';
import FoodDetails from '../FoodDetails';


const Recipes = () => {
    const [foodData, setFoodData] = useState([]);
    const [foodId, setFoodId] = useState("");
    return (
        <>
            <Search foodData={foodData} setFoodData={setFoodData}/>
            <Container>
                <InnerContainer>
                    <FoodList setFoodId={setFoodId} foodData={foodData}/>
                </InnerContainer>
                <InnerContainer>
                    <FoodDetails foodId={foodId}/>
                </InnerContainer>
            </Container>
        </>
    )
}

export default Recipes;