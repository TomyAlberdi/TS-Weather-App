import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import DataContextComponent from "@/Context/DataContextComponent.tsx";
import { ThemeProvider } from "@/components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <DataContextComponent>
      <App />
    </DataContextComponent>
  </ThemeProvider>
);
