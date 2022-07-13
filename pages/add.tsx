import { doc, setDoc } from 'firebase/firestore';
import type { NextPage } from 'next'
import { useState } from 'react'
import { db } from '../config/firebase';
import Router from 'next/router';
import compiler from "markdown-to-jsx";
import Link from 'next/link';

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
    e.target.parentNode.children[0].value = "";
    setConstraints(constraintCopy);
  }

  const addUserStory = (e:any) => {
    e.preventDefault();
    const newUserStory:string = e.target.parentNode.children[0].value;
    const userStoryCopy = userStories.map((value) => value);
    userStoryCopy.push(newUserStory);
    e.target.parentNode.children[0].value = "";
    setUserStories(userStoryCopy);
  };

  const addBonus = (e:any) => {
    e.preventDefault();
     const newBonusFeature:string = e.target.parentNode.children[0].value;
    const bonusFeatureCopy = bonusFeatures.map((value) => value);
    bonusFeatureCopy.push(newBonusFeature);
    e.target.parentNode.children[0].value = "";
    setBonusFeatures(bonusFeatureCopy);
  };

  const addUseful = (e:any) => {
    e.preventDefault();
    const newUsefulLinks:string = e.target.parentNode.children[0].value;
    const usefulLinksCopy = usefulLinks.map((value) => value);
    usefulLinksCopy.push(newUsefulLinks);
    e.target.parentNode.children[0].value = "";
    setUsefulLinks(usefulLinksCopy);
  };

  const submitProject = async(e:any) => {
    e.preventDefault();
    console.log(e.target[1].value)
    const shortDescription = e.target[2].value;
    const description = e.target[3].value;

    let difficulty = 1;
    if (e.target[1].value == "Intermediate") difficulty = 2;
    if (e.target[1].value == "Advanced") difficulty = 2;

    const title = e.target[0].value;
    const noWhitespaceTitle = e.target[0].value.replace(/ /g,'-').toLowerCase()

    const project = {
      constraints,
      bonusFeatures,
      examples: [],
      description,
      difficulty,
      shortDescription,
      title,
      usefulLinks,
      userStories,
      createdAt: Date.now()
    }
    await setDoc(doc(db, "projects", noWhitespaceTitle), project);

    Router.push("/" + e.target[1].value.toLowerCase() + "/" + noWhitespaceTitle)
  }

  // const uploadMd = (e:any) => {
  //   const file = e.target.files[0];
  //   if (file == undefined) return;
  //   const reader = new FileReader();
  //   reader.readAsText(file);
  //   reader.onload = function() {
  //     if (typeof reader.result == "string") extractMd(reader.result);
  //   };
  // }

  // const extractMd = (file:any) => {
  //   console.log("Here")
  //   // const title = file.slice(file.search('#') +2, file.search('\n'));
  //   // const difficulty = file.slice(file.search("Tier:") + 7, file.search("Tier:") + 9);
  // }

  return (
    <div>
      <div id="add-project-title-heading">
        <Link href="/"><p className="back-arrow">&#60;</p></Link>
        <h1>New App Idea</h1>
        {/* <button id="upload-md" onClick={(e:any) => e.target.children[0] && e.target.children[0].click()}><input onClick={(e) => uploadMd(e)} accept='.md' id="file" style={{display: "none"}} type="file" /> | Upload .md file</button> */}
      </div>
      <form id="add-project-form" onSubmit={(e) => submitProject(e)}>
        <div id="left-form">
          <div id="title-difficulty-container">
            <div className='add-project-label-input'>
              <label>Title</label>
              <input required className='rounded-form-input'/>
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
            <input required className='rounded-form-input'/>
          </div>
          <div className='add-project-label-input'>
            <label>Description</label>
            <textarea required id="form-description" rows={10} cols={50}></textarea>
          </div>
        </div>
        <div id="form-right">
          <div className='add-project-label-input'>
            <label>Constraints</label>
            <div>
              <input className='rounded-form-input right-form-input'/>
              <button className='form-multiple-add' onClick={(e) => addConstraint(e)}>ADD</button>
              <div>
                {constraints.map((constraint:string) => <p>- {constraint}</p>)}
              </div>
            </div>
          </div>
          <div className='add-project-label-input'>
            <label>User stories</label>
            <div>
              <input className='rounded-form-input right-form-input'/>
              <button className='form-multiple-add' onClick={(e) => addUserStory(e)}>ADD</button>
              <div>
                {userStories.map((story:string) => <p>- {story}</p>)}
              </div>
            </div>
          </div>
          <div className='add-project-label-input'>
            <label>Bonus features</label>
            <div>
              <input className='rounded-form-input right-form-input'/>
              <button className='form-multiple-add' onClick={(e) => addBonus(e)}>ADD</button>
              <div>
                {bonusFeatures.map((bonus:string) => <p>- {bonus}</p>)}
              </div>
            </div>
          </div>
          <div className='add-project-label-input'>
            <label>Useful links</label>
            <div>
              <input className='rounded-form-input right-form-input'/>
              <button className='form-multiple-add' onClick={(e) => addUseful(e)}>ADD</button>
                <div>
                {usefulLinks.map((link:string) => <p>- {link}</p>)}
              </div>
            </div>
          </div>
          <input id="submit-form-button" type="SUBMIT"/>
        </div>
      </form>
    </div>
  )
}

export default Add
