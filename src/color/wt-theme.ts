import { Palette } from "./palette";

export function buildWtTheme(name: string, palette: Palette) {
	const wtTheme = {
		background: palette.bg[0],
		foreground: palette.fg[8],
		cursorColor: palette.accent[10],
		selectionBackground: palette.accent[7].mix(0.5, palette.bg[0]),

		black: palette.bg[0],
		brightBlack: palette.bg[4],
		white: palette.fg[8],
		brightWhite: palette.fg[10],

		red: palette.rose[6],
		yellow: palette.yellow[6],
		green: palette.chartreuse[6],
		cyan: palette.cyan[6],
		blue: palette.blue[6],
		purple: palette.violet[6],

		brightRed: palette.rose[9],
		brightYellow: palette.yellow[9],
		brightGreen: palette.chartreuse[9],
		brightCyan: palette.cyan[9],
		brightBlue: palette.blue[9],
		brightPurple: palette.violet[9]
	};

	const colorIdMap = [
		wtTheme.black,
		wtTheme.red,
		wtTheme.green,
		wtTheme.yellow,
		wtTheme.blue,
		wtTheme.purple,
		wtTheme.cyan,
		wtTheme.white,
		wtTheme.brightBlack,
		wtTheme.brightRed,
		wtTheme.brightGreen,
		wtTheme.brightYellow,
		wtTheme.brightBlue,
		wtTheme.brightPurple,
		wtTheme.brightCyan,
		wtTheme.brightWhite
	];

	for (let i = 0; i < 2; i++) {
		let s = "";
		for (let j = 0; j < 8; j++) {
			let colorID = i * 8 + j;
			let tc = colorIdMap[colorID];
			if (j > 0) s += " ";
			const fgPrev = j == 0 ? `97` : `30`;
			s += `\u001B[${fgPrev};48;5;${colorID}m PREV \u001B[0m`;
			s += tc.ansiBlock("CURR");
		}
		console.log(s);
	}

	const wtThemeFinal = {
		name,
		...Object.fromEntries(Array.from(Object.entries(wtTheme)).map(([k, v]) => [k, v.hex()]))
	};
	console.log(JSON.stringify(wtThemeFinal, null, 4));
}
