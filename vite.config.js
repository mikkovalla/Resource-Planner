import {
    defineConfig
} from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp'
import macrosPlugin from "vite-plugin-babel-macros"
import reactCssModule from "vite-plugin-react-css-modules";


export default defineConfig({
    plugins: [
        react(),
        vitePluginImp({
            optimize: true,
            libList: [{
                libName: 'antd',
                libDirectory: 'es',
                style: (name) => `antd/es/${name}/style`
            }]
        })
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            }
        },
    }
});