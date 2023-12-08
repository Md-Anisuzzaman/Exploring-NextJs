import { Suspense } from "react"



export default async function Products() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`https://dummyjson.com/products`)
  const repo = await res.json()

  return (
    <div>
        {
          repo.products.map((product) => <p>Title: {product.title}  Price: {product.price}Tk</p>)
        }
    </div>
  )
}
