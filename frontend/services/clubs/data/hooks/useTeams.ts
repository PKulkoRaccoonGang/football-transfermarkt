import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { fetchTeams } from "../api/teamsApi";
import { useStore } from "../store";

interface Team {
  id: number;
  name: string;
}

export const useTeams = (
  options?: UseQueryOptions<Team[], Error, Team[], string[]>
) => {
  const { setTeams } = useStore();

  return useQuery<Team[], Error, Team[], string[]>({
    queryKey: ["teams"],
    queryFn: fetchTeams,
    onSuccess: (data) => {
      setTeams(data);
    },
    ...options,
  });
};
