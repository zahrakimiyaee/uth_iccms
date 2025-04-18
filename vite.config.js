import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Path from "path";

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"~color-palet": Path.resolve(
				__dirname,
				"src/assets/sass/color-palet.scss"
			),
		},
	},
	plugins: [react()],
});
