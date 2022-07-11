import { DocumentData } from "firebase/firestore";
import type { Project } from "./ProjectList"

const ProjectPage = ({project}: DocumentData) => {
    let difficulty = "Beginner";
    if (project.difficulty == 1) difficulty = "Beginner";
    if (project.difficulty == 2) difficulty = "Intermediate";
    if (project.difficulty == 3) difficulty = "Advanced";
    
    return (
        <div>
            <div>
            <div>
                <h2>{project.title}</h2>
                <p>| {difficulty}</p>
            </div>
            <div>
                <p>{project.description}</p>
            </div>
            <div>
                <h3>Constraints</h3>
                {project.constraints.map((constraint:string) => {
                    return <p> - {constraint}</p>
                })}
            </div>
            <div>
                <h3>User Stories</h3>
                {project.userStories.map((userStory:string) => {
                    return (
                        <>
                            <input type="checkbox"/>
                            <p>{userStory}</p>
                        </>
                    )
                })}
            </div>
            <div>
                <h3>Bonus Features</h3>
                {project.bonusFeatures.map((bonus:string) => {
                    return (
                        <>
                            <input type="checkbox"/>
                            <p>{bonus}</p>
                        </>
                    )
                })}
            </div>
            </div>
            <div>
                <h3>Useful Links</h3>
                {project.usefulLinks.map((link:string) => {
                    return (
                        <a href={link}>{link}</a>
                    )
                })}
                <h3>Example Projects</h3>
                {project.examples.map((example:string) => {
                    return (
                        <a href={example}>{example}</a>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectPage;