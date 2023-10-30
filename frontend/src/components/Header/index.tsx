// import { useContext } from "react";

import Link from "next/link";
import Image from "next/image";

// import { AuthContext } from "../../contexts/AuthContext";

export function Header(){
    return(
      <header className='w-full bg-red-700 h-10'>
        <Link href="/">
          <Image src="logo.png" alt="Logo Acima Imóveis" width={100} height={100}/>
        </Link>
      </header>
    )
}