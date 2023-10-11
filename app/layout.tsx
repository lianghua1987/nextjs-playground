import {ReactNode} from "react";

export default function RootLayout({children}: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
      <header>
        [header]
      </header>
      <main>
        {children}
      </main>
      <footer>
        [footer]
      </footer>
      </body>
    </html>
  );
}