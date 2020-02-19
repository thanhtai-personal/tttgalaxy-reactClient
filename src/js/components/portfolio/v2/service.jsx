import React, { useState } from 'react'
import { Timeline, TimelineEvent } from 'react-event-timeline'

const listSkills = [
    {
        name: 'ReactJS',
        percent: 90,
        isNote: true
    },
    {
        name: 'HTML/CSS/Jquery',
        percent: 90,
        isNote: true
    },
    {
        name: '.Net Core',
        percent: 50
    },
    {
        name: 'ExpressJS',
        percent: 50
    },
    {
        name: 'PostgresSQL',
        percent: 60
    },
    {
        name: 'Jira',
        percent: 70
    },
    {
        name: 'Trello',
        percent: 70
    },
    {
        name: 'Git',
        percent: 90,
        isNote: true
    },
    {
        name: 'Heroku',
        percent: 50
    },
    {
        name: 'AWS',
        percent: 50
    },
    {
        name: 'Docker',
        percent: 50
    }
]

const experiences = [
    {
        title: 'Now',
        createdAt: new Date().toDateString(),
        content: 'Titan Technology',
        style: {
            boxShadow: '0 0 6px 1px #BD3B36'
        },
        cardHeaderStyle: {
            backgroundColor: 'lightblue'
        }
    },
    {
        title: 'TiTan Technology',
        createdAt: '07/01/2019',
        content: 'Fullstack developer with .Net Core and ReactJS'
    },
    {
        title: 'KoLabs LLC',
        createdAt: '01/04/2017',
        content: 'Frontend developer with ReactJS'
    },
    {
        title: 'CityNow Company',
        createdAt: '01/10/2016',
        content: 'FullStack developer with Scala and ReactJS'
    },
    {
        title: 'Gameloft Company',
        createdAt: '01/10/2015',
        content: 'Game Fresher with Java/c++'
    },
    {
        title: 'Fujinet Company',
        createdAt: '01/07/2015',
        content: 'Web intern with java'
    },
    {
        title: 'Ho Chi Minh City University of Science',
        createdAt: '02/09/2011',
        content: 'Specialized in software engineering',
        icon: <i class="fas fa-school"></i>,
        cardHeaderStyle: {
            backgroundColor: 'lightgreen'
        }
    }
]

const Service = (props) => {

    const [progress, setProgress] = useState(50);

    return (
        <div className='service_area' id='service'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-12'>
                        <p className='short-des'>
                            <span className="firstcharacter">I</span> am a highly motivated front end who loves creating apps and bringing ideas into life.
                            I'm not a good communicated person but passion and focusing on source code more than talk to other people.
                        If you want me for your company or just to make friend with me, you can find me in <a style={{ cursor: 'pointer', color: 'blue' }} onClick={() => {
                                let elmnt = document.getElementById('about');
                                elmnt && elmnt.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
                            }}>contact</a> or invite me to play football or dota2. I will be an open person while i am not in coding mode.
			        </p>
                    </div>
                </div>
                <div className='row' style={{ marginTop: '50px' }}>
                    <div className="col-xl-9">
                        <div style={{ backgroundColor: 'rgb(255, 234, 234)', boxShadow: '0px 0px 10px 10px' }}>
                            <Timeline>
                                <p style={{ fontSize: 26, textAlign: 'center', paddingBottom: '15px', fontWeight: '600'}}>EXPERIENCES</p>
                                {experiences.map((exp, index) => (
                                    <TimelineEvent
                                        key={`time-line-event-${index}`}
                                        title={exp.title}
                                        createdAt={exp.createdAt}
                                        icon={exp.icon || <i className='fas fa-briefcase' />}
                                        iconColor={exp.iconColor || "#757575"}
                                        buttons={exp.button || <i />}
                                        container={exp.container || "card"}
                                        style={{
                                            boxShadow: '0 0 0 0',
                                            border: '1px solid #777',
                                            borderRadius: 3,
                                            fontSize: '14px', color: 'black', fontWeight: '400',
                                            ...exp.style
                                        }}
                                        cardHeaderStyle={{fontSize: '16px', color: 'black', fontWeight: '600', ...exp.cardHeaderStyle }}
                                    >
                                        {exp.content}
                                    </TimelineEvent>
                                ))}
                            </Timeline>
                    </div>

                </div>
                <div className="col-xl-3" style={{ borderRight: 'double 4px darkblue', borderTop: 'solid 4px darkblue', backgroundColor: 'rgb(255, 234, 234)' }}>
                    <h2 className="h4 mb-4" style={{paddingTop: '15px'}}>SKILLS</h2>
                    {listSkills.map((skill, index) => (
                    <div className="progress-wrap mb-4 skill-item" key={`skill-${index}`} >
                        <div className="d-flex">
                            <span style={skill.isNote ? { color: 'red' } : {}}>{skill.name}</span>
                            <span className="ml-auto">{skill.percent}%</span>
                        </div>
                        <div className="progress rounded-0" style={{ height: '7px' }}>
                            <div className="progress-bar" role="progressbar" style={{ width: `${skill.percent}%` }} aria-valuenow={skill.percent} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
        </div >
    )
}

export default Service