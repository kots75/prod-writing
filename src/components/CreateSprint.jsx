import React from 'react'

const CreateSprint = () => {
  return (
    <div>
        <h4>Create New Sprint</h4>
        <div>
            <label htmlFor="sprintname">Sprint Name</label>
            <input type="text" name="sprintname" id="sprintname" />
        </div>
        <div>
            <label htmlFor="sprintduration">Sprint Duration</label>
            <input type="number" name="sprintduration" id="sprintduration" />
        </div>
        <div>
            <label htmlFor="">Sprint Words</label>
            <input type="number" name="sprintwords" id="sprintwords" />
        </div>
    </div>
  )
}

export default CreateSprint