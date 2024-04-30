import { Suspense } from 'react';
import { MealsGrid } from '../components/meals/meals-grid';
import { getMeals } from '../lib/meals';
import classes from './page.module.css';
import Link from 'next/link';

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
}


export default async function MealsPage() {

    return (
        <>
            <header className={classes.header}>
                <h1>Delicious ,meals created
                    <span className={classes.highlight}> just for you</span>
                </h1>
                <p>
                    Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your own meal!
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>
                    Fetching meals...
                </p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}