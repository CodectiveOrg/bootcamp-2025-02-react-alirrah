import { createContext } from "react";

import { Filters } from "../types/filters.ts";

type FiltersContextValue = {
  filters: Filters;
  updateFilters: (key: keyof Filters, value: string) => void;
};

export const FiltersContext = createContext<FiltersContextValue>({
  filters: { query: "", type: "all" },
  updateFilters: () => {},
});
