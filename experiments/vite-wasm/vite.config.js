import { defineConfig } from "vite";

export default defineConfig({
    plugins: [],
    build: {
        target: "esnext",
        rollupOptions: {
            output: {
                manualChunks: {},
            },
        },
        // chunkSizeWarningLimit: 600,
    },
});
