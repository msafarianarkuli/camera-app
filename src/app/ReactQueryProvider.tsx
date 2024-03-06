"use client";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

//usage
// const [search, setSearch] = useState();
// const queryClient = useQueryClient();
// const { data, isLoading } = useQuery({
//   queryFn: () =>
//     fetch(`https://jsonplaceholder.typicode.com/todos/${search}`),
//   queryKey: ["todos", { search }], //we send search here to force react query to update when we search
//   // staleTime: Infinity,//this will make the data to use from cache and dont request again
// });

// const { mutate, mutateAsync } = useMutation({
//   mutationFn: () =>
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }),
//   onSuccess: () => {
//     queryClient.invalidateQueries({ queryKey: ["todos"] });
//   },
// });
