import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  esbuild: {
    jsxInject: `import React from 'react';`,
    jsxFactory: "React.createElement",
  },
});
