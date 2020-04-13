import React from 'react';

import '../styles/information.css';

import me from '../images/me.jpeg';
import php from '../images/php.png';
import react from '../images/react.png';
import java from '../images/java.png';
import ingles from '../images/ingles.png';
import js from '../images/js.png';
import mysql from '../images/mysql.png';
import cv from '../images/cv.png';
import cvpdf from '../images/cv.pdf'


const Information = () =>{
    return(
        <React.Fragment>

            <div className="container ">
                <h1 className="content-title">Mariana Loaiza Llano</h1>
                <div className="column ">
                    <div className="col-12 d-flex justify-content-center " >
                        <img src = {me} className="abautme__img-logo" />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <section className="information__me">
                            <h2 className="information__title">Informacion</h2>
                            <p className="information___paragraph">Actualmente estoy estudiando en el bootcamp de Academia Geek con énfasis en desarrollo Front-End. Cuento con conocimientos básicos en JS, React.js, php y Java. <br/> <br/>
                            Me gusta estar en constante aprendizaje, asumir nuevos retos que me permitan mejorar y ampliar mis capacidades.
                            Soy una persona responsable, respetuosa, dedicada, perseverante, receptiva y paciente. 
                            Con facilidad para el trabajo en equipo y manejo de relaciones interpersonales y adaptabilidad al cambio. </p>

                        </section>
                    </div>
                
                </div>
               
            </div>

            <div className="container ">
           
                <div className="row d-flex justify-content-center">
                <h1 className="conten-title">Estudios:</h1>
                    <div className="col-sm-12 stadies">
                    <h3 className="stadies__title"> Bootcam Frontend Developer</h3>
                        <p className="stadies__paragraph">Academia Geek 
                            Feb 2020 </p>
                            
                        <h3 className="stadies__title">Tecnica laboral en desarrollo de software</h3>
                            <p>Cesde</p>
                            
                        <h3 className="stadies__title">Tecnologia en gestion administrativa</h3>
                        <p className="stadies__paragraph">Instituto Tecnólogico Metropolitano</p>
            
                        
            
                        <h3 className="stadies__title">Secundaria</h3>
                        <p className="stadies__paragraph">Institucion educativa el salvador</p>
                        
                        
                        
                    </div>

                </div>
            </div>
                
            
            <div className="container ">
                 <h1 className="title">Habilidades basicas en:</h1>

                <div className="row col-12 d-flex justify-content-center">

                    <img src={php} className="skills__img"/>
                    <img src={java} className="skills__img"/>
                    <img src={react} className="skills__img"/>
                    <img src={js} className="skills__img"/>
                    <img src={mysql} className="skills__img"/>
                    <img src={ingles} className="skills__img"/>
                    
                </div>
             </div>

             <div className="container ">
                 <h1 className="title">CV:</h1>

                <div className="row col-12 d-flex justify-content-center">

                    <a href={cvpdf} target="blanck">
                        <img src={cv} className="cv__img"/>
                    </a>
                   
                    
                </div>
             </div>
            
        
        </React.Fragment>
    )
    
}

export default Information;