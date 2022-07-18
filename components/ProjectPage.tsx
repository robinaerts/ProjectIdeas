import { DocumentData } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import AddExample from "./AddExample";

const ProjectPage = ({ project }: DocumentData) => {
  const [addExample, setAddExample] = useState(false);
  let difficulty = "Loading...";
  if (project.difficulty == 1) difficulty = "Beginner";
  if (project.difficulty == 2) difficulty = "Intermediate";
  if (project.difficulty == 3) difficulty = "Advanced";

  const [initialLocalStorage, setInitialLocalStorage] = useState<string[]>([]);
  useEffect(() => {
    const temp = localStorage.getItem(project.title.toLowerCase()) || "[]";
    setInitialLocalStorage(JSON.parse(temp));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeSelect = (e: any) => {
    const key = project.title.toLowerCase();
    const id: string = e.target.id;
    const isChecked = e.target.checked;
    const prev = localStorage.getItem(key);
    if (isChecked && prev == undefined) {
      const newArr = [id];
      localStorage.setItem(key, JSON.stringify(newArr));
    } else if (isChecked && prev != undefined) {
      const arr = JSON.parse(prev);
      arr.push(id);
      localStorage.setItem(key, JSON.stringify(arr));
    } else if (prev != undefined) {
      console.log("newArr");
      const arr = JSON.parse(prev);
      const newArr = arr.filter((item: string) => {
        return item.toLowerCase() != id.toLowerCase();
      });

      localStorage.setItem(key, JSON.stringify(newArr));
    }
  };

  return (
    <div id="project-page-container">
      <div id="project-page-left">
        <div id="project-heading-heading-container">
          <div id="project-heading-container">
            <Link href={"/" + difficulty.toLowerCase()}>
              <p className="back-arrow">&#60;</p>
            </Link>
            <h2>{project.title}</h2>
          </div>
          <p id="difficulty-project-page" style={{ marginLeft: "3rem" }}>
            | {difficulty}
          </p>
          {/* {localStorage.getItem(project.title.toLowerCase()) && <button id="finished">Finished!</button>} */}
        </div>
        <div id="description-container">
          <p>{project.description}</p>
        </div>
        {project.constraints.length > 0 && (
          <div>
            <h3 className="project-page-section-title">Constraints</h3>
            {project.constraints.map((constraint: string, i: number) => {
              return (
                <p key={i} className="project-page-constraint">
                  {" "}
                  - {constraint}
                </p>
              );
            })}
          </div>
        )}
        <div>
          <h3 className="project-page-section-title">User Stories</h3>
          {project.userStories.map((userStory: string, i: number) => {
            return (
              <div key={i} className="checkbox-container">
                <input
                  defaultChecked={initialLocalStorage.includes(userStory)}
                  onChangeCapture={(e) => changeSelect(e)}
                  id={userStory}
                  type="checkbox"
                />
                <label htmlFor={userStory}>{userStory}</label>
              </div>
            );
          })}
        </div>
        {project.bonusFeatures.length > 0 && (
          <div>
            <h3 className="project-page-section-title">Bonus Features</h3>
            {project.bonusFeatures.map((bonus: string, i: number) => {
              return (
                <div key={i} className="checkbox-container">
                  <input
                    defaultChecked={initialLocalStorage.includes(bonus)}
                    onChangeCapture={(e) => changeSelect(e)}
                    style={{ background: "green" }}
                    id={bonus}
                    type="checkbox"
                  />
                  <label htmlFor={bonus}>{bonus}</label>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div id="project-page-right">
        <h3>Useful Links</h3>
        {project.usefulLinks.map((link: string, i: number) => {
          return (
            <a key={i} className="link-wrap" href={link}>
              Link {i + 1}
            </a>
          );
        })}
        <h3 style={{ marginTop: "3rem" }}>Example Projects</h3>
        {project.examples.map((example: string, i: number) => {
          return (
            <a key={i} className="link-wrap" href={example}>
              Link {i + 1}
            </a>
          );
        })}
        <button onClick={() => setAddExample(true)} id="add-example-btn">
          ADD YOUR PROJECT
        </button>
      </div>
      {addExample && (
        <AddExample project={project} setAddExample={setAddExample} />
      )}
    </div>
  );
};

export default ProjectPage;
