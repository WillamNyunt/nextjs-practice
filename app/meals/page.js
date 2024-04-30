
import { MealsGrid } from '../components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import classes from './page.module.css';
import Link from 'next/link';
import { Suspense } from 'react';

async function Meals() {
    console.log('Fetching ... Meals');
    const meals = await getMeals();
    console.log('Fetched Meals')
    return <MealsGrid meals={meals} />;
}


export default function MealsPage() {
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
                <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}