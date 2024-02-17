import NextAuth, {NextAuthOptions, User as NextAuthUser, Account, Profile} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {JWT} from "next-auth/jwt";
import {Session} from "next-auth";

// Assuming this is the structure of your user object returned from the server
interface User {
	  id: string; // Assuming there's an id field, adjust as necessary
	  username: string;
	  email: string;
	  token: string;
}

interface CustomUser extends NextAuthUser {
	  username?: string;
	  token?: string;
}

// Extending the NextAuth JWT type with an accessToken property
interface ExtendedToken extends JWT {
	  accessToken?: string;
}

// Define the environment variable for your auth endpoint if not already done
const AUTH_ENDPOINT = process.env.BASE_URL_ENDPOINT + "/login";

export const authOptions: NextAuthOptions = {
	  session: {
			strategy: 'jwt',
	  },
	  providers: [
			CredentialsProvider({
				  name: 'Credentials',
				  credentials: {
						email: {label: "Email", type: "email", placeholder: "john.doe@example.com"},
						password: {label: "Password", type: "password"},
				  },
				  async authorize(credentials) {
						try {
							  if (!credentials) return null;
							  const res = await fetch(`${AUTH_ENDPOINT}`, {
									method: 'POST',
									headers: {'Content-Type': 'application/json'},
									body: JSON.stringify({
										  email: credentials.email,
										  password: credentials.password,
									}),
							  });

							  if (!res.ok) throw new Error("Network response was not ok");

							  const user: User = await res.json();
							  return {
									id: user.id, 
									name: user.username,
									email: user.email,
									token: user.token,
							  };
						} catch (error) {
							  console.error("Authorize error:", error);
							  return null;
						}
				  },
			}),
	  ],
	  callbacks: {
			jwt: async ({
							  token,
							  user,
						}: {
				  token: ExtendedToken; 
				  user?: CustomUser; 
				  account?: Account | null;
				  profile?: Profile | undefined;
				  isNewUser?: boolean;
			}) => {
				  if (user?.token) {
						token.accessToken = user.token;
				  }
				  return token;
			},
			// session callback remains unchanged
			session: async ({session, token}: { session: Session & { accessToken?: string }; token: ExtendedToken }) => {
				  // Your session logic
				  if (token.accessToken) {
						session.accessToken = token.accessToken;
				  }
				  return session;
			},
	  },
};

const handler = NextAuth(authOptions);
export default handler;
