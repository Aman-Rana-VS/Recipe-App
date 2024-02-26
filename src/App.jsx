import { useState } from "react";
import { FoodList } from "./components/FoodList";
import Search from "./components/Search"
import './App.css';
import Nav from "./components/Nav";
import { Container } from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <>
      <Nav/>
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

export default App
