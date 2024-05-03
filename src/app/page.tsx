"use client"
import { Box } from "./components/box/Box";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
      Pedro Lucas Santos Develop
      </h1>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
        ReactJs / NextJS
      </h1>
      <Box>
      </Box>
    </main>
  );
}
