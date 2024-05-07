import React from 'react';

const CreateSprint = () => {
  return (
    <>
      <h4 className='text-2xl text-center font-semibold'>Create New Sprint</h4>
      <div className='my-4'>
        <div className='mb-2'>
          <label htmlFor="sprintname text-sm">Sprint Name</label>
          <input type="text" name="sprintname" id="sprintname" className='border p-2 mt-1 rounded-md block w-full focus:bg-gray-50' />
        </div>
        <div className='mb-2'>
          <label htmlFor="sprintdura text-smtion">Sprint Duration</label>
          <input type="number" name="sprintduration" id="sprintduration" className='border mt-1 p-2 rounded-md block w-full focus:bg-gray-50'/>
        </div>
        <div className='mb-2'>
          <label htmlFor="sprintword text-sms">Sprint Words</label>
          <input type="number" name="sprintwords" id="sprintwords" className='border p-2 mt-1 rounded-md block w-full focus:bg-gray-50'/>
        </div>
        <div className='mb-2'>
          <label htmlFor="">Sprint Type</label>
          <div className='flex justify-evenly items-center my-2'>
            <label className='radio-container w-1/ bg-orange-200 rounded-full'>
              <span className='px-2 py-1 text-sm flex justify-center gap-1 items-center'>Word
                <input type="radio" name='sprinttype' value="word" />
              </span>
            </label>
            <label className='radio-container w-1/ bg-orange-200 rounded-full'>
              <span className='px-3 py-1 text-sm flex justify-center gap-1 items-center '>Page
                <input type="radio" name='sprinttype' value="page" />
              </span>
            </label>
            <label className='radio-container w-1/ bg-orange-200 rounded-full'>
              <span className='px-2 py-1 text-sm flex justify-center gap-1 items-center '>Chapter
                <input type="radio" name='sprinttype' value="chapter" />
              </span>
            </label>
          </div>
        </div>
        <div className='text-center'>
          <button className='px-8 py-2 bg-purple-400 text-white mt-4 rounded-full'>Create</button>
        </div>
      </div>
    </>
  )
}

export default CreateSprint;
