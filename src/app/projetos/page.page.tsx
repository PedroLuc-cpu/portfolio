
import { Button } from "@/components/ui/button";
import { Box } from "../components/box/Box";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "../utils/formatDate";
import CopyOrPaste from "../components/copy-or-paste/CopyOrPaste";


interface CardDataOpen {
  id: number
  name: string
  html_url: string
  full_name: string
  description: string
  created_at: string
  updated_at: string
  pushed_at: string
  clone_url: string
  language: string
}
async function getDataRespo(){
  const res = await fetch("https://api.github.com/users/PedroLuc-cpu/repos")

  if (!res.ok) {
    throw new Error("Failed to get data")
  }

  return res.json()
}

export default async function Projetos() {
  const data: CardDataOpen[]  = await getDataRespo();

  return (
    <Box className="flex flex-col gap-y-2 m-2">

      {
        data.map((repository) => (
          <Card key={repository.id}>
              <CardHeader>
                <CardTitle className="flex items-end justify-between">
                  {repository.name}
                  <CardDescription>
                    Tecnologia mais usada: <strong className="text-gray-200">{repository.language}</strong>
                  </CardDescription>
                </CardTitle>
                <CardDescription>{repository.full_name}</CardDescription>
              </CardHeader>
            <CardContent>
                <CardDescription>{repository.description}</CardDescription>
                <Box className="darbg-zinc-900 bg-slate-50 p-4 mt-2 rounded-md border dark:border-gray-200/20 border-gray-400/50">
                  <CopyOrPaste prefix="git clone" valueP={repository.clone_url}/>
                </Box>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Box>
                <CardDescription><strong className="text-gray-200">Criação</strong>: {formatDate(repository.created_at)}</CardDescription>
                <CardDescription><strong className="text-gray-200">Ultima atualização</strong>: {formatDate(repository.updated_at)}</CardDescription>
                <CardDescription><strong className="text-gray-200">Ultimo push</strong>: {formatDate(repository.pushed_at)}</CardDescription>
              </Box>
              <Button variant={"ghost"}><a href={repository.html_url} target="_blank">Visitar</a></Button>
            </CardFooter>
          </Card>
        ))
      }      
    </Box>
  );
}
