// Complete React Code 
import React from 'react'; 
// import Particles from 'react-particles-js'; 

import './styles/home.css';
import logo from './images/log02.png';



class Home extends React.Component { 
    render(){
      return ( 

        <React.Fragment>
          <div className="App"> 
                
            <div className="particles">

              {/* <Particles 
        
                params={{ 

                  particles: {
                    number: {
                      value: 400,
                      density: {
                      enable: true,
                      value_area: 800
                      }
                    },

                    color: {
                      value: '#fff'
                      },

                      size: {
                      value: 20,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 20,
                        size_min: 0,
                        sync: false
                      }
                      },

                      line_linked: {
                      enable: true,
                      distance: 100,
                      color: '#fff',
                      opacity: 1,
                      width: 1
                      },
                      move: {
                      enable: true,
                      speed: 2,
                      direction: 'none',
                      random: false,
                      straight: false,
                      out_mode: 'out',
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 3000,
                        rotateY: 3000
                      }
                      }, 
                              
                },

                }} 
              />  */}
            </div>

            <div className="particles__logo-img">
              <img src={logo}  />
            </div>

          </div> 
              </React.Fragment>
        ); 
      } 

    }

export default Home; 