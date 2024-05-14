// export function () => pokemonLoader({ params }) {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + params.pokemon);
//   return { pokemon: await res.json() };
// }

import { queryOptions } from "@tanstack/react-query";

export const pokemonLoaderQuery = (id) =>
  queryOptions({
    queryKey: ["pokemon", id],
    queryFn: async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
      return res.json();
    },
  });

export const pokemonLoader =
  (queryClient) =>
  async ({ params }) => {
    const pokemon = await queryClient.ensureQueryData(pokemonLoaderQuery(params.pokemon));
    return { pokemon };
  };
