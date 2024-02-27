import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

export function getSession() {
  return getServerSession(options);
}

export async function gerCurrentUser() {
  const session = await getSession();
  return session?.user;
}
