import React, { useState } from 'react';
import { successToast,errorToast } from '../utils/notifications';
import { Toaster } from "react-hot-toast";


const CreateSprint = () => {
  const [formData, setFormData] = useState({
    sprintname: '',
    sprintduration: '',
    sprintwords: '',
    sprinttype: ''
  });

  const sprintTypes = ['word', 'page', 'chapter'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value.trim() 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.sprintname.trim() || !formData.sprintduration || !formData.sprintwords || !formData.sprinttype) {
      errorToast('Please fill in all fields.');
      return;
    }

    if (parseInt(formData.sprintduration) < 1) {
      errorToast('Sprint duration must be at least 1 minute.');
      return;
    }

    if (parseInt(formData.sprintwords) < 5) {
      errorToast('Sprint words must be at least 5.');
      return;
    }

    if (!sprintTypes.includes(formData.sprinttype)) {
      errorToast('Invalid sprint type.');
      return;
    }

    successToast('Form submitted:', formData);
  };

  return (
    <>
      <h4 className='text-2xl text-center font-semibold'>Create New Sprint</h4>
      <div className='my-4'>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor="sprintname" className="text-sm">Sprint Name</label>
            <input type="text" name="sprintname" id="sprintname" value={formData.sprintname} onChange={handleChange} className='border p-2 mt-1 rounded-md block w-full focus:bg-gray-50' />
          </div>
          <div className='mb-2'>
            <label htmlFor="sprintduration" className="text-sm">Sprint Duration (minutes)</label>
            <input type="number" name="sprintduration" id="sprintduration" value={formData.sprintduration} onChange={handleChange} className='border mt-1 p-2 rounded-md block w-full focus:bg-gray-50'/>
          </div>
          <div className='mb-2'>
            <label htmlFor="sprintwords" className="text-sm">Sprint Words</label>
            <input type="number" name="sprintwords" id="sprintwords" value={formData.sprintwords} onChange={handleChange} className='border p-2 mt-1 rounded-md block w-full focus:bg-gray-50'/>
          </div>
          <div className='mb-2'>
            <label htmlFor="sprinttype">Sprint Type</label>
            <div className='flex justify-evenly items-center my-2'>
              {/* Mapping over the sprintTypes array to generate radio buttons */}
              {sprintTypes.map(type => (
                <label key={type} className='radio-container w-1/4 bg-green rounded-full'>
                  <span className='px-2 py-1 text-sm flex justify-center gap-1 items-center'>{type}
                    <input type="radio" name='sprinttype' value={type} onChange={handleChange} />
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className='text-center'>
            <button type="submit" className='px-8 py-2 bg-navyblue text-white mt-4 rounded-full'>Create</button>
          </div>
        </form>
      </div>
      <Toaster/>
    </>
  )
}

export default CreateSprint;
