import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";

const ProjectPage = ({project}: DocumentData) => {
    let difficulty = "Loading...";
    if (project.difficulty == 1) difficulty = "Beginner";
    if (project.difficulty == 2) difficulty = "Intermediate";
    if (project.difficulty == 3) difficulty = "Advanced";
    
    const [initialLocalStorage, setInitialLocalStorage] = useState<string[]>([])
    useEffect(() => {
        const temp = localStorage.getItem(project.title.toLowerCase()) || "[]";
        setInitialLocalStorage(JSON.parse(temp));
    }, [])

    const changeSelect = (e:any) => {
        const key = project.title.toLowerCase();
        const id:string = e.target.id;
        const isChecked = e.target.checked;
        const prev = localStorage.getItem(key);
        if (isChecked && prev == undefined) {
            const newArr = [id]
            localStorage.setItem(key, JSON.stringify(newArr))
        } else if (isChecked && prev != undefined) {
            const arr = JSON.parse(prev);
            arr.push(id);
            localStorage.setItem(key, JSON.stringify(arr))
        } else if ( prev != undefined) {
            console.log("newArr");
            const arr = JSON.parse(prev);
            const newArr = arr.filter((item:string) => {
                return (item.toLowerCase() != id.toLowerCase());
            })
            
            localStorage.setItem(key, JSON.stringify(newArr))
        }
    }

    return (
        <div id="project-page-container">
            <div id="project-page-left">
            <div id="project-heading-container">
                <h2>{project.title}</h2>
                <p>| {difficulty}</p>
                {/* {localStorage.getItem(project.title.toLowerCase()) && <button id="finished">Finished!</button>} */}
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
                            <input defaultChecked={initialLocalStorage.includes(userStory)} onChangeCapture={(e) => changeSelect(e)} id={userStory} type="checkbox"/>
                            <label htmlFor={userStory}>{userStory}</label>
                        </div>
                    )
                })}
            </div>
            <div>
                <h3 className="project-page-section-title">Bonus Features</h3>
                {project.bonusFeatures.map((bonus:string) => {
                    return (
                        <div className="checkbox-container">
                            <input defaultChecked={initialLocalStorage.includes(bonus)} onChangeCapture={(e) => changeSelect(e)} style={{background: "green"}} id={bonus} type="checkbox"/>
                            <label htmlFor={bonus}>{bonus}</label>
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