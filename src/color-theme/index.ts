import { Color } from "../color/color";
import { Palette, PaletteKey } from "../color/palette";

export type ThemeOptions = {
	bracketGrades: PaletteKey[];
};

export default function generateColorTheme(
	themeName: string,
	palette: Palette,
	options: ThemeOptions
) {
	const primaryBg = palette.bg[0];
	const primaryFg = palette.fg[8];
	const border = palette.fg[3];

	// token settings
	const identifier = {
		foreground: primaryFg.hex()
	};
	const property = {
		foreground: palette.contra[8].hex()
	};
	const parameter = {
		fontStyle: "italic",
		foreground: primaryFg.hex()
	};
	const keyword = {
		fontStyle: "bold",
		foreground: palette.keyword[10].hex()
	};
	const weakKeyword = {
		foreground: palette.fg[10].hex()
	};
	const storage = {
		fontStyle: "bold",
		foreground: palette.keyword[10].hex()
	};
	const operator = {
		foreground: palette.accent[10].hex()
	};
	const weakOperator = {
		foreground: palette.contra[6].hex()
	};
	const literal = {
		foreground: palette.coAccent[9].hex()
	};
	const comment = {
		foreground: palette.fg[5].hex()
	};
	const library = {
		foreground: palette.fg[9].hex()
	};
	const quote = {
		fontStyle: "italic",
		foreground: palette.coAccent[7].hex()
	};
	const markdownRaw = {
		foreground: palette.contra[8].hex()
	};
	const declare = {
		foreground: palette.fg[9].hex()
	};
	const method = {
		foreground: palette.fg[9].hex()
	};
	const typeName = {
		foreground: palette.accent[8].hex()
	};
	const namespace = {
		foreground: palette.contra[9].hex()
	};
	const builtInType = {
		foreground: palette.accent[9].hex()
	};
	const constant = {
		foreground: palette.coAccent[9].hex()
	};
	const typeParameter = {
		fontStyle: "italic",
		foreground: palette.contra[8].hex()
	};
	const punctuation = {
		foreground: palette.fg[5].hex()
	};
	const invalid = {
		foreground: palette.red[7].hex()
	};
	const access = {};

	const selectionAlpha = (palette.isDark ? 5 : 3) / 16;
	const highlightAlpha = (palette.isDark ? 4 : 3) / 16;
	const braceHighlightAlpha = (palette.isDark ? 11 : 12) / 16;
	const highlightBorderAlpha = 12 / 16;

	const uiColors = {
		focusBorder: palette.accent[5].hex(),
		foreground: primaryFg.hex(),
		errorForeground: palette.red[6].hex(),
		"editor.background": primaryBg.hex(),
		"editor.foreground": primaryFg.hex(),
		"editor.lineHighlightBackground": palette.bg[1].hex(),
		"editorCursor.foreground": palette.accent[10].hex(),
		"editorLineNumber.foreground": palette.fg[5].hex(),
		"editorCodeLens.foreground": palette.fg[5].hex(),
		"editorActiveLineNumber.foreground": palette.fg[10].hex(),

		"editorHoverWidget.background": primaryBg.hex(),
		"editorHoverWidget.foreground": primaryFg.hex(),

		"editor.selectionBackground": palette.accent[7].alpha(selectionAlpha).hexaa(),
		"editor.inactiveSelectionBackground": palette.bg[7].alpha(selectionAlpha).hexaa(),
		"editor.selectionHighlightBackground": palette.accent[4].alpha(highlightAlpha).hexaa(),
		"editor.wordHighlightBackground": palette.bg[5].alpha(highlightAlpha).hexaa(),
		"editor.wordHighlightStrongBackground": palette.accent[5].alpha(highlightAlpha).hexaa(),
		"editor.findMatchBackground": palette.orange[9].alpha(selectionAlpha).hexaa(),
		"editor.findMatchHighlightBackground": palette.orange[7].alpha(highlightAlpha).hexaa(),
		"editor.findRangeHighlightBackground": palette.bg[4].alpha(highlightAlpha).hexaa(),
		"editorLink.activeForeground": palette.accent[10].hex(),
		"editorBracketMatch.background": palette.bg[4].alpha(highlightAlpha).hexaa(),
		"editorBracketMatch.border": palette.fg[4].alpha(highlightBorderAlpha).hexaa(),

		"minimap.findMatchHighlight": palette.orange[7].alpha(highlightAlpha).hexaa(),
		"minimap.selectionHighlight": palette.accent[7].alpha(selectionAlpha).hexaa(),

		"editorError.foreground": palette.red[8].hex(),
		"editorWarning.foreground": palette.yellow[8].hex(),
		"editorInfo.foreground": palette.blue[8].hex(),
		"editorHint.foreground": palette.blue[8].hex(),

		"notification.errorBackground": palette.red[4].hex(),
		"notification.errorForeground": palette.red[8].hex(),
		"notification.infoBackground": palette.blue[4].hex(),
		"notification.infoForeground": palette.blue[8].hex(),
		"notification.warningBackground": palette.yellow[4].hex(),
		"notification.warningForeground": palette.yellow[8].hex(),

		"debugToolBar.background": palette.bg[2].hexaa(),
		"editorWidget.background": palette.bg[1].hexaa(),
		"editorSuggestWidget.background": primaryBg.hexaa(),

		"editorGroup.border": palette.fg[1].hex(),
		"editorGroupHeader.noTabsBackground": primaryBg.hex(),
		"editorGroupHeader.tabsBackground": primaryBg.hex(),
		"tab.border": primaryBg.hex(),
		"tab.inactiveBackground": primaryBg.hex(),
		"tab.inactiveForeground": palette.fg[7].hex(),
		"tab.activeBackground": primaryBg.hex(),
		"tab.activeForeground": palette.fg[10].hex(),
		"tab.hoverBackground": palette.bg[1].alpha(0.5).hexaa(),
		"tab.activeBorder": palette.accent[8].hex(),

		"peekView.border": palette.fg[2].hex(),
		"peekViewTitle.background": palette.bg[1].hexaa(),
		"peekViewEditor.background": palette.bg[3].alpha(1 / 6).hexaa(),

		"scrollbar.shadow": Color.rgb(0, 0, 0).alpha(0.1).hexaa(),
		"scrollbarSlider.background": palette.bg[10].alpha(0.075).hexaa(),
		"scrollbarSlider.activeBackground": palette.bg[10].alpha(0.15).hexaa(),
		"scrollbarSlider.hoverBackground": palette.bg[10].alpha(0.15).hexaa(),

		"editorOverviewRuler.border": "#00000000",
		"editorGutter.modifiedBackground": palette.cyan[4].hex(),
		"editorGutter.addedBackground": palette.green[4].hex(),
		"editorGutter.deletedBackground": palette.red[4].hex(),
		"editorOverviewRuler.modifiedForeground": palette.cyan[10].alpha(0.2).hexaa(),
		"editorOverviewRuler.addedForeground": palette.cyan[10].alpha(0.2).hexaa(),
		"editorOverviewRuler.deletedForeground": palette.cyan[10].alpha(0.2).hexaa(),
		"editorOverviewRuler.infoForeground": palette.blue[5].alpha(0.9).hexaa(),
		"editorOverviewRuler.warningForeground": palette.yellow[5].alpha(0.9).hexaa(),
		"editorOverviewRuler.errorForeground": palette.red[5].alpha(0.9).hexaa(),
		"editorOverviewRuler.findMatchForeground": palette.orange[5].alpha(0.9).hexaa(),
		"editorOverviewRuler.bracketMatchForeground": palette.fg[10].alpha(0.3).hexaa(),
		"editorOverviewRuler.wordHighlightForeground": palette.fg[10].alpha(0.3).hexaa(),
		"editorOverviewRuler.wordHighlightStrongForeground": palette.fg[10].alpha(0.3).hexaa(),
		"diffEditor.removedTextBackground": palette.red[5].alpha(0.15).hexaa(),
		"diffEditor.insertedTextBackground": palette.green[5].alpha(0.1).hexaa(),

		"editorBracketHighlight.foreground1": palette[options.bracketGrades[0]][8]
			.alpha(braceHighlightAlpha)
			.hexaa(),
		"editorBracketHighlight.foreground2": palette[options.bracketGrades[1]][8]
			.alpha(braceHighlightAlpha)
			.hexaa(),
		"editorBracketHighlight.foreground3": palette[options.bracketGrades[2]][8]
			.alpha(braceHighlightAlpha)
			.hexaa(),
		"editorBracketHighlight.foreground4": palette[options.bracketGrades[3]][8]
			.alpha(braceHighlightAlpha)
			.hexaa(),
		"editorBracketHighlight.foreground5": palette[options.bracketGrades[4]][8]
			.alpha(braceHighlightAlpha)
			.hexaa(),
		"editorBracketHighlight.foreground6": palette[options.bracketGrades[5]][8]
			.alpha(braceHighlightAlpha)
			.hexaa(),

		"textLink.foreground": palette.accent[7].hex(),
		"textLink.activeForeground": palette.accent[8].hex(),

		"sideBarTitle.foreground": palette.fg[10].hex(),
		"sideBar.background": palette.bg[1].hex(),
		"sideBarSectionHeader.background": palette.bg[3].hex(),

		"list.highlightForeground": palette.accent[6].hex(),
		"list.hoverBackground": palette.bg[3].alpha(0.33).hexaa(),
		"list.inactiveSelectionBackground": palette.bg[5].alpha(0.3).hexaa(),
		"list.activeSelectionBackground": palette.accent[5].alpha(0.25).hexaa(),
		"list.focusBackground": palette.accent[5].alpha(0.25).hexaa(),
		"list.inactiveSelectionForeground": palette.fg[10].hex(),
		"list.activeSelectionForeground": palette.fg[10].hex(),
		"list.focusForeground": palette.fg[10].hex(),
		"list.errorForeground": palette.red[8].hex(),
		"list.warningForeground": palette.yellow[8].hex(),

		"gitDecoration.modifiedResourceForeground": palette.cyan[8].hex(),
		"gitDecoration.addedResourceForeground": palette.green[8].hex(),
		"gitDecoration.untrackedResourceForeground": palette.green[8].hex(),
		"gitDecoration.deletedResourceForeground": palette.red[8].hex(),
		"gitDecoration.conflictingResourceForeground": palette.red[8].hex(),

		"dropdown.background": palette.bg[1].hex(),
		"dropdown.border": border.hex(),
		"dropdown.foreground": palette.fg[8].hex(),

		"input.background": palette.bg[0].hex(),
		"input.border": border.hex(),
		"input.foreground": palette.fg[8].hex(),
		"input.placeholderForeground": palette.fg[5].hex(),
		"inputOption.activeBorder": palette.accent[6].hex(),

		"button.background": palette.accent[palette.absGrade(6)].hex(),
		"button.foreground": palette.fg[palette.absGrade(10)].hex(),
		"button.hoverBackground": palette.accent[palette.absGrade(7)].hex(),
		"badge.background": palette.accent[palette.absGrade(4)].hex(),
		"badge.foreground": palette.fg[palette.absGrade(10)].hex(),
		"activityBarBadge.background": palette.accent[palette.absGrade(4)].hex(),
		"activityBarBadge.foreground": palette.fg[palette.absGrade(10)].hex(),
		"activityBar.background": palette.bg[2].hex(),
		"activityBar.foreground": palette.fg[9].hex(),
		"activityBar.inactiveForeground": palette.fg[5].hex(),

		"statusBar.background": palette.bg[2].hex(),
		"statusBar.foreground": primaryFg.hex(),
		"statusBar.noFolderBackground": palette.bg[2].hex(),
		"statusBar.noFolderForeground": primaryFg.hex(),
		"statusBar.debuggingBackground": palette.bg[2].hex(),
		"statusBar.debuggingForeground": primaryFg.hex(),

		"statusBarItem.hoverBackground": palette.bg[3].hexaa(),
		"statusBarItem.remoteBackground": palette.bg[2].hex(),
		"statusBarItem.remoteForeground": palette.fg[8].hex(),
		"statusBarItem.remoteHoverBackground": palette.accent[8].alpha(0.25).hexaa(),
		"statusBarItem.remoteHoverForeground": palette.fg[10].hex(),
		"statusBarItem.errorBackground": palette.red[4].hex(),
		"statusBarItem.errorForeground": palette.fg[8].hex(),
		"statusBarItem.errorHoverBackground": palette.red[8].alpha(0.25).hexaa(),
		"statusBarItem.errorHoverForeground": palette.fg[10].hex(),
		"statusBarItem.warningBackground": palette.yellow[4].hex(),
		"statusBarItem.warningForeground": palette.fg[8].hex(),
		"statusBarItem.warningHoverBackground": palette.yellow[8].alpha(0.25).hexaa(),
		"statusBarItem.warningHoverForeground": palette.fg[10].hex(),

		"panel.border": border.hex(),
		"panelTitle.activeBorder": palette.accent[5].hex(),

		"titleBar.activeBackground": (palette.isDark ? palette.bg[2] : palette.fg[7]).hex(),
		"titleBar.activeForeground": (palette.isDark ? palette.fg[9] : palette.bg[0]).hex(),
		"titleBar.inactiveBackground": (palette.isDark ? palette.bg[2] : palette.fg[6]).hex(),
		"titleBar.inactiveForeground": (palette.isDark ? palette.fg[6] : palette.bg[1]).hex(),

		"breadcrumb.foreground": comment.foreground,
		"breadcrumb.focusForeground": quote.foreground,
		"breadcrumb.activeSelectionForeground": quote.foreground,
		"breadcrumbPicker.background": palette.bg[1].hex(),

		"terminal.background": palette.bg[0].hex(),
		"terminal.foreground": palette.fg[8].hex(),
		"terminal.cursorColor": palette.accent[10].hex(),
		"terminal.selectionBackground": palette.accent[7].mix(0.5, palette.bg[0]).hex(),

		"terminal.ansiBlack": palette.bg[0].hex(),
		"terminal.ansiBrightBlack": palette.bg[4].hex(),
		"terminal.ansiWhite": palette.fg[8].hex(),
		"terminal.ansiBrightWhite": palette.fg[10].hex(),

		"terminal.ansiRed": palette.red[5].hex(),
		"terminal.ansiYellow": palette.yellow[6].hex(),
		"terminal.ansiGreen": palette.green[5].hex(),
		"terminal.ansiCyan": palette.cyan[5].hex(),
		"terminal.ansiBlue": palette.blue[5].hex(),
		"terminal.ansiMagenta": palette.violet[5].hex(),

		"terminal.ansiBrightRed": palette.red[9].hex(),
		"terminal.ansiBrightYellow": palette.yellow[9].hex(),
		"terminal.ansiBrightGreen": palette.green[9].hex(),
		"terminal.ansiBrightCyan": palette.cyan[9].hex(),
		"terminal.ansiBrightBlue": palette.blue[9].hex(),
		"terminal.ansiBrightMagenta": palette.violet[9].hex()
	};

	const tokenColors = [
		{
			name: "Identifier",
			scope: [
				"variable",
				"meta.definition.variable.name",
				"support.variable",
				"variable.other.readwrite",
				"variable.other.constant",
				"variable.other.readonly"
			],
			settings: identifier
		},
		{
			name: "Parameter",
			scope: ["variable.parameter", "variable.other.local", "variable.other.constant"],
			settings: parameter
		},
		{
			name: "Member Access",
			scope: ["variable.other.property", "variable.other.constant.property"],
			settings: property
		},
		{
			name: "Object keys, TS grammar specific",
			scope: ["meta.object-literal.key", "meta.object-literal.key entity.name.function"],
			settings: identifier
		},
		{
			name: "Comment",
			scope: ["comment", "punctuation.comment", "punctuation.definition.comment"],
			settings: comment
		},
		{
			name: "Operator",
			scope: ["keyword.operator"],
			settings: operator
		},
		{
			name: "Punctuation",
			scope: [
				"punctuation",
				"delimiter",
				"bracket",
				"brace",
				"paren",
				"delimiter.tag",
				"punctuation.tag",
				"tag.html",
				"tag.xml",
				"meta.property-value punctuation.separator.key-value",
				"punctuation.definition.metadata.md",
				"string.link.md",
				"meta.brace"
			],
			settings: punctuation
		},
		{
			name: "JavaScript string interpolation ${}",
			scope: [
				"punctuation.definition.template-expression.begin.js",
				"punctuation.definition.template-expression.begin.ts",
				"punctuation.definition.template-expression.end.ts",
				"punctuation.definition.template-expression.end.js",
				"punctuation.section.embedded.begin.metatag.php",
				"punctuation.section.embedded.end.metatag.php",
				"punctuation.definition.typeparameters"
			],
			settings: weakOperator
		},
		{
			name: "String",
			scope: [
				"string",
				"meta.property-value.string",
				"support.constant.property-value.string",
				"meta.structure.dictionary.value.json string.quoted.double.json",
				"meta.structure.dictionary.json string.quoted.double.json",
				"meta.preprocessor string"
			],
			settings: quote
		},
		{
			scope: ["meta.template.expression.ts"],
			settings: { fontStyle: "" }
		},
		{
			name: "Primitive Literals",
			scope: [
				"constant.numeric",
				"constant.dec.numeric",
				"constant.hex.numeric",
				"meta.property-value.numeric",
				"support.constant.property-value.numeric",
				"meta.property-value.color",
				"support.constant.property-value.color",
				"constant.language"
			],
			settings: literal
		},
		{
			name: "Namespace",
			scope: ["entity.name.namespace", "entity.name.type.module"],
			settings: namespace
		},
		{
			name: "Type name",
			scope: ["entity.name.type"],
			settings: typeName
		},
		{
			name: "Built-in type name",
			scope: ["support.type"],
			settings: builtInType
		},
		{
			name: "Type parameter",
			scope: ["entity.name.type.parameter"],
			settings: typeParameter
		},
		{
			name: "Constant",
			scope: ["variable.other.constant"],
			settings: constant
		},
		{
			name: "User names",
			scope: [
				"constant.character",
				"constant.other",
				"entity.name",
				"entity.name.class",
				"entity.name.function",
				"entity.other.inherited-class",
				"entity.other.attribute-name",
				"entity.other.attribute-name",
				"entity.other.attribute-name.html",
				"support.type.property-name",
				"string.key",
				"entity.name.tag.table",
				"meta.structure.dictionary.json string.quoted.double.json"
			],
			settings: declare
		},
		{
			name: "Methods",
			scope: ["entity.name.function.member"],
			settings: method
		},
		{
			name: "Weak Keyword",
			scope: ["variable.language.this"],
			settings: weakKeyword
		},
		{
			name: "Keyword",
			scope: [
				"keyword",
				"meta.property-value.keyword",
				"support.constant.property-value.keyword",
				"meta.preprocessor.keyword",
				"keyword.other.use",
				"keyword.other.function.use",
				"keyword.other.namespace",
				"keyword.other.new",
				"keyword.other.special-method",
				"keyword.other.unit",
				"keyword.other.use-as"
			],
			settings: keyword
		},
		{
			name: "Storage",
			scope: [
				"storage",
				"storage.type",
				"storage.type.ts",
				"storage.type.var.ts",
				"storage.type.js",
				"storage.type.var.js",
				"storage.type.const.ts",
				"storage.type.let.ts",
				"storage.type.let.js",
				"storage.type.const.js",
				"entity.name.tag"
			],
			settings: storage
		},
		{
			name: "Pointer, access, etc",
			scope: ["meta.ptr", "meta.pointer", "meta.address", "meta.array.cxx"],
			settings: access
		},
		{
			name: "Preprocessor",
			scope: "meta.preprocessor",
			settings: declare
		},

		{
			name: "Library",
			scope: ["support.class", "support.function", "support.constant"],
			settings: library
		},
		{
			name: "Invalid",
			scope: "invalid",
			settings: invalid
		},
		{
			name: "Invalid deprecated",
			scope: ["invalid.deprecated"],
			settings: invalid
		},
		{
			name: "Markdown Title Hash",
			scope: [
				"punctuation.definition.heading.md",
				"entity.name.type.md",
				"beginning.punctuation"
			],
			settings: declare
		},
		{
			name: "Markdown titles",
			scope: ["markup.heading", "entity.name.section"],
			settings: keyword
		},
		{
			name: "Markdown Raw",
			scope: ["markup.raw", "markup.inline.raw", "markup.fenced", "markup.fenced_code"],
			settings: markdownRaw
		},
		{
			name: "Markdown link",
			scope: [
				"markup.link",
				"string.other.link.title",
				"string.other.link.description",
				"meta.link.inline",
				"meta.image.inline"
			],
			settings: declare
		},
		{
			name: "Markdown link URL",
			scope: ["markup.underline.link.markdown"],
			settings: quote
		},
		{
			name: "Makefile Variables",
			scope: ["variable.language.makefile", "variable.other.makefile"],
			settings: declare
		},
		{
			name: "Makefile leaders",
			scope: [
				"punctuation.definition.markdown",
				"punctuation.definition.heading.markdown",
				"punctuation.definition.list.begin.markdown",
				"punctuation.definition.quote.begin.markdown"
			],
			settings: operator
		},
		{
			scope: ["markup.italic"],
			settings: {
				fontStyle: "italic"
			}
		},
		{
			scope: ["markup.bold"],
			settings: {
				fontStyle: "bold"
			}
		},
		{
			name: "CSS Class",
			scope: ["entity.other.attribute-name.class.css"],
			settings: library
		},
		{
			name: "CSS Tag name",
			scope: ["entity.name.tag.css"],
			settings: keyword
		},
		{
			name: "CSS Property",
			scope: ["meta.property-name.css"],
			settings: declare
		}
	];

	return {
		$schema: "vscode://schemas/color-theme",
		name: themeName,
		colors: uiColors,
		tokenColors,
		semanticHighlighting: true
	};
}
