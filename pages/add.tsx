import { collection, doc, setDoc } from 'firebase/firestore';
import type { NextPage } from 'next'
import { useState } from 'react'
import { db } from '../config/firebase';

const Add: NextPage = () => {
  const [constraints, setConstraints] = useState<string[]>([]);
  const [userStories, setUserStories] = useState<string[]>([]);
  const [bonusFeatures, setBonusFeatures] = useState<string[]>([]);
  const [usefulLinks, setUsefulLinks] = useState<string[]>([]);

  const addConstraint = (e:any) => {
    e.preventDefault();
    const newConstraint:string = e.target.parentNode.children[0].value;
    const constraintCopy = constraints.map((value) => value);
    constraintCopy.push(newConstraint);
    setConstraints(constraintCopy);
  }

  const addUserStory = (e:any) => {
    e.preventDefault();
    const newUserStory:string = e.target.parentNode.children[0].value;
    const userStoryCopy = userStories.map((value) => value);
    userStoryCopy.push(newUserStory);
    setUserStories(userStoryCopy);
  };

  const addBonus = (e:any) => {
    e.preventDefault();
     const newBonusFeature:string = e.target.parentNode.children[0].value;
    const bonusFeatureCopy = userStories.map((value) => value);
    bonusFeatureCopy.push(newBonusFeature);
    setBonusFeatures(bonusFeatureCopy);
  };

  const addUseful = (e:any) => {
    e.preventDefault();
    const newUsefulLinks:string = e.target.parentNode.children[0].value;
    const usefulLinksCopy = userStories.map((value) => value);
    usefulLinksCopy.push(newUsefulLinks);
    setUsefulLinks(usefulLinksCopy);
  };

  const submitProject = async(e:any) => {
    e.preventDefault();
    const description = "short desc";
    const difficulty = 1;
    const title = "Test";

    const project = {
      constraints,
      bonusFeatures,
      examples: [],
      description,
      difficulty,
      shortDescription: "this is short",
      title,
      usefulLinks,
      userStories
    }
    await setDoc(doc(db, "projects", title), project);
  }

  return (
    <div>
      <div id="add-project-title-heading">
        <h1>New App Idea</h1>
        <button id="upload-md"> | Upload .md file</button>
      </div>
      <form id="add-project-form" onSubmit={(e) => submitProject(e)}>
        <div id="left-form">
          <div id="title-difficulty-container">
            <div className='add-project-label-input'>
              <label>Title</label>
              <input className='rounded-form-input'/>
            </div>
            <div className='add-project-label-input'>
              <label>Difficulty</label>
              <select id="difficulty-select">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
          <div className='add-project-label-input'>
            <label>Short Description</label>
            <input className='rounded-form-input'/>
          </div>
          <div className='add-project-label-input'>
            <label>Description</label>
            <textarea id="form-description" rows={10} cols={50}></textarea>
          </div>
        </div>
        <div id="form-right">
          <div className='add-project-label-input'>
            <label>Constraints</label>
            <div>
              <input className='rounded-form-input right-form-input'/>
              <button className='form-multiple-add' onClick={(e) => addConstraint(e)}>ADD</button>
              <div>
                {constraints.map((constraint:string) => <p>{constraint}</p>)}
              </div>
            </div>
          </div>
          <div className='add-project-label-input'>
            <label>User stories</label>
            <div>
              <input className='rounded-form-input right-form-input'/>
              <button className='form-multiple-add' onClick={(e) => addUserStory(e)}>ADD</button>
              <div>
                {userStories.map((story:string) => <p>{story}</p>)}
              </div>
            </div>
          </div>
          <div className='add-project-label-input'>
            <label>Bonus features</label>
            <div>
              <input className='rounded-form-input right-form-input'/>
              <button className='form-multiple-add' onClick={(e) => addBonus(e)}>ADD</button>
              <div>
                {bonusFeatures.map((bonus:string) => <p>{bonus}</p>)}
              </div>
            </div>
          </div>
          <div className='add-project-label-input'>
            <label>Useful links</label>
            <div>
              <input className='rounded-form-input right-form-input'/>
              <button className='form-multiple-add' onClick={(e) => addUseful(e)}>ADD</button>
                            <div>
                {usefulLinks.map((link:string) => <p>{link}</p>)}
              </div>
            </div>
          </div>
          <input id="submit-form-button" type="SUBMIT" value="Submit Project"/>
        </div>
      </form>
    </div>
  )
}

export default Add
