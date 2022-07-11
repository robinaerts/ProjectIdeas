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
    examples: string[]
}

const ProjectList = ({projects}: DocumentData) => {
    return (
        <div id="project-list">
            {projects.map((project: Project) => {
                return (
                <Link href={"/beginner/" + project.title.toLowerCase()}>
                <div className="project-select">
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