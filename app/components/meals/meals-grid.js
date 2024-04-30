import classes from './meals-grid.module.css';

export function MealsGrid({meals}) {
    return (
        <ul>
           {meals.map(meal => <li key={meal.id}>{meal.name}</li>)} 
        </ul>
    )
}
