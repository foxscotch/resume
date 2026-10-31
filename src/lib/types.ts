type MarkdownString = string; // type for strings that can contain markdown

export type Contact = {
	name: string;
	title: string;
	linkedin: string;
	phone: string;
	email: string;
};

export type Experience = {
	entity: string;
	title: string;
	group: string; // used for separating some positions into their own groups. will be used as the heading for the group
	location: string;
	begin: Date; // express as ISO 8601 string, only the date is necessary
	end: Date; // ^ same
	entityDescription: string;
	positionOverview: string;
	departureReason: string;
	points: MarkdownString[];
};

export type Skills = {
	_preamble: MarkdownString; // shown before skills, outside of the list, as an intro
	[heading: string]: string; // heading will be included verbatim
};

/** If your YAML file doesn't match this schema, u may encounter Problems. */
export type Resume = {
	contact: Contact;
	experience: Experience[];
	skills: Skills;
};
