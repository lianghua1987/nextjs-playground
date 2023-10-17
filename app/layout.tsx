import {ReactNode} from "react";
import './global.css';
import NavBar from "@/components/NavBar";
import {exo2, orbitron} from "@/app/fonts";

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
        <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
            <NavBar/>
        </header>
        <main className="grow py-3">
            {children}
        </main>
        <footer className="border-t py-2 text-center text-xs min font-exo2">
            Game data and images courtesy of{' '}
            <a href="https://rawg.io/"
               className="text-orange-800 hover:underline"
               target="_blank">RAWG</a>
        </footer>
        </body>
        </html>
    );
}