'use client'

import { useRouter } from 'next/navigation'

import { Suspense } from "react"
import Products from "../products/page"
import Image from 'next/image'

export default function Home() {

  const router = useRouter()
  // console.log(router);

  const handleRoute = (navigate) => {
    router.push(navigate)
  }

  return (
    <div>
      <h1>All Products</h1>
      <Image
        src="https://plus.unsplash.com/premium_photo-1694707100728-bd20bb281188?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="500"
        height="300"
      />
      <br />
      <Image
        src="https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
        width="500"
        height="300"
      />
      <Suspense fallback="Loading...">
        <Products />
      </Suspense>

      <h1>Use Router</h1>
      <button onClick={()=>handleRoute('user')}>go to page </button>
    </div>
  )
}
