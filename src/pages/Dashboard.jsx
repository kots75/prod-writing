import React from 'react'
import { PencilIcon,DateIcon,PersonIcon } from '../utils/icons'

const projectsData = [
  {
    id:1,
    status:'Active',
    image:"https://pixabay.com/get/gc0b11d755fa0da676e3fa54c4abcf4db3ae38ce5bab13f773d3f0c106bbd6ab090ac866a06afe4083da4c8fc9366ffa7e690a7340dd89af6c16386abfa4153c157ee9439c6705bdd47a8442c71061416_640.jpg",
    title:"Some Random Title",
    wordcount:4343,
    timespent:12
  },
  {
    id:2,
    status:'Completed',
    image:"https://pixabay.com/get/gc0b11d755fa0da676e3fa54c4abcf4db3ae38ce5bab13f773d3f0c106bbd6ab090ac866a06afe4083da4c8fc9366ffa7e690a7340dd89af6c16386abfa4153c157ee9439c6705bdd47a8442c71061416_640.jpg",
    title:"Some Random Title",
    wordcount:12122,
    timespent:5
  },
  {
    id:3,
    status:'Active',
    image:"https://pixabay.com/get/gc0b11d755fa0da676e3fa54c4abcf4db3ae38ce5bab13f773d3f0c106bbd6ab090ac866a06afe4083da4c8fc9366ffa7e690a7340dd89af6c16386abfa4153c157ee9439c6705bdd47a8442c71061416_640.jpg",
    title:"Some Random Title",
    wordcount:5456,
    timespent:2
  },
  {
    id:4,
    status:'Active',
    image:"https://pixabay.com/get/gc0b11d755fa0da676e3fa54c4abcf4db3ae38ce5bab13f773d3f0c106bbd6ab090ac866a06afe4083da4c8fc9366ffa7e690a7340dd89af6c16386abfa4153c157ee9439c6705bdd47a8442c71061416_640.jpg",
    title:"Some Random Title",
    wordcount:6565,
    timespent:7
  }
]

const Dashboard = () => {
  return (
    <section className='bg-gray-200'>
    <div className='p-4 max-w-7xl mx-auto mt-20'>
      <div className="top flex justify-center items-center gap:8  md:gap-10 bg-white py-4 rounded-md flex-col md:flex-row">
        <div className="left-side w-16 h-16 rounded-full bg-yellow grid place-items-center">J</div>
        <div className="right-side mt-4 md:mt-0">
          <h4 className='font-bold text-center md:text-left'>John Doe</h4>
          <div className='flex justify-center items-center gap-2'>
            <p>Age 6</p><span>.</span>
            <p>Student</p><span>.</span>
            <p>Melbourne,Australia</p>
          </div>
        </div>
      </div>
      <div className="middle flex flex-col sm:flex-row justify-center items-center gap-3 my-7">
        <p className='flex justify-between items-center gap-1 bg-white rounded-full py-1 px-3 text-sm'>{DateIcon} <span>Joined: March 12,2024</span></p>
        <p className='flex justify-between items-center gap-1 bg-white rounded-full py-1 px-3 text-sm'>{PersonIcon} <span>Last Active: 1d ago</span></p>
      </div>
      <div className="bottom bg-white p-4 rounded-md">
        <div className="top flex justify-between items-center mb-3">
          <h2 className='text-2xl'>Projects</h2>
          <button className='flex justify-center items-center gap-2 text-sm bg-yellow rounded-full px-3 py-1'>{PencilIcon}Create New Project</button>
        </div>
        <div className='flex flex-wrap justify-between items-center gap-2 md:justify-between rounded-md'>
          {projectsData.map((item) => (
            <div key={item.id} className='w-full md:w-auto min-w-[290px] md:min-w-[280px] border border-[rgba(0,0,0,0.2)] rounded-md'>
              <div className="top-bar p-2 flex justify-between items-center">
                <div className='bg-green py-1 px-2 rounded-md text-sm'>{item.status}</div>
                <div className='font-bold'>...</div>
              </div>
              <div className="item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="textual-content p-2">
                <h3 className='text-lg'>{item.title}</h3>
                <p className='text-purple-400'>Word Count: {item.wordcount}</p>
                <p className='text-orange-400'>Time Spent: {item.timespent}</p>
              </div>
            </div>
          ))}
        </div>

          
      </div>
    </div>
    </section>
  )
}

export default Dashboard