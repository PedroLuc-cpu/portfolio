import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle/ModeToogle";
import Header from "./components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
          <div className="grid grid-cols-4 h-[100vh]">
            <Header/>
          <div className="col-span-3">
            <div className="bg-[#202024] p-4 justify-b flex">
              <Avatar>
                <AvatarImage src="https://github.com/pedroluc-cpu.png"/>
                <AvatarFallback>PL</AvatarFallback>
              </Avatar>
              <ModeToggle/>
            </div>
            <div className="p-2">
              {children}
            </div>
          </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
