import React, { useState } from 'react'


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
            </div>
        </div >
    )
}

export default Service