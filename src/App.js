import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import SearchFood from './components/Search';

function App() {
  const [foodList, setFoods] = useState(foodsJSON);

  const [foodListTemp,setTempFoods] = useState(foodsJSON);
  const [displayMessage, setDisplayMessage] = useState(false);

  const addFood = newFood =>{
    const updatedFoods = [...foodList,newFood]
    setFoods(updatedFoods);
  }

  const searchFood = str =>{
    console.log('searrch in apppjd |' + str);
    let filteredFood;

    if(str === ''){
      filteredFood = foodListTemp;
    }
    else{
        filteredFood = foodListTemp.filter(food => {
        return food.name.toLowerCase().indexOf(str) > -1
      })
    }

    setFoods(filteredFood);
  }

  const deleteFood = foodToDelete =>{
    let incompleteFoods;

    incompleteFoods = foodList.filter(food => {
      return food.name !== foodToDelete;
    })
    
    setFoods(incompleteFoods);
    if(incompleteFoods.length === 0){
      setDisplayMessage(true);
    }
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <AddFoodForm addFood={addFood} />
      <SearchFood searchFood={searchFood} />
      {foodList.map(food => {
        return (
          <FoodBox food={food} deleteFood={deleteFood}/>
          )
      })}
      <span className={!displayMessage && 'noDisplay'}>No more food</span>
    </div>
  );
}

export default App;
