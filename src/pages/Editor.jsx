import React,{useState} from 'react';
import CreateSprint from '../components/CreateSprint';
import Overlay from '../components/Overlay';

const Editor = () => {
const [sprintmodal,setSprintModal]= useState(false);

const openSprintModal = () =>{
    setSprintModal(true);
}

const closeSprintModal =  () => {
    setSprintModal(false);
}
  return (
    <section className='px-4 bg-gray-200 min-h-[90vh] mt-20'>
        <button className='px-4 py-1 rounded-full bg-yellow' onClick={openSprintModal}>Create Sprint</button>
        {
            sprintmodal && <Overlay onClose={closeSprintModal}><CreateSprint/></Overlay>
        }
    </section>
  )
}

export default Editor