interface IMainLink {
	label: string;
	name: string;
	url: string;
}

const mainLinks: IMainLink[] = [
	{
		label: 'Profile for Thomas Urie on Github (opens in a new tab)',
		name: 'Github',
		url: 'https://github.com/thomurie'
	},
	{
		label: 'Profile for Thomas Urie on LinkedIn (opens in a new tab)',
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/thomas-urie/'
	},
	{
		label: 'Profile for Thomas Urie on Bluesky (opens in a new tab)',
		name: 'Bluesky',
		url: 'https://bsky.app/profile/thom152.bsky.social'
	}
];

export { mainLinks, type IMainLink };
