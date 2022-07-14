import { DocumentData } from "firebase/firestore";
import Link from "next/link"

export interface Project {
    title: string,
    difficulty: number,
    shortDescription: string,
    description: string,
    constraints: string[],
    userStories: string[],
    bonusFeatures: string[],
    usefulLinks: string[],
    examples: string[],
    createdAt: number
}

const ProjectList = ({projects}: DocumentData) => {
    return (
        <div id="project-list">
            {projects.map((project: Project) => {
                    let difficulty = "Loading...";
                    if (project.difficulty == 1) difficulty = "Beginner";
                    if (project.difficulty == 2) difficulty = "Intermediate";
                    if (project.difficulty == 3) difficulty = "Advanced";
                return (
                <Link key={project.createdAt} href={"/" + difficulty.toLowerCase() + "/" + project.title.replace(/ /g,'-').toLowerCase()}>
                <div key={project.createdAt} className="project-select">
                    <h4 className="project-select-list-title">{project.title}</h4>
                    <p className="project-select-list-description">{project.shortDescription}</p>
                </div>
                </Link>
                )
            })}
        </div>
    )
}

export default ProjectList;