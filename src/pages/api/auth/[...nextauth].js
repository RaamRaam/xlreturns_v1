import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import LinkedInProvider from "next-auth/providers/linkedin"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"



export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    // OAuth authentication providers
    
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
    }),
  
    
  ],
  pages: {
  signIn: '/login'
  },
//   database providers
    // database: process.env.DATABASE_URL,
})