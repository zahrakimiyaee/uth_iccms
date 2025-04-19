import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Path from "path";

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"~palet": Path.resolve(__dirname, "src/assets/sass/palet.scss"),
		},
	},
	plugins: [react()],
});
