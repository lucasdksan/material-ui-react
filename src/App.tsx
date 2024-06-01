import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { DrawerCustomProvider, ThemeCustomProvider } from "./shared/contexts";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/global.styles.css";

export const App = () => {
  return(
    <DrawerCustomProvider>
      <ThemeCustomProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeCustomProvider>
    </DrawerCustomProvider>
  );
}