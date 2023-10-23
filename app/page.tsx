import Heading from "@/components/Heading";
import Link from "next/link";
import Image from "next/image";
import {getFeaturedReview, getReviews} from "@/lib/reviews";
import React from "react";

export default async function HomePage() {
    const reviews = await getReviews(3);
    return (
        <>
            <Heading>Indie Gamer</Heading>
            <p className="pb-3">
                Only the best indie games, reviewed for you.
            </p>
            <ul>
                {reviews.map(review => (
                    <li className="border  bg-white rounded shadow hover:shadow-2xl w-80 sm:w-full" key={review.slug}>
                        <Link href={`/reviews/${review.slug}`} className="flex flex-col sm:flex-row">
                            <Image src={review.imageUrl} alt="" width="320" height="180" priority
                                   className="rounded-t sm:rounded-l sm:rounded-r-none"/>
                            <h2 className="text-center py-1 font-semibold font-orbitron sm:px-2">{review.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}