import { ReactNode, useContext } from "react";

import TextInput from "../TextInput/TextInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/Button.tsx";

import { FiltersContext } from "../../contexts/FiltersContext.ts";
import { ThemeContext } from "../../contexts/ThemeContext.ts";

import MingcuteSearch3Line from "../../icons/MingcuteSearch3Line.tsx";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine.tsx";
import MingcuteSunLine from "../../icons/MingcuteSunLine.tsx";

import styles from "./Toolbar.module.css";

function Toolbar(): ReactNode {
  const { filters, updateFilters } = useContext(FiltersContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.toolbar}>
      <TextInput
        placeholder="Search Dream..."
        className={styles.input}
        suffixIcon={<MingcuteSearch3Line />}
        value={filters.query}
        onChange={(e) => updateFilters("query", e.currentTarget.value)}
      />
      <Select
        options={[
          { value: "all", label: "All" },
          { value: "good", label: "Good" },
          { value: "bad", label: "Bad" },
        ]}
        value={filters.type}
        onChange={(e) => updateFilters("type", e.currentTarget.value)}
      />
      <Button
        variant="solid"
        size="medium"
        shape="square"
        onClick={toggleTheme}
      >
        {theme === "light" ? <MingcuteMoonLine /> : <MingcuteSunLine />}
      </Button>
    </div>
  );
}

export default Toolbar;
