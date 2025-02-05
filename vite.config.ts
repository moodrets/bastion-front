import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig(({ mode }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        base: env.VITE_BASE_URL,
        plugins: [vue()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        server: {
            port: env.VITE_PORT,
        },
    };
});
