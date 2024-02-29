import React from "react";

interface ProjectData {
	id: string;
	name: string;
	explanation: React.FC;
	backend: string[];
	frontend?: string[];
	database: string[];
	messageBus?: string[];
	container?: string[];
	tools?: string[];
	versionControl: string[];
	sourceCode?: string;
}

export type { ProjectData };