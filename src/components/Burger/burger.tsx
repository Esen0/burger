import React from 'react';
import './Burger.css';

interface Ingredient {
    name: string;
    count: number;
}

interface Props {
    ingredients: Ingredient[];
}

const Burger: React.FC<Props> = ({ ingredients }) => (
    <div className="Burger">
        <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
        </div>
        {ingredients.map(ingredient => (
            Array.from({ length: ingredient.count }).map((_, i) => (
                <div key={i} className={ingredient.name}>
                    {ingredient.name}
                </div>
            ))
        ))}
        <div className="BreadBottom"></div>
    </div>
);

export default Burger;