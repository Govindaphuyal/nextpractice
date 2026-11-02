"use client"
import { useRouter } from "next/navigation"


export default function Order() {
    const router=useRouter();
    const handleClick=()=>{
        console.log("order place")
        router.push("/")
    }
  return (
    <div>
      <h1>welcome to order place</h1>
      <button onClick={handleClick}>Order</button>
    </div>
  )
}
