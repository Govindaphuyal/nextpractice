
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export default function proxy(request:NextRequest) {
    console.log("data")
    return NextResponse.redirect(new URL('/', request.url))
}
export const config={
    matcher:'/comment'
}