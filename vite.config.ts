import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
// https://vitejs.dev/config/
export default defineConfig({
	// plugins: [react()],
	plugins: [react(),cssInjectedByJsPlugin()],
	build: {
    cssCodeSplit:false,
		rollupOptions: {
			input: "src/main.tsx",
		},
    lib:{
      fileName:'my-lib',
      entry:'my-lib.js',
      name:'my-lib'
    }
	},
  base:'./',
  define:{
    'process.env':{}
  }
});
