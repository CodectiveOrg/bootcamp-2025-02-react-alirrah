import {
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { DREAMS_LOCAL_STORAGE_KEY } from "../constants/LocalStorageKeys.ts";

import { FiltersContext } from "../contexts/FiltersContext.ts";
import { DreamsContext } from "../contexts/DreamsContext.ts";

import { Dream } from "../types/dream.ts";
import { Vibe } from "../types/vibe.ts";

type Props = PropsWithChildren;

export default function DreamsProvider({ children }: Props): ReactNode {
  const { filters } = useContext(FiltersContext);

  const [dreams, setDreams] = useState<Dream[]>(loadDreamsInitialState);
  const [filteredDreams, setFilteredDreams] = useState<Dream[]>(
    loadDreamsInitialState,
  );

  useEffect(() => {
    localStorage.setItem(DREAMS_LOCAL_STORAGE_KEY, JSON.stringify(dreams));
  }, [dreams]);

  useEffect(() => {
    setFilteredDreams(
      dreams.filter(
        (dream) =>
          doesInclude(dream, filters.query.trim()) &&
          doesVibeMatch(dream.vibe, filters.type),
      ),
    );
  }, [dreams, filters]);

  const createDream = (dream: Dream): void => {
    setDreams((old) => [...old, { ...dream }]);
  };

  const editDream = (dream: Dream): void => {
    setDreams((old) => old.map((x) => (x.id === dream.id ? { ...dream } : x)));
  };

  const removeDream = (id: string): void => {
    setDreams((old) => old.filter((x) => x.id !== id));
  };

  return (
    <DreamsContext.Provider
      value={{
        filteredDreams,
        createDream,
        editDream,
        removeDream,
      }}
    >
      {children}
    </DreamsContext.Provider>
  );
}

function loadDreamsInitialState(): Dream[] {
  const item = localStorage.getItem(DREAMS_LOCAL_STORAGE_KEY);

  if (!item) {
    return [];
  }

  return JSON.parse(item);
}

function doesInclude(dream: Dream, query: string): boolean {
  if (query === "") {
    return true;
  }

  return (
    dream.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
    dream.description.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
}

function doesVibeMatch(dreamVibe: Vibe, vibe: "all" | "good" | "bad"): boolean {
  if (vibe === "all") {
    return true;
  }

  return dreamVibe === vibe;
}
