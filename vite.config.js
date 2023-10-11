import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgrPlugin from "vite-plugin-svgr";

// see all documentation here https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build change as your need
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
  },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
  esbuild: {
    jsxInject: `import React from 'react';`, // Asegura que React esté disponible en los archivos JSX
    loaders: {
      ".js": "jsx", // Habilita JSX para extensiones .js
      ".jsx": "jsx", // Habilita JSX para extensiones .jsx
    },
  },
});
