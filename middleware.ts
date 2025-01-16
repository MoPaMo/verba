import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/signin",
  },
});

export const config = {
  matcher: [
    "/private/:path*",
    "/settings/:path*",
    "/home/:path*",
    "/setup/:path*",
  ],
};
