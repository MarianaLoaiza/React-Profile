import React, { Fragment } from 'react';

import '../styles/information.css';

import me from '../images/me.jpeg';

const Information = () =>{
    
        return(

            <React.Fragment>
                <div className="container">
                
                    <h1 className="title">Abaut me:</h1>

           
                     <div className="abautme">

                        <div className="abautme__img" >
                            <img src = {me} className="abautme__img-logo" />
                        </div>
        
                    <div className="information">
                     
                    <div className="information__me">
                        <h2 className="information__title">Information</h2>
                            <p className="information___paragraph">I am a software development student, I am passionate about technology and administration. I love the challenges to learn,
                                If I have the possibility to teach, I do not hesitate to do so. I like to share my knowledge.
                                I have basic knowledge in: Mobile devices, HTML5, CSS3 and JavaScript.
                                
                                I love traveling and animals, I like topics that challenge me professionally as well as participate in
                                Technological communities to meet more people related to the environment.</p>

                    </div>
                    </div>
                </div>

                <div className="stadies">  
                
                    <h3 className="stadies__title"> Bootcam Frontend Developer</h3>
                    <p className="stadies__paragraph">Academia Geek 
                        Feb 2020 </p>
                
                    <h3 className="stadies__title">Technical-labour in developer software</h3>
                    <p>Cesde</p>
                
                    <h3 className="stadies__title">Administratva Management Technology</h3>
                    <p className="stadies__paragraph">Instituto Tecnólogico Metropolitano</p>

                    <h3 className="stadies__title">High School</h3>
                     <p className="stadies__paragraph">Institucion educativa el salvador</p>
                
                 </div> 
    
            </div>
            
            </React.Fragment>
            
    )
    
}

export default Information;