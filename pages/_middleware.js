import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req){
  //Token will exist if user is logged in
  const token = await getToken({req, secret: process.env.JWT_SECRET});

  const {pathname} = req.nextUrl

  //Allow the request if the following :
  //1. If the request for next auth session & provider fetching
  //2. the token exists


  if(pathname.includes('/api/auth')|| token){
    return NextResponse.next(); 
  }

  //Redirect them to login if they don't have token and requesting a protected route

  if(!token && pathname != '/login'){
    return NextResponse.redirect('/login');
  }
}