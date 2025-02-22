import { ReactNode } from "react";

import TextInput from "../TextInput/TextInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/Button.tsx";

import MingcuteSearch3Line from "../../icons/MingcuteSearch3Line.tsx";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine.tsx";
import MingcuteSunLine from "../../icons/MingcuteSunLine.tsx";

import styles from "./Toolbar.module.css";

function Toolbar(): ReactNode {
  const theme = "light";

  return (
    <div className={styles.toolbar}>
      <TextInput
        placeholder="Search Dream..."
        className={styles.input}
        suffixIcon={<MingcuteSearch3Line />}
      />
      <Select
        options={[
          { value: "all", label: "All" },
          { value: "good", label: "Good" },
          { value: "bad", label: "Bad" },
        ]}
      />
      <Button variant="solid" size="medium" shape="square">
        {theme === "light" ? <MingcuteMoonLine /> : <MingcuteSunLine />}
      </Button>
    </div>
  );
}

export default Toolbar;
