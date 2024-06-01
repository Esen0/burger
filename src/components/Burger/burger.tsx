import React from 'react';

interface Ingredient {
  name: string;
  count: number;
}

interface Props {
  ingredients: Ingredient[];
}

const Burger: React.FC<Props> = ({ ingredients }) => (
  <div className="burger">
    <div className="burger-top">Top Bun</div>
    {ingredients.map(ingredient => (
      <div key={ingredient.name} className="burger-ingredient">
        {Array.from({ length: ingredient.count }).map((_, i) => (
          <div key={i} className={`ingredient ${ingredient.name.toLowerCase()}`}>
            {ingredient.name}
          </div>
        ))}
      </div>
    ))}
    <div className="burger-bottom">Bottom Bun</div>
  </div>
);

export default Burger;