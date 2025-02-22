import { ReactNode } from "react";

import TextInput from "../TextInput/TextInput.tsx";

import MingcuteSearch3Line from "../../icons/MingcuteSearch3Line.tsx";

import styles from "./Toolbar.module.css";

function Toolbar(): ReactNode {
  return (
    <div className={styles.toolbar}>
      <TextInput
        placeholder="Search Dream..."
        suffixIcon={<MingcuteSearch3Line />}
      />
    </div>
  );
}

export default Toolbar;
