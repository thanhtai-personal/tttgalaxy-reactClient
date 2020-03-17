// import React, { useState } from 'react'

// const projects = [
//   {
//     name: 'TankVN',
//     url: 'https://www.youtube.com/watch?v=LwJa69CBARk',
//     type: 'Game',
//     language: 'Microsoft XNA 4.0',
//     description: 'A classical video game - Battle city',
//     company: 'Ho Chi Minh City University of Science'
//   },
//   {
//     name: 'Online Shop',
//     url: 'https://www.youtube.com/watch?v=QkPch76obeM',
//     type: 'Web App',
//     language: 'ASP.net MVC 4 - LINQ database',
//     description: 'A commercial website - shopping online',
//     company: 'Gameloft company'
//   },
//   {
//     name: 'Pro Evolution Soccer 2015',
//     url: '#',
//     type: 'Game',
//     language: 'java/c++',
//     description: 'A sport game',
//     company: 'Gameloft company'
//   },
//   {
//     name: 'Delorean',
//     url: '#',
//     type: 'ERP outsourcing',
//     language: 'Scala & ReactJS',
//     description: 'ERP',
//     company: 'CityNow company'
//   },
//   {
//     name: 'Swallow',
//     url: 'http://citynow.vn/citynowsa',
//     type: 'Web Product',
//     language: 'Scala & ReactJS',
//     description: 'Vietnam-Japan job brokerage',
//     company: 'CityNow company'
//   },
//   {
//     name: 'Maestro',
//     url: '#',
//     type: 'Web',
//     language: '.Net & ReactJS',
//     description: 'Event organization and management for celebrities.',
//     company: 'KoLabs company'
//   },
//   {
//     name: 'WorkID',
//     url: '#',
//     type: 'Web',
//     language: '.Net & ReactJS',
//     description: 'Finding user profile for jobs',
//     company: 'KoLabs company'
//   },
//   {
//     name: '7Sport and UFA',
//     url: '#',
//     type: '2 Web',
//     language: '.Net & ReactJS',
//     description: 'Sports betting page',
//     company: 'KoLabs company'
//   },
//   {
//     name: 'Auvenir',
//     url: '#',
//     type: 'Web',
//     language: '.Net & ReactJS',
//     description: 'Engagement management',
//     company: 'TiTan Technology'
//   }
// ]

// const Counter = (props) => {

//   const [ projectData, setProjectData ] = useState(null)

//   return (
//     <div className="counter_area" id='projects'>
//       <div className="container" style={{ backgroundColor: 'rgb(255, 234, 234)' }}>
//         <div className="row">
//           <div className='col-xl-12 text-center' style={{paddingTop: '25px'}}>
//             <p style={{ fontSize: '36px', fontWeight: '600' }}> PROJECTS </p>
//           </div>
//         </div>
//         <div className='row'><div className='col-xl-12 text-center'>&nbsp;</div></div>
//         <div className="row">
//           <div className="col-xl-12 col-md-12 projects">
//             <ul>
//               {projects.map((proj, index) => (
//                 <li title={proj.url} key={`project-${index}`} onMouseOver={() => { setProjectData(proj) }}>
//                   <a href={proj.url || '#'} target='_blank' rel="noopener noreferrer">
//                     {proj.name}<br/>
//                     <i className={proj.type.indexOf('game') !== -1 ? 'fas fa-gamepad' : 'fad fa-browser'}></i>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//             <div className='row'><div className='col-xl-12 text-center' style={ projectData ? { color: 'violet'} : { display: 'none' }}>
//               <span>{projectData ? projectData.company : ''}</span> <br />
//               <span>{projectData ? projectData.description : ''}</span>
//             </div>
//           </div>
//         <div className='row'><div className='col-xl-12 text-center'>&nbsp;</div></div>
//       </div>
//     </div>
//   )
// }

// export default Counter