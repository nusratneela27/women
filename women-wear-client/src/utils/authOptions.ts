import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {

    providers: [
        
    ],
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
}
