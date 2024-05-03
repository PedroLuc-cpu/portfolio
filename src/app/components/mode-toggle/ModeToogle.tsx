"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"


export function ModeToggle() {
  const { setTheme } = useTheme()
  return (
    <div className="flex gap-2">
      <button onClick={() => setTheme("light")}><Sun/></button>
      <button onClick={() => setTheme("dark")}><Moon/></button>
    </div>
  )
}