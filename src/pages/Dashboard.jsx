import React from 'react'
import { PencilIcon,DateIcon,PersonIcon } from '../utils/icons'

const projectsData = [
  {
    id:1,
    status:'active',
    image:"https://pixabay.com/get/gc0b11d755fa0da676e3fa54c4abcf4db3ae38ce5bab13f773d3f0c106bbd6ab090ac866a06afe4083da4c8fc9366ffa7e690a7340dd89af6c16386abfa4153c157ee9439c6705bdd47a8442c71061416_640.jpg",
    title:"Some Random Title",
    wordcount:4343,
    timespent:12
  },
  {
    id:2,
    status:'completed',
    image:"https://pixabay.com/get/gc0b11d755fa0da676e3fa54c4abcf4db3ae38ce5bab13f773d3f0c106bbd6ab090ac866a06afe4083da4c8fc9366ffa7e690a7340dd89af6c16386abfa4153c157ee9439c6705bdd47a8442c71061416_640.jpg",
    title:"Some Random Title",
    wordcount:12122,
    timespent:5
  },
  {
    id:3,
    status:'active',
    image:"https://pixabay.com/get/gc0b11d755fa0da676e3fa54c4abcf4db3ae38ce5bab13f773d3f0c106bbd6ab090ac866a06afe4083da4c8fc9366ffa7e690a7340dd89af6c16386abfa4153c157ee9439c6705bdd47a8442c71061416_640.jpg",
    title:"Some Random Title",
    wordcount:5456,
    timespent:2
  },
  {
    id:4,
    status:'active',
    image:"https://pixabay.com/get/gc0b11d755fa0da676e3fa54c4abcf4db3ae38ce5bab13f773d3f0c106bbd6ab090ac866a06afe4083da4c8fc9366ffa7e690a7340dd89af6c16386abfa4153c157ee9439c6705bdd47a8442c71061416_640.jpg",
    title:"Some Random Title",
    wordcount:6565,
    timespent:7
  }
]

const Dashboard = () => {
  return (
    <div className='bg-gray-400 p-4 max-w-6xl mx-auto'>
      <div className="top flex justify-center items-center gap-10 bg-wh">
        <div className="left-side w-16 h-16 rounded-full bg-orange-500 grid place-items-center">J</div>
        <div className="right-side">
          <h4 className='font-bold'>John Doe</h4>
          <div className='flex justify-center items-center gap-2'>
            <p>Age 6</p><span>.</span>
            <p>Student</p><span>.</span>
            <p>Melbourne,Australia</p>
          </div>
        </div>
      </div>
      <div className="middle flex justify-center items-center gap-3 my-7">
        <p className='flex justify-between items-center gap-1 bg-white rounded-full py-1 px-2 text-sm'>{DateIcon} <span>Joined: March 12,2024</span></p>
        <p className='flex justify-between items-center gap-1 bg-white rounded-full py-1 px-2 text-sm'>{PersonIcon} <span>Last Active: 1d ago</span></p>
      </div>
      <div className="bottom bg-white p-4">
        <div className="top flex justify-between items-center mb-3">
          <h2 className='text-2xl'>Projects</h2>
          <button className='flex justify-center items-center gap-2 text-sm bg-yellow-400 rounded-full px-2 py-1'>{PencilIcon}Create New Project</button>
        </div>
        <div className='flex justify-between items-center gap-3'>
          {
              projectsData.map((item)=><div key={item.id} className='w-1/4 border border-[rgba(0,0,0,0.2)] rounded-md'>
                <div className="top-bar py-1 px-2 flex justify-between items-center">
                  <div className='bg-green-200 py-1 px-2 rounded-md text-sm'>{item.status}</div>
                  <div className='font-bold'>...</div>
                  </div>
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="textual-content p-2">
                  <h3 className='text-lg'>{item.title}</h3>
                  <p className='text-purple-400'>Word Count : {item.wordcount}</p>
                  <p className='text-orange-400'>Word Count : {item.timespent}</p>
                </div>
              </div>)
            }
        </div>
          
      </div>
    </div>
  )
}

export default Dashboard