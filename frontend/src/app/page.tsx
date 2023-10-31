import Image from 'next/image'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full justify-center">
      <div className='container mx-auto flex items-center px-6 py-2 h-24'>
        <Header />
      </div>
    </main>
  )
}
