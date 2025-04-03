import { defineConfig } from 'vite';

export default defineConfig({
    base: "./", // Ensures relative paths in the build
    build: {
        rollupOptions: {
            input: {
                main: './index.html'
            }
        }
    },
    publicDir: 'src' // Tells Vite to copy src folder to dist
});
