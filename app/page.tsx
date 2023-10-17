import Heading from "@/components/Heading";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <Heading>Indie Gamer</Heading>
            <p className="pb-3">
                Only the best indie games, reviewed for you.
            </p>
            <div className="border  bg-white rounded shadow hover:shadow-2xl w-80 sm:w-full">
                <Link href="/reviews/stardew-valley" className="flex flex-col sm:flex-row">
                    <img src="/images/stardew-valley.jpg" alt="" width="320" height="180"
                         className="rounded-t sm:rounded-l sm:rounded-r-none"/>
                    <h2 className="text-center py-1 font-semibold font-orbitron sm:px-2">Stardew Valley</h2>
                </Link>
            </div>
        </>

    )
}