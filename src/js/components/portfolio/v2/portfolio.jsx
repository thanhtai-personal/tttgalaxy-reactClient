// import React from 'react'

// import { Timeline, TimelineEvent } from 'react-event-timeline'

// const listSkills = [
//   {
//     name: 'ReactJS',
//     percent: 90,
//     isNote: true
//   },
//   {
//     name: 'HTML/CSS/Jquery',
//     percent: 90,
//     isNote: true
//   },
//   {
//     name: '.Net Core',
//     percent: 50
//   },
//   {
//     name: 'ExpressJS',
//     percent: 50
//   },
//   {
//     name: 'PostgresSQL',
//     percent: 60
//   },
//   {
//     name: 'Jira',
//     percent: 70
//   },
//   {
//     name: 'Trello',
//     percent: 70
//   },
//   {
//     name: 'Git',
//     percent: 90,
//     isNote: true
//   },
//   {
//     name: 'Heroku',
//     percent: 50
//   },
//   {
//     name: 'AWS',
//     percent: 50
//   },
//   {
//     name: 'Docker',
//     percent: 50
//   }
// ]

// const experiences = [
//   {
//     title: 'Now',
//     createdAt: new Date().toDateString(),
//     content: 'Titan Technology',
//     style: {
//       boxShadow: '0 0 6px 1px #BD3B36'
//     },
//     cardHeaderStyle: {
//       backgroundColor: 'lightblue'
//     }
//   },
//   {
//     title: 'TiTan Technology',
//     createdAt: '07/01/2019',
//     content: 'Fullstack developer with .Net Core and ReactJS'
//   },
//   {
//     title: 'KoLabs LLC',
//     createdAt: '01/04/2017',
//     content: 'Frontend developer with ReactJS'
//   },
//   {
//     title: 'CityNow Company',
//     createdAt: '01/10/2016',
//     content: 'FullStack developer with Scala and ReactJS'
//   },
//   {
//     title: 'Gameloft Company',
//     createdAt: '01/10/2015',
//     content: 'Game Fresher with Java/c++'
//   },
//   {
//     title: 'Fujinet Company',
//     createdAt: '01/07/2015',
//     content: 'Web intern with java'
//   },
//   {
//     title: 'Ho Chi Minh City University of Science',
//     createdAt: '02/09/2011',
//     content: 'Specialized in software engineering',
//     icon: <i className="fas fa-school"></i>,
//     cardHeaderStyle: {
//       backgroundColor: 'lightgreen'
//     }
//   }
// ]

// const Portfolio = (props) => {
//   return (
//     <React.Fragment>
//       <div className='portfolio_area' id='skills'>
//         <div className='container'>
//           <div className='row' style={{ marginTop: '50px' }}>
//             <div className="col-xl-9">
//               <div style={{ backgroundColor: 'rgb(255, 234, 234)', boxShadow: '0px 0px 10px 10px' }}>
//                 <Timeline>
//                   <p style={{ fontSize: 26, textAlign: 'center', paddingBottom: '15px', fontWeight: '600' }}>EXPERIENCES</p>
//                   {experiences.map((exp, index) => (
//                     <TimelineEvent
//                       key={`time-line-event-${index}`}
//                       title={exp.title}
//                       createdAt={exp.createdAt}
//                       icon={exp.icon || <i className='fas fa-briefcase' />}
//                       iconColor={exp.iconColor || "#757575"}
//                       buttons={exp.button || <i />}
//                       container={exp.container || "card"}
//                       style={{
//                         boxShadow: '0 0 0 0',
//                         border: '1px solid #777',
//                         borderRadius: 3,
//                         fontSize: '14px', color: 'black', fontWeight: '400',
//                         ...exp.style
//                       }}
//                       cardHeaderStyle={{ fontSize: '16px', color: 'black', fontWeight: '600', ...exp.cardHeaderStyle }}
//                     >
//                       {exp.content}
//                     </TimelineEvent>
//                   ))}
//                 </Timeline>
//               </div>

//             </div>
//             <div className="col-xl-3" style={{ borderRight: 'double 4px darkblue', borderTop: 'solid 4px darkblue', backgroundColor: 'rgb(255, 234, 234)' }}>
//               <h2 className="h4 mb-4" style={{ paddingTop: '15px' }}>SKILLS</h2>
//               {listSkills.map((skill, index) => (
//                 <div className="progress-wrap mb-4 skill-item" key={`skill-${index}`} >
//                   <div className="d-flex">
//                     <span style={skill.isNote ? { color: 'red' } : {}}>{skill.name}</span>
//                     <span className="ml-auto">{skill.percent}%</span>
//                   </div>
//                   <div className="progress rounded-0" style={{ height: '7px' }}>
//                     <div className="progress-bar" role="progressbar" style={{ width: `${skill.percent}%` }} aria-valuenow={skill.percent} aria-valuemin="0" aria-valuemax="100"></div>
//                   </div>
//                 </div>))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>

//   )
// }

// export default Portfolio