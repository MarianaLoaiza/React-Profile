import React, { Fragment } from 'react';

import github from '../images/github.png';
import instagram from '../images/instagram.png';
import linkedlin from '../images/linkedlin.png';
import gmail from '../images/gmail.png';

import '../styles/footer.css'



const Footer = () =>{
    
        return(
            
            <React.Fragment>
                <footer className="footer">
                    <h1 className="footer__h1">Contact me </h1>
                        <div className="container-footer"> 
                    
                            <div className="container__img">
                                <a href="https://github.com/MarianaLoaiza" target="blank"><img src={github} className="container__img-github" /></a>
                                <a href="https://www.linkedin.com/in/marianaloaiza98/"target="blank">  <img src={linkedlin} className="container__img-linkedlin"  /></a>
                                <a href="https://www.instagram.com/mariana.1516/" target="blank"><img src={instagram} className="container__img-instagram" target="blank"/></a>
                                <a href="mailto:mariloaiza20@gmail.com"><img src={gmail} className="container__img-gmail"  /></a>
                            
                             </div>

                        <div >
                            <h5 className="footer-by">© 2020 by Mariana Loaiza.</h5>
                        </div>
                
                        </div>
                </footer>
            </React.Fragment>
        )
    
}

export default Footer; 