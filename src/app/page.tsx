import { redirect } from "next/navigation";

export default function Home() {
  redirect("/patient/auth/register");
  return null;
}
