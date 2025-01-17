import { useQuery } from "@tanstack/react-query";

import { fetchTeamById } from "../api/teamsApi";
import { useStore } from "../store";

interface Team {
  id: number;
  name: string;
}

export const useTeam = (
  id: number,
) => {
  const { setTeam } = useStore();

  return useQuery<Team[], Error, Team[], string[]>({
    queryKey: ["team"],
    queryFn: () => fetchTeamById(id),
    onSuccess: (data) => {
      setTeam(data);
    },
  });
};
