import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html'
            }
        }
    },
    publicDir: 'src' // Tells Vite to copy src folder to dist
});
