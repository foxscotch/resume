/** Type alias indicating that a string may contain markdown. */
type MarkdownString = string;

export type Contact = {
	name: string;
	title: string;
	location: string;
	phone: string;
	email: string;
};

export type Experience = {
	entity: string;
	title: string;
	type: string;
	location: string;
	begin: Date; // express as ISO 8601 string, only the date is necessary
	end: Date; // ^ same
	entityDescription: MarkdownString;
	positionOverview: MarkdownString;
	departureReason: string;
	points: MarkdownString[];
};

export type Project = MarkdownString;

export type Skills = {
	[heading: string]: MarkdownString; // heading will be included verbatim
};

/** If your YAML file doesn't match this schema, u may encounter Problems. */
export type Resume = {
	contact: Contact;
	experience: Experience[];
	projects: Project[];
	skills: Skills;
};
