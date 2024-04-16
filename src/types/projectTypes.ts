interface ProjectData {
	id: string;
	name: string;
	explanationKey: string;
	backend: string[];
	frontend?: string[];
	database: string[];
	messageBus?: string[];
	container?: string[];
	tools?: string[];
	versionControl: string[];
	sourceCode?: string;
	webUrl?: string;
}

export type { ProjectData };