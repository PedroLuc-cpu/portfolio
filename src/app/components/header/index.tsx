"use client"

import { BookUser, Codesandbox, FolderOpenDot, Home } from "lucide-react";
import { useRouter } from "next/navigation"

function Header() {
  const { push } = useRouter();
  return (
    <header className="dark:bg-[#202024] col-span-1 dark:border dark:border-r-zinc-700 border">
      <nav className="flex-col">
        <div className="flex items-center" aria-label="Logo">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-3xl p-4 text-gray-600 dark:text-gray-100">Logo</h1>
            <Codesandbox className="text-gray-600 dark:text-gray-100"/>
        </div>
          <ul className="flex flex-col p-1">
            <li data-active="true" className={`
              p-3 tracking-tight lg:text-lg
            hover:bg-[#5a5aec]
              text-gray-600
              dark:text-gray-100
              hover:rounded-sm 
              hover:cursor-pointer
              flex justify-between 
              hover:text-white          
              group-hover:text-white
              `} 
              onClick={() => {
                push('/')
              }}
              >
                Home<Home className="group-hover:text-white dark:text-gray-100"/>
              </li>
            <li className="
              p-3 tracking-tight lg:text-lg
            hover:bg-[#5a5aec] 
              dark:text-gray-100
              text-gray-600
              hover:rounded-sm
              hover:cursor-pointer
              flex justify-between
              hover:text-white
              group-hover:text-white
              "
              onClick={() => {
                push('projetos')
              }}
              >
                Projetos<FolderOpenDot className="group-hover:text-white dark:text-gray-100"/>
              </li>
            <li className="
              p-3 tracking-tight lg:text-lg
            hover:bg-[#5a5aec] 
              text-gray-600
              hover:rounded-sm
              hover:cursor-pointer
              flex justify-between
              dark:text-gray-100
              hover:text-white
              group-hover:text-white
              "
              onClick={() => {
                push('contato')
              }}
              >
                Contato<BookUser className="group-hover:text-white dark:text-gray-100"/>
              </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header