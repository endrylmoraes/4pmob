// import { useContext } from "react";

import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

// import { AuthContext } from "../../contexts/AuthContext";

interface HeaderProps {
  bordaInferior?: boolean;
}

export function Header({ bordaInferior }: HeaderProps){
  
  // const { innerWidth: width } = window;

  return(
    <header className={`flex w-full justify-between`} style={{borderBottom: bordaInferior ? 'solid 1px var(--gray)': 'none'}}>
      <Link href="/">
        <Image src="/Logo_Acima.png" alt="Logo Acima Imóveis" width={136} height={43}/>
      </Link>

      <div className="flex items-center justify-center gap-2 md:gap-8">
        <Link href="Home">Comprar</Link>
        <Link href="Home">Alugar</Link>
        <Link href="Home">Fale Conosco</Link>
        <Button/>
      </div>

    </header>
  )
}