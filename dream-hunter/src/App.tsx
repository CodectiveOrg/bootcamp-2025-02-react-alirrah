import { ReactNode } from "react";

import Header from "./components/Header/Header.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Result from "./components/Result/Result.tsx";
import Create from "./components/Create/Create.tsx";
import Toaster from "./components/Toaster/Toaster.tsx";

import ThemeProvider from "./providers/ThemeProvider.tsx";
import FiltersProvider from "./providers/FiltersProvider.tsx";
import DreamsProvider from "./providers/DreamsProvider.tsx";

function App(): ReactNode {
  return (
    <ThemeProvider>
      <FiltersProvider>
        <DreamsProvider>
          <Header />
          <main>
            <Toolbar />
            <Result />
          </main>
          <Create />
          <Toaster />
        </DreamsProvider>
      </FiltersProvider>
    </ThemeProvider>
  );
}

export default App;
