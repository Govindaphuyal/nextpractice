// import {comment} from "./data"
// export async function GET(){
// return Response.json(comment)
// }

// import { redirect } from "next/navigation"
// import { type NextRequest } from "next/server"
// export async function POST(request:NextRequest){
//     const search =request.nextUrl.searchParams
//     const query=search.get("query")
// return Response.json(query)
// }
"use client";
export async function GET() {

  return Response.json({time:new Date().toLocaleTimeString()});
}