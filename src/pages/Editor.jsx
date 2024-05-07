import React,{useState} from 'react';
import CreateSprint from '../components/CreateSprint';

const Editor = () => {
const [sprintmodal,setSprintModal]= useState(false);

const openSprintModal = () =>{
    setSprintModal(true);
}

const closeSprintModal =  () => {
    setSprintModal(false);
}
  return (
    <>
        <button className='px-4 py-1 rounded-full bg-red-200' onClick={openSprintModal}>Create Sprint</button>
        {
            sprintmodal && <CreateSprint/>
        }
    </>
  )
}

export default Editor