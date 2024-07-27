import { Color } from "./color";
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

		red: palette.rose[5],
		yellow: palette.yellow[6],
		green: palette.chartreuse[5],
		cyan: palette.cyan[5],
		blue: palette.blue[5],
		purple: palette.violet[5],

		brightRed: palette.rose[9],
		brightYellow: palette.yellow[9],
		brightGreen: palette.chartreuse[9],
		brightCyan: palette.cyan[9],
		brightBlue: palette.blue[9],
		brightPurple: palette.violet[9]
	};

	showPreCurrView([
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
	]);

	showBgFgPreview();

	const wtThemeFinal = {
		name,
		...Object.fromEntries(Array.from(Object.entries(wtTheme)).map(([k, v]) => [k, v.hex()]))
	};
	console.log(JSON.stringify(wtThemeFinal, null, 4));
}

function showBgFgPreview() {
	for (let row = 0; row < 16; row++) {
		let s = "  ";
		for (let col = 0; col < 8; col++) {
			if (s) s += " ";
			s += `\x1b[48;5;${col};38;5;${row}m gYw \x1B[0m`;
		}
		console.log(s);
	}
}

function showPreCurrView(colors: Color[]) {
	for (let i = 0; i < 2; i++) {
		let s = "  ";
		for (let j = 0; j < 8; j++) {
			let colorID = i * 8 + j;
			let tc = colors[colorID];
			if (j > 0) s += " ";
			const fgPrev = j == 0 ? `97` : `30`;
			s += `\x1B[${fgPrev};48;5;${colorID}m PREV \x1B[0m`;
			s += tc.ansiBlock("CURR");
		}
		console.log(s);
	}
}
