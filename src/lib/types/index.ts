interface IExperience {
	title: string;
	company: string;
	dateFrom: string;
	dateTo: string;
	description: string;
	technologies: string[];
}

interface ILink {
	href: string;
	target?: string;
	rel?: string;
	label: string;
	ariaLabel?: string;
}

interface IProject {
	title: string;
	imageURI: string;
	imageAlt: string;
	description: string;
	technologies: string[];
}

export { type IExperience, type ILink, type IProject };
