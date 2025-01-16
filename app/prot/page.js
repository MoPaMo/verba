import { getServerSession } from "next-auth/next"

export default async function ProtectedPage() {
  const session = await getServerSession()
  
  if (!session) {
    return <div>Access Denied</div>
  }
  
  return <div>Protected Content</div>
}