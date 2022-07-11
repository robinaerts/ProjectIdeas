import { DocumentData } from "firebase/firestore";

const ProjectPage = ({project}: DocumentData) => {
    let difficulty = "Loading...";
    if (project.difficulty == 1) difficulty = "Beginner";
    if (project.difficulty == 2) difficulty = "Intermediate";
    if (project.difficulty == 3) difficulty = "Advanced";
    
    return (
        <div id="project-page-container">
            <div id="project-page-left">
            <div id="project-heading-container">
                <h2>{project.title}</h2>
                <p>| {difficulty}</p>
            </div>
            <div id="description-container">
                <p>{project.description}</p>
            </div>
            <div>
                <h3 className="project-page-section-title">Constraints</h3>
                {project.constraints.map((constraint:string) => {
                    return <p className="project-page-constraint"> - {constraint}</p>
                })}
            </div>
            <div>
                <h3 className="project-page-section-title">User Stories</h3>
                {project.userStories.map((userStory:string) => {
                    return (
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                            <p>{userStory}</p>
                        </div>
                    )
                })}
            </div>
            <div>
                <h3 className="project-page-section-title">Bonus Features</h3>
                {project.bonusFeatures.map((bonus:string) => {
                    return (
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                            <p>{bonus}</p>
                        </div>
                    )
                })}
            </div>
            </div>
            <div id="project-page-right">
                <h3>Useful Links</h3>
                {project.usefulLinks.map((link:string) => {
                    return (
                        <a href={link}>{link}</a>
                    )
                })}
                <h3 style={{marginTop: "3rem"}}>Example Projects</h3>
                {project.examples.map((example:string) => {
                    return (
                        <a href={example}>{example}</a>
                    )
                })}
                <button id="add-example-btn">ADD YOUR PROJECT</button>
            </div>
        </div>
    )
}

export default ProjectPage;