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
	entityDescription: string;
	positionOverview: string;
	departureReason: string;
	points: string[];
};

export type Skills = {
	[heading: string]: string; // heading will be included verbatim
};

/** If your YAML file doesn't match this schema, u may encounter Problems. */
export type Resume = {
	anonymize: boolean; // whether to anonymize the resume, for sharing/previewing/etc
	contact: Contact;
	experience: Experience[];
	skills: Skills;
};
