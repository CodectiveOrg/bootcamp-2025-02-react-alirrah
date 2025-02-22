import { ReactNode } from "react";

import Header from "./components/Header/Header.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";

import styles from "./App.module.css";

function App(): ReactNode {
  return (
    <>
      <Header />
      <main>
        <Toolbar />
      </main>
    </>
  );
}

export default App;
