import * as fs from "fs";
import * as path from "path";

import generateColorTheme, { ThemeOptions } from "./color-theme";
import { Palette, PaletteProps, StandardRing } from "./color/palette";
import generateIcons from "./icons";
import { buildWtTheme } from "./color/wt-theme";

setTimeout(main, 0);

const THEME_ELLIE: PaletteProps & ThemeOptions = {
	fg: { luma: [20, 90], chroma: 2, hue: 24 },
	bg: { luma: [20, 90], chroma: 2, hue: 24 },
	accent: { luma: [16, 90], chroma: [42, 32], hue: 340 },
	coAccent: { luma: [16, 90], chroma: [42, 32], hue: 304 },
	contra: { luma: [16, 90], chroma: [42, 32], hue: 67 },
	ring: { chroma: [32, 48] },
	bracketGrades: ["violet", "magenta", "rose", "red", "orange", "yellow"],
	...StandardRing(339)
};

const THEME_ELLIE_LIGHT: PaletteProps & ThemeOptions = {
	fg: { luma: [98, 16], chroma: [8, 4], hue: 350 },
	bg: { luma: [98, 16], chroma: [4, 2], hue: 350 },
	keyword: { luma: [92, 48], chroma: 54, hue: 339 },
	accent: { luma: [92, 48], chroma: [36, 54], hue: 340 },
	coAccent: { luma: [92, 48], chroma: [36, 60], hue: 304 },
	contra: { luma: [92, 48], chroma: [40, 60], hue: 67 },
	ring: { chroma: [32, 48] },
	bracketGrades: ["violet", "magenta", "rose", "red", "orange", "yellow"],
	...StandardRing(339)
};

function main() {
	let subCommand = process.argv[2];
	switch (subCommand) {
		case "wt": {
			buildWt("Ellie", THEME_ELLIE);
			return;
		}
		default: {
			buildMain();
			return;
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function buildWt(name: string, config: PaletteProps & ThemeOptions) {
	const palette = new Palette(config);
	buildWtTheme(name, palette);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function buildColorTheme(name: string, jsonFilename: string, config: PaletteProps & ThemeOptions) {
	const palette = new Palette(config);
	console.log(name, "Grades"), palette.print();
	fs.writeFileSync(
		path.join(__dirname, "../themes", jsonFilename + ".json"),
		JSON.stringify(generateColorTheme(name, palette, config), null, "\t")
	);
}

function buildMain() {
	buildColorTheme("Ellie", "ellie", THEME_ELLIE);
	buildColorTheme("Ellie Light", "ellie-light", THEME_ELLIE_LIGHT);
	fs.writeFileSync(
		path.join(__dirname, "../icons/theme.json"),
		JSON.stringify(generateIcons(), null, "\t")
	);
}
