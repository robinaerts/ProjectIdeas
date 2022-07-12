import type { NextPage } from 'next'

const Add: NextPage = () => {
  return (
    <div>
      <div id="add-project-title-heading">
        <h1>New App Idea</h1>
        <button id="upload-md"> | Upload .md file</button>
      </div>
      <form id="add-project-form">
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
              <input className='rounded-form-input'/>
              <button className='form-multiple-add'>ADD</button>
            </div>
          </div>
          <div className='add-project-label-input'>
            <label>User stories</label>
            <div>
              <input className='rounded-form-input'/>
              <button className='form-multiple-add'>ADD</button>
            </div>
          </div>
          <div className='add-project-label-input'>
            <label>Bonus features</label>
            <div>
              <input className='rounded-form-input'/>
              <button className='form-multiple-add'>ADD</button>
            </div>
          </div>
          <div className='add-project-label-input'>
            <label>Useful links</label>
            <div>
              <input className='rounded-form-input'/>
              <button className='form-multiple-add'>ADD</button>
            </div>
          </div>
          <input id="submit-form-button" type="SUBMIT" value="Submit Project"/>

        </div>
      </form>
    </div>
  )
}

export default Add
