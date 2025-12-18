"use client";

import { Button } from "@/components/ui/button";
import LogoutButton from "./logout";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function HomeClient() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(
    trpc.getWorkflows.queryOptions()
  );

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        toast.success("Workflow creation triggered")
      },
    })
  );

  const testAi = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess: (data) => {
        toast.success("AI Response: " + data.message)
      },
    })
  );

  return (
    <div className="h-screen w-screen bg-slate-600 text-white">
      <div>
        {isLoading ? "Loading..." : JSON.stringify(data)}
      </div>

      <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>Test AI</Button>

      <Button
        disabled={create.isPending}
        onClick={() => create.mutate()}
      >
        Create Workflow
      </Button>

      <LogoutButton />
    </div>
  );
}
