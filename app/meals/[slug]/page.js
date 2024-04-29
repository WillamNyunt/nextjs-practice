import React from 'react'

export default function MealDetailsPage({ params }) {
    //get slug
    const { slug } = params;

    return (
        <>
            <h1>{slug}</h1>
        </>
    )
}
