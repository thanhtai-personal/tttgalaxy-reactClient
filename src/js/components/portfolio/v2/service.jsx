import React from 'react'

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

const Service = (props) => {
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
                <div className='row' style={{ marginTop: '50px'}}>
                    <div className="col-xl-9">
                        adfjasdh
                    </div>
                    <div className="col-xl-3">
                        <h2 className="h4 mb-4">My skills</h2>
                        {listSkills.map((skill, index) => (<div className="progress-wrap mb-4" key={`skill-${index}`}>
                            <div className="d-flex">
                                <span style={  skill.isNote ? { color: 'red' } : {}}>{skill.name}</span>
                                <span className="ml-auto">{skill.percent}%</span>
                            </div>
                            <div className="progress rounded-0" style={{ height: '7px' }}>
                                <div className="progress-bar" role="progressbar" style={{ width: `${skill.percent}%` }} aria-valuenow={skill.percent} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service