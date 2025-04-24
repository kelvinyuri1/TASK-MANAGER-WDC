import { useQuery } from "@tanstack/react-query";
import { API } from "../configs/api";

export function useQueryUser() {
  const query = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      return API.get("/user");
    },
  });

  return {
    ...query,
    data: query.data?.data,
    refetchQueryUser: query.refetch,

  }
}
