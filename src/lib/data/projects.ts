interface IProject {
	title: string;
	imageURI: string;
	imageAlt: string;
	description: string;
	technologies: string[];
}

const projects: IProject[] = [
	{
		title: 'Title1',
		imageURI: 'Image1',
		imageAlt: 'Alt1',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptates dolore a nam quaerat, animi eaque magnam fuga molestiae repellendus aliquid accusamus nobis, in deleniti asperiores corporis? Nulla, non porro.',
		technologies: ['Technology 1', 'Technology 2, Technology 3, Technology 4, Technology 5']
	},
	{
		title: 'Title2',
		imageURI: 'Image2',
		imageAlt: 'Alt2',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptates dolore a nam quaerat, animi eaque magnam fuga molestiae repellendus aliquid accusamus nobis, in deleniti asperiores corporis? Nulla, non porro.',
		technologies: ['Technology 1', 'Technology 2, Technology 3, Technology 4, Technology 5']
	},
	{
		title: 'Title3',
		imageURI: 'Image3',
		imageAlt: 'Alt3',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptates dolore a nam quaerat, animi eaque magnam fuga molestiae repellendus aliquid accusamus nobis, in deleniti asperiores corporis? Nulla, non porro.',
		technologies: ['Technology 1', 'Technology 2, Technology 3, Technology 4, Technology 5']
	}
];

export { projects, type IProject };
