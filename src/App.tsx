import React, { useState } from 'react';
import IngredientButton from './components/IngredientButton';
import Burger from './components/Burger/burger';
import ResetButton from './components/ResetButton/ResetButton';
import { INGREDIENTS } from './ingredients';
import './App.css';

const BASE_PRICE = 30;

const App: React.FC = () => {
  const [ingredients, setIngredients] = useState(
    INGREDIENTS.map(ingredient => ({ name: ingredient.name, count: 0 }))
  );

  const addIngredient = (name: string) => {
    setIngredients(ingredients.map(ingredient => 
      ingredient.name === name 
        ? { ...ingredient, count: ingredient.count + 1 }
        : ingredient
    ));
  };

  const removeIngredient = (name: string) => {
    setIngredients(ingredients.map(ingredient => 
      ingredient.name === name && ingredient.count > 0
        ? { ...ingredient, count: ingredient.count - 1 }
        : ingredient
    ));
  };

  const resetIngredients = () => {
    setIngredients(ingredients.map(ingredient => ({ ...ingredient, count: 0 })));
  };

  const calculateTotalPrice = () => {
    return BASE_PRICE + ingredients.reduce((total, ingredient) => {
      const ingredientDetails = INGREDIENTS.find(i => i.name === ingredient.name);
      return total + (ingredientDetails ? ingredientDetails.price * ingredient.count : 0);
    }, 0);
  };

  return (
    <div className="app">
      <h1>Burger Constructor</h1>
      <div className="controls">
        {INGREDIENTS.map(ingredient => (
          <IngredientButton
            key={ingredient.name}
            ingredient={ingredient}
            onAdd={() => addIngredient(ingredient.name)}
          />
        ))}
      </div>
      <Burger ingredients={ingredients} />
      <div className="total-price">Total Price: {calculateTotalPrice()} сом</div>
      <ResetButton onReset={resetIngredients} />
    </div>
  );
};

export default App;