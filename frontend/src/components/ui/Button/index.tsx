'use client'

import { useRouter } from "next/navigation";

export default function Button(){
  const router = useRouter();


  return (
    <button 
      className="px-3 py-2 rounded-full border-solid border-1" 
      style={{
      }} 
      onClick={() => router.push("/cadastrarImovel") }>
      Cadastre Seu Imóvel
    </button>
  )
}