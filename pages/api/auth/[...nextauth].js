import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Magic } from "@magic-sdk/admin";

const magic = new Magic(process.env.MAGIC_SK);

export default NextAuth({
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/auth",
  },
  providers: [
    CredentialsProvider({
      name: "Magic Link",
      credentials: {
        didToken: { label: "DID Token", type: "text" },
      },
      async authorize({ didToken }, req) {
        magic.token.validate(didToken);

        const metadata = await magic.users.getMetadataByToken(didToken);

        return { ...metadata };
      },
    }),
  ],
});
