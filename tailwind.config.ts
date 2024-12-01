import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			emerald: '#5ECE8D',
			blueCrayola: '#377CFB',
			safetyOrange: '#F67D65',
			charcoal: '#333C4D',
			snow: '#FAF7F8'
		},
		extend: {},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		}
	},

	plugins: [typography]
} satisfies Config;
