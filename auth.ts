import NextAuth from "next-auth"
import credentials from "next-auth/providers/credentials"
import connectdb from "./lib/connectdb"
import { compare } from "bcryptjs";
import { User } from "./models/user"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [

    credentials({
      name: "Credentials",
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*****",
        },
      },
      authorize: async (credentials) => {
        const password = credentials.password as string | undefined
        const email = credentials.email as string | undefined

        if (!password || !email) return null;

        await connectdb()

        const user = await User.findOne({ email }).select("+password");

        if (user.email !== email) return null;

        if (user.email !== "yaser1999yaser@hotmail.com") return null;

        if (!user.password) return null

        const isMatched = await compare(password, user.password)

        if (!isMatched) return null;

        const userData = {
          name: user.name,
          email: user.email,
          role: user.role,
          id: user._id.toString(),
        }

        return userData


      }




    })
  ],
  callbacks: {
    signIn: async ({ account }) => {
      return ["credentials", "resend"].includes(account?.provider || "");
    },

    async jwt({ token, user }) {
      if (user) {
        await connectdb();
        const dbUser = await User.findOne({ email: token.email });
        if (dbUser) token.role = dbUser.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        // @ts-expect-error: Unreachable code error
        session.user.role = token.role;

      }
      return session;
    },
  },
})