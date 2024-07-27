import * as fs from "fs";
import * as path from "path";

import generateColorTheme, { ThemeOptions } from "./color-theme";
import { Palette, PaletteProps, StandardRing } from "./color/palette";
import generateIcons from "./icons";
import { buildWtTheme } from "./color/wt-theme";

setTimeout(main, 0);

const THEME_ELLIE: PaletteProps & ThemeOptions = {
	fg: { luma: [6, 90], chroma: 2, hue: 24 },
	bg: { luma: [6, 90], chroma: 2, hue: 24 },
	accent: { luma: [6, 90], chroma: [42, 36], hue: 339 },
	coAccent: { luma: [6, 90], chroma: [42, 36], hue: 304 },
	contra: { luma: [6, 90], chroma: 40, hue: 67 },
	ring: { chroma: [32, 56] },
	bracketGrades: ["violet", "rose", "orange", "violet", "rose", "orange"],
	...StandardRing(339)
};

const THEME_ELLIE_LIGHT: PaletteProps & ThemeOptions = {
	fg: { power: 1, luma: [96, 10], chroma: [12, 4], hue: 307 },
	bg: { power: 1, luma: [96, 10], chroma: [7, 7], hue: 307 },
	keyword: { power: 1, luma: [92, 42], chroma: 54, hue: 339 },
	accent: { power: 1, luma: [92, 30], chroma: [36, 54], hue: 339 },
	coAccent: { power: 1, luma: [92, 30], chroma: [36, 60], hue: 304 },
	contra: { power: 1, luma: [92, 30], chroma: [40, 60], hue: 67 },
	ring: { chroma: [32, 56] },
	bracketGrades: ["violet", "rose", "orange", "violet", "rose", "orange"],
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
