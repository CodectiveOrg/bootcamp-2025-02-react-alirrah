import { ReactNode, useContext } from "react";

import { useTranslation } from "react-i18next";

import TextInput from "../TextInput/TextInput.tsx";
import Select from "../Select/Select.tsx";
import LanguageButton from "../LanguageButton/LanguageButton.tsx";
import Button from "../Button/Button.tsx";

import { FiltersContext } from "../../contexts/FiltersContext.ts";
import { ThemeContext } from "../../contexts/ThemeContext.ts";

import MingcuteSearch3Line from "../../icons/MingcuteSearch3Line.tsx";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine.tsx";
import MingcuteSunLine from "../../icons/MingcuteSunLine.tsx";

import styles from "./Toolbar.module.css";

function Toolbar(): ReactNode {
  const { t } = useTranslation();

  const { filters, updateFilters } = useContext(FiltersContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.toolbar}>
      <TextInput
        placeholder={t("toolbar.search.placeholder")}
        className={styles.input}
        suffixIcon={<MingcuteSearch3Line />}
        value={filters.query}
        onChange={(e) => updateFilters("query", e.currentTarget.value)}
      />
      <Select
        options={[
          { value: "all", label: t("dreams.form.vibe.all") },
          { value: "good", label: t("dreams.form.vibe.good") },
          { value: "bad", label: t("dreams.form.vibe.bad") },
        ]}
        value={filters.type}
        onChange={(e) => updateFilters("type", e.currentTarget.value)}
      />
      <LanguageButton />
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
