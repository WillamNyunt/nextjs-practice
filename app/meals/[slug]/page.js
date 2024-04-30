import classes from './page.module.css';
import Image from 'next/image';
import { getMeal } from '../../../lib/meals';

export default function MealDetailsPage({ params }) {
    const { slug } = params;
    const meal = getMeal(slug);

    meal.instructions = meal.instructions.replace(/\n/g, '<br>');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>Title</h1>
                    <div className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                        <p className={classes.summary}>{meal.summary}</p>
                    </div>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions,
                }}></p>
            </main>
        </>
    )
}
