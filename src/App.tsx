import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeCustomProvider } from "./shared/contexts";

export const App = () => {
  return(
    <ThemeCustomProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeCustomProvider>
  );
}