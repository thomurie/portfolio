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
		title: 'Title1',
		company: 'Company1',
		dateFrom: 'Jan 2021',
		dateTo: 'Jan 2021',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptates dolore a nam quaerat, animi eaque magnam fuga molestiae repellendus aliquid accusamus nobis, in deleniti asperiores corporis? Nulla, non porro.',
		technologies: ['Technology 1', 'Technology 2, Technology 3, Technology 4, Technology 5']
	},
	{
		title: 'Title2',
		company: 'Company2',
		dateFrom: 'Jan 2022',
		dateTo: 'Jan 2022',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptates dolore a nam quaerat, animi eaque magnam fuga molestiae repellendus aliquid accusamus nobis, in deleniti asperiores corporis? Nulla, non porro.',
		technologies: ['Technology 1', 'Technology 2, Technology 3, Technology 4, Technology 5']
	},
	{
		title: 'Title3',
		company: 'Company3',
		dateFrom: 'Jan 2023',
		dateTo: 'Jan 2023',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptates dolore a nam quaerat, animi eaque magnam fuga molestiae repellendus aliquid accusamus nobis, in deleniti asperiores corporis? Nulla, non porro.',
		technologies: ['Technology 1', 'Technology 2, Technology 3, Technology 4, Technology 5']
	}
];

export { experiences, type IExperience, };