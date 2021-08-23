import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/practice-react-tip-calculator-app/",
  plugins: [reactRefresh(), svgr()],
});
