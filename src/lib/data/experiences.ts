interface IExperience {
	title: string;
	company: string;
	dateFrom: string;
	dateTo: string;
	description: string;
	technologies: string[];
}

const experiences: IExperience[] = [
	{
		title: 'Fullstack Engineer',
		company: 'Dataro',
		dateFrom: 'March 2024',
		dateTo: 'Present',
		description:
			'Collaborated with data scientists, designers, and product managers to implement interfaces that interact with complex models and datasets. Implemented and advocated for best practices in web performance and accessibility.',
		technologies: ['React', 'JavaScript', 'Python', 'AWS', 'PostgreSQL']
	},
	{
		title: 'Software Engineer',
		company: 'Travelpass Group',
		dateFrom: 'Feb 2022',
		dateTo: 'Feb 2024',
		description:
			'Built and maintained critical features and components to construct multiple frontend applications. Contributed to the refactoring of the frontend, API, and backend applications.',
		technologies: ['React', 'TypeScript', 'GraphQL', 'Elixir', 'PostgreSQL']
	},
	{
		title: 'Fullstack Engineer',
		company: 'TRU Communities (Contract)',
		dateFrom: 'Feb 2021',
		dateTo: 'Jan 2022',
		description:
			'Designed, architected, and implemented multiple high-quality websites for diverse real estate projects. Refactored and rearchitected existing architecture to be more cost-effective, higher performing, and accessible.',
		technologies: ['Svelte', 'TypeScript', 'GCP']
	}
];

export { experiences, type IExperience };
