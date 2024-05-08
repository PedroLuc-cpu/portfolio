import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, MapPin } from "lucide-react"
import Image from "next/image"

async function getData(){
  const res = await fetch("https://api.github.com/users/PedroLuc-cpu")

  if (!res.ok) {
    throw new Error("Failed to get data")
  }

  return res.json()
}

interface User {
  id: number
  login: string
  avatar_url: string
  name: string
  html_url: string
  company: string
  blog: string
  location: string
  email: string
  public_repos: string
  followers: number
  following: number
  bio: string
}

export default async function Home() {
  const data: User = await getData()

  return (
    <div className="grid grid-cols-2 items-center">
      <Card key={data.id}>
        <CardHeader>
          <CardTitle>{data.name}</CardTitle>
          <CardDescription>{data.bio}</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2 flex-col">
          <div className="flex items-baseline gap-1">
            <Building2 size={20}/>
            <CardDescription>{data.company}</CardDescription>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={20}/>
            <CardDescription>
              {data.location}
            </CardDescription>
          </div>
        </CardContent>
      </Card>
      <Image src={"/avatar.jpeg"} alt="https://github.com/pedroluc-cpu.png" width={500} height={500}/>
    </div>
  );
}
