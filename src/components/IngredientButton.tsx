import React from 'react';
import { Ingredient } from '../type';

interface Props {
  ingredient: Ingredient;
  onAdd: () => void;
}

const IngredientButton: React.FC<Props> = ({ ingredient, onAdd }) => (
  <button className="ingredient-button" onClick={onAdd}>
    <img src={ingredient.image} alt={ingredient.name} />
    {ingredient.name}
  </button>
);

export default IngredientButton;