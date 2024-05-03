import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const inter = Roboto({weight: ["500", "700", "900"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
          <header className="bg-[#202024]">
            <nav className="flex justify-between p-3 items-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-3xl">Logo</h1>
              <ul className="flex">
                <li className="p-3 tracking-tight lg:text-lg hover:bg-stone-900 hover:rounded-sm hover:cursor-pointer">Home</li>
                <li className="p-3 tracking-tight lg:text-lg hover:bg-stone-900 hover:rounded-sm hover:cursor-pointer">Projetos</li>
                <li className="p-3 tracking-tight lg:text-lg hover:bg-stone-900 hover:rounded-sm hover:cursor-pointer">Contato</li>
              </ul>
            </nav>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
