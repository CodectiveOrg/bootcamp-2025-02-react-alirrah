import { PropsWithChildren, ReactNode, useState } from "react";

import { FiltersContext } from "../contexts/FiltersContext.ts";

import { Filters } from "../types/filters.ts";

type Props = PropsWithChildren;

export default function FiltersProvider({ children }: Props): ReactNode {
  const [filters, setFilters] = useState<Filters>({
    query: "",
    type: "all",
  });

  const updateFilters = (key: keyof Filters, value: string) => {
    setFilters((old) => {
      return { ...old, [key]: value };
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        updateFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
