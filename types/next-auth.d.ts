import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    name?: string | null;
    profileEmoji?: string | null;
  }

  interface Session {
    user: User & {
      id: string;
      profileEmoji?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    profileEmoji?: string | null;
  }
}
