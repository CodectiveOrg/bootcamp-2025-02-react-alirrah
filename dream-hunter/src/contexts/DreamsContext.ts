import { createContext } from "react";

import { Dream } from "../types/dream.ts";

type DreamsContextValue = {
  filteredDreams: Dream[];
  createDream: (dream: Dream) => void;
  editDream: (dream: Dream) => void;
  removeDream: (id: string) => void;
};

export const DreamsContext = createContext<DreamsContextValue>({
  filteredDreams: [],
  createDream: () => {},
  editDream: () => {},
  removeDream: () => {},
});
