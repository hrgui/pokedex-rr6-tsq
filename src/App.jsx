import { RouterProvider, createHashRouter, redirect } from "react-router-dom";
import "./App.css";
import ErrorPage from "./error-page";
import { Pokemon } from "./Pokemon";
import { pokemonLoader } from "./PokemonLoader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Root } from "./Root";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: ({ params }) => {
      if (!params.pokemon) {
        return redirect("/1");
      }
      return null;
    },
    children: [
      {
        path: "/:pokemon",
        element: <Pokemon />,
        errorElement: <ErrorPage />,
        loader: pokemonLoader(queryClient),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
