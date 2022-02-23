import {useState} from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { OmitProps } from 'antd/lib/transfer/ListBody';

function FoodBox(prep){
    const handleDelete = food =>{
        prep.deleteFood(food.target.id);
    }
    return(
    
      <div
        title={prep.food.name}
        id={prep.food.name}
        className='box'
        style={{ width: 230, height: 300, margin: 10 }}
      >
      <div>{prep.food.name}</div>
        <img src={prep.food.image} height={60} alt="food" />
        <p>Calories: {prep.food.calories}</p>
        <p>Servings: {prep.food.servings}</p>
        <p>
          <b>Total Calories: {prep.food.calories * prep.food.servings} </b> kcal
        </p>
        <button className="btn" id={prep.food.name} onClick={handleDelete}>Delete</button>
      </div>
    
    );
}
export default FoodBox;