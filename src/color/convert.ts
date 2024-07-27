export type ColorChannels = [number, number, number];

/// OkLab functions
export function okLabToSRgb([L, A, B]: ColorChannels): ColorChannels {
	let l = L + A * +0.3963377774 + B * +0.2158037573;
	let m = L + A * -0.1055613458 + B * -0.0638541728;
	let s = L + A * -0.0894841775 + B * -1.291485548;

	// The ** operator here cubes; same as l_*l_*l_ in the C++ example:
	l = l ** 3;
	m = m ** 3;
	s = s ** 3;

	let r = l * +4.0767416621 + m * -3.3077115913 + s * +0.2309699292;
	let g = l * -1.2684380046 + m * +2.6097574011 + s * -0.3413193965;
	let b = l * -0.0041960863 + m * -0.7034186147 + s * +1.707614701;

	// Convert to 0..255 range
	r = 255 * rgbGamma(r);
	g = 255 * rgbGamma(g);
	b = 255 * rgbGamma(b);

	return [r, g, b];
}

export function sRgbToOkLab([r, g, b]: ColorChannels): ColorChannels {
	r = rgbDeGamma(r / 255);
	g = rgbDeGamma(g / 255);
	b = rgbDeGamma(b / 255);

	// This is the Oklab math:
	var l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
	var m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
	var s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

	l = Math.cbrt(l);
	m = Math.cbrt(m);
	s = Math.cbrt(s);

	return [
		l * +0.2104542553 + m * +0.793617785 + s * -0.0040720468, // L
		l * +1.9779984951 + m * -2.428592205 + s * +0.4505937099, // A
		l * +0.0259040371 + m * +0.7827717662 + s * -0.808675766 // B
	];
}

function rgbGamma(r: number): number {
	const r1 = r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r;
	return Math.max(0, Math.min(1, r1));
}

function rgbDeGamma(r: number): number {
	return r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
}
