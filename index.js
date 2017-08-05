'use strict';
const foregroundColor = '#b9bed5';
const backgroundColor = '#2a2d37';
const red = '#85b1e0';
const green = '#9aefea';
const yellow ='#dda2f6';
const blue = '#f5faff';
const magenta = '#7e7edd';
const cyan = '#4d8acb';
const lightBlack =

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: foregroundColor,
	cursorColor: cyan,
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: blue,
		lightBlack: backgroundColor,
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor
	},
	css: `
		${config.css}

		/* Hide title when only one tab */
		.tabs_title {
			display: none !important;
		}

		.tab_active:before {
			border-color: blue;
		}

		.term_fit:not(.term_term) {
			opacity: 0.6;
		}

		.term_fit.term_active {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
			will-change: opacity;
		}

		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			background-color: blue;
			transform: scaleX(0);
		}

		.tab_first {
			border-left-color: transparent !important;
		}

		.tab_tab:not(.tab_active) {
			color: #666;
		}

		.tab_tab.tab_active::before {
			transform: scaleX(1);
			transition: all 200ms cubic-bezier(0.0, 0.0, 0.2, 1);
		}
	`
});
