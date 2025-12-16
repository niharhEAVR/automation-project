
import { Button } from "@/components/ui/button";
import { requireAuth } from "@/lib/auth-utils";
import { authClient } from "@/lib/auth-client";
import { caller } from "@/trpc/server";
import LogoutButton from "./logout";


export default async function Home() {


  await requireAuth();

  const data = await caller.getUsers();

  return (
    <div className="h-screen w-screen bg-slate-600 text-white">
      Protected server component.
      {JSON.stringify(data)}
      <LogoutButton/>
    </div>
  );
}
