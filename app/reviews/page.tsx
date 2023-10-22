import Link from "next/link";
import Heading from "@/components/Heading";
import {getReview, getReviews} from "@/lib/reviews";

export const metadata = {
    title: 'Reviews'
};

export default async function ReviewsPage() {
    const reviews = await getReviews();
    return (
        <>
            <Heading>Reviews</Heading>
            <ul className="flex flex-row gap-4 flex-wrap">
                {
                    reviews.map(review => (
                        <li className="border w-80 bg-white rounded shadow hover:shadow-2xl" key={review.title}>
                            <Link href={`/reviews/${review.slug}`}>
                                <img src={review.imageUrl} alt="" width="320" height="180"
                                     className="mb-2 rounded-t"/>
                                <h2 className="text-center py-1 font-semibold font-orbitron">{review.title}</h2>
                            </Link>
                        </li>))
                }
            </ul>


        </>
    )
}