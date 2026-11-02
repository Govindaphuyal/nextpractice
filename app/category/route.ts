"use client";
export async function GET(){
     const products = [
    { id: 1, name: "T-Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 2000 },
    { id: 3, name: "Watch", price: 1500 }
  ];

  return Response.json(products);

}