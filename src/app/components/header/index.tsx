"use client"

import { BookUser, Codesandbox, FolderOpenDot, Home } from "lucide-react";
import { useRouter } from "next/navigation"
import { useState } from "react";

function Header() {
  const { push } = useRouter();
  return (
    <header className="bg-[#202024] col-span-1 dark:border dark:border-r-zinc-700">
      <nav className="flex-col">
        <div className="flex items-center" aria-label="Logo">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-3xl p-4">Logo</h1>
            <Codesandbox />
        </div>
          <ul className="flex flex-col p-1">
            <li data-active="true" className={`
              p-3 tracking-tight lg:text-lg
            hover:bg-[#5a5aec] 
              hover:rounded-sm 
              hover:cursor-pointer
              flex justify-between`} 
              onClick={() => {
                push('/')
              }}
              >
                Home <Home />
              </li>
            <li className="
              p-3 tracking-tight lg:text-lg
            hover:bg-[#5a5aec] 
              hover:rounded-sm
              hover:cursor-pointer
              flex justify-between"
              onClick={() => {
                push('projetos')
            }}
              >
                Projetos <FolderOpenDot />
              </li>
            <li className="
              p-3 tracking-tight lg:text-lg
            hover:bg-[#5a5aec] 
              hover:rounded-sm
              hover:cursor-pointer
              flex justify-between"
              >
                Contato <BookUser />
              </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header