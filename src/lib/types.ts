/** Type alias indicating that a string may contain markdown. */
type MarkdownString = string;

export type Contact = {
	name: string;
	title: string;
	phone: string;
	email: string;
};

export type Experience = {
	entity: string;
	title: string;
	type: string;
	location: string;
	begin: string; // ISO 8601 date-only
	end: string; // ISO 8601 date-only
	entityDescription: MarkdownString;
	positionOverview: MarkdownString;
	departureReason: string;
	points: MarkdownString[];
};

export type Project = MarkdownString;

export type Skill = {
	[heading: string]: MarkdownString; // heading will be included verbatim
};

/** If your YAML file doesn't match this schema, u may encounter Problems. */
export type Resume = {
	contact: Contact;
	experience: Experience[];
	projects: Project[];
	skills: Skill[];
};
