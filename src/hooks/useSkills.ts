import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addUserSkill, getUserSkills, listSkills, removeUserSkill, skillKeys } from "@/lib/api/skills";
import { describeError } from "@/lib/supabase";
import type { SkillType } from "@/lib/database.types";

export function useSkillCatalog() {
  return useQuery({ queryKey: skillKeys.all, queryFn: listSkills, staleTime: 5 * 60_000 });
}

export function useUserSkills(userId: string | undefined) {
  return useQuery({
    queryKey: skillKeys.forUser(userId),
    queryFn: () => getUserSkills(userId!),
    enabled: Boolean(userId),
  });
}

export function useAddUserSkill(userId: string | undefined) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ skillId, type }: { skillId: number; type: SkillType }) => addUserSkill(userId!, skillId, type),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: skillKeys.forUser(userId) }),
    onError: (error) => toast.error(describeError(error)),
  });
}

export function useRemoveUserSkill(userId: string | undefined) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userSkillId: number) => removeUserSkill(userSkillId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: skillKeys.forUser(userId) }),
    onError: (error) => toast.error(describeError(error)),
  });
}
