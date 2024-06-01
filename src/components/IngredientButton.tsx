import React from 'react';
import { Ingredient } from '../type';

interface Props {
  ingredient: Ingredient;
  onAdd: () => void;
  onRemove: () => void;
}

const IngredientButton: React.FC<Props> = ({ ingredient, onAdd, onRemove }) => (
  <div className="ingredient-button-container">
    <button className="ingredient-button" onClick={onAdd}>
      <img src={ingredient.image} alt={ingredient.name} />
      {ingredient.name}
    </button>
    <button className="ingredient-remove-button" onClick={onRemove}>X</button>
  </div>
);

export default IngredientButton;