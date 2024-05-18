import * as fs from "fs";
import * as path from "path";

import generateColorTheme, { ThemeOptions } from "./color-theme";
import { Palette, PaletteProps, StandardRing } from "./color/palette";
import generateIcons from "./icons";

function buildColorTheme(name: string, jsonFilename: string, config: PaletteProps & ThemeOptions) {
	const palette = new Palette(config);
	console.log(name, "Grades"), palette.print();
	fs.writeFileSync(
		path.join(__dirname, "../themes", jsonFilename + ".json"),
		JSON.stringify(generateColorTheme(name, palette, config), null, "\t")
	);
}

buildColorTheme("Ellie", "ellie", {
	fg: { luma: [6, 90], chroma: 2, hue: 24 },
	bg: { luma: [6, 90], chroma: 2, hue: 24 },
	accent: { luma: [6, 90], chroma: [42, 36], hue: 339 },
	coAccent: { luma: [6, 90], chroma: [42, 36], hue: 304 },
	contra: { luma: [6, 90], chroma: 40, hue: 67 },
	ring: { chroma: [32, 56] },
	bracketGrades: ["violet", "rose", "orange", "violet", "rose", "orange"],
	...StandardRing(339)
});
buildColorTheme("Ellie Light", "ellie-light", {
	fg: { power: 1, luma: [96, 10], chroma: [12, 4], hue: 307 },
	bg: { power: 1, luma: [96, 10], chroma: [7, 7], hue: 307 },
	keyword: { power: 1, luma: [92, 42], chroma: 54, hue: 339 },
	accent: { power: 1, luma: [92, 30], chroma: [36, 54], hue: 339 },
	coAccent: { power: 1, luma: [92, 30], chroma: [36, 60], hue: 304 },
	contra: { power: 1, luma: [92, 30], chroma: [40, 60], hue: 67 },
	ring: { chroma: [32, 56] },
	bracketGrades: ["violet", "rose", "orange", "violet", "rose", "orange"],
	...StandardRing(339)
});

fs.writeFileSync(
	path.join(__dirname, "../icons/theme.json"),
	JSON.stringify(generateIcons(), null, "\t")
);
