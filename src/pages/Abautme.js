import React from 'react';



import  Information from '../components/Information';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




import '../styles/abautme.css'






class Abautme extends React.Component{
    
    render(){
        return(
            <React.Fragment>

            <Navbar />
 

            <div className="hero">
                   
                <h1 className="hero__welcome">Bienvenido a <br/> mi portafolio</h1>
            </div> 

            <Information/>

           


           <Footer/>


            </React.Fragment>
        )
    }
}

export default Abautme;