import classes from './meal-grid.module.css';

export function MealsGrid({meals}) {
    return (
        <ul>
           {meals.map(meal => <li key={meal.id}>
                <MealItem {...meal} />
           </li>)} 
        </ul>
    )
}
