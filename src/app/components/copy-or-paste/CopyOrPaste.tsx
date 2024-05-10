"use client"

import React, { useState } from 'react'
import { Input } from '../forms/Input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'

interface CopyOrPasteProps {
  valueP: string
  prefix: string
}


function CopyOrPaste({ valueP, prefix }: CopyOrPasteProps) {

  const [copie, setCopie] = useState("");
  const { toast } = useToast()


  const handleCopy = () => {
    navigator.clipboard.writeText(valueP)
    .then(() => {
      setCopie(valueP);
      toast({
        title: "Copy",
        description: "Copy was successfully",
        duration: 2000,
      })
    })
    .catch((error) => {
      console.log("Erro de copied: "  + error)
    })
  }

  return (
    <div className='flex items-center gap-1'>
      <Label className='text-nowrap dark:text-gray-300'>{prefix}</Label>
      <Input value={valueP} className='border-none dark:bg-zinc-900 dark: dark:text-gray-300 text-black disabled:cursor-pointer' disabled/>
      <Button variant={"outline"} onClick={handleCopy}>{!!copie ? "copiado" : "copiar"}</Button>
    </div>
  )
}

export default CopyOrPaste