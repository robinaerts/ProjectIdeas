import type { NextPage } from 'next'

const Add: NextPage = () => {
  return (
    <div>
      <div id="add-project-title-heading">
        <h1>New App Idea</h1>
        <button id="upload-md"> | Upload .md file</button>
      </div>
      <form id="add-project-form">
        <div>
          <div>
            <div className='add-project-label-input'>
              <label>Title</label>
              <input/>
            </div>
            <div className='add-project-label-input'>
              <label>Difficulty</label>
              <select>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
          <div className='add-project-label-input'>
            <label>Short Description</label>
            <input/>
          </div>
          <div className='add-project-label-input'>
            <label>Description</label>
            <textarea rows={10} cols={50}></textarea>
          </div>
        </div>
        <div>
          <div className='add-project-label-input'>
            <label>Constraints</label>
            <div>
              <input/>
              <button>ADD</button>
            </div>
          </div>
          <div className='add-project-label-input'>
            <label>User stories</label>
            <div>
              <input/>
              <button>ADD</button>
            </div>
          </div>
          <div className='add-project-label-input'>
            <label>Bonus features</label>
            <div>
              <input/>
              <button>ADD</button>
            </div>
          </div>
          <div className='add-project-label-input'>
            <label>Useful links</label>
            <div>
              <input/>
              <button>ADD</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Add
