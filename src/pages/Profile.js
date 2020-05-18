import React from 'react';

import '../styles/profile.css'

import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


import landingPage from '../images/langing-page.png'
import documentacion from '../images/documentacion.png'
import tributePage from '../images/tributoPage.png'
import job from '../images/job.PNG'
import apiGithub from '../images/git.png'
import wikipedia from '../images/wikipedia.PNG'
import instagram from '../images/cloneInstagram.PNG'




class Profile extends React.Component{
    constructor(props){
        super(props);

       this.state = {
            data:[]
        }
    }
   

    componentDidMount(){
       this.timeoutId = setTimeout(() => {
            this.setState({
                data:[
                    {
                        id: '2de30c42-9deb-40fc-a41f-05e62b5939a1',
                        img: landingPage,
                        projectName: 'Landing-Page',
                        lenguaje: 'HTML y CSS Layout',
                        description: 'Clone Netflix ',
                        link:
                        'https://marianaloaiza.github.io/CSS/Landing-Page/',
                        github:'https://github.com/MarianaLoaiza/CSS/tree/master/Landing-Page',
                      },
                      {
                        id: 'd00d3614-101a-44ca-b6c2-0be075aeed32',
                        img: documentacion,
                        projectName: 'Documentacion',
                        lenguaje: 'HTMl y CSS',
                        description: 'Documentacion sobre poo.',
                        link:
                        'https://marianaloaiza.github.io/CSS/documentacion/index2.html',
                        github:'https://github.com/MarianaLoaiza/CSS/tree/master/documentacion',
                      },
                      {
                        id: '63c03386-33a2-4512-9ac1-354ad7bec5e3',
                        img: tributePage,
                        projectName: 'Tributo-page',
                        lenguaje: 'HTML y CSS',
                        description:'Pagina tributo a Margaret Hamilton.',
                        link:
                        'https://marianaloaiza.github.io/CSS/tributo-page/',
                        github:'https://github.com/MarianaLoaiza/CSS/tree/master/tributo-page',

                    },

                    {
                        id: '2de30c42-9deb-40fc-a41f-05e62b5939a90',
                        img: wikipedia,
                        projectName: 'cloneWikipedia',
                        lenguaje: 'HTML y CSS ',
                        description: 'Clone  del mundo de wikipedia ',
                        link:
                        'https://marianaloaiza.github.io/CSS/cloneWikipedia/',
                        github:'https://github.com/MarianaLoaiza/CSS/tree/master/cloneWikipedia',
                      },

                      {
                        id: '2de30c42-9deb-40fc-a41f-05e62b5939a99',
                        img: instagram,
                        projectName: 'cloneInstagram',
                        lenguaje: 'HTML y CSS ',
                        description: 'Clone de instagram ',
                        link:
                        'https://marianaloaiza.github.io/CSS/cloneInstagram/',
                        github:'https://github.com/MarianaLoaiza/CSS/tree/master/cloneInstagram',
                      },

                    {
                        id: '63c03386-33a2-4512-9ac1-354ad7bec5e4',
                        img: job,
                        projectName: 'App_Your_Job',
                        lenguaje: 'JavaScript',
                        description:'Registro de trabajadores.',
                        link:
                        'https://flamboyant-agnesi-005fc8.netlify.app/showcard',
                        github:'https://github.com/MarianaLoaiza/App_Your_Job',

                    },

                    {
                        id: '63c03386-33a2-4512-9ac1-354ad7bec5e6',
                        img: apiGithub,
                        projectName: 'Api_github',
                        lenguaje: 'JavaScript',
                        description:'Repositorios de usuarios en github',
                        link:
                        'https://optimistic-thompson-369b16.netlify.app/',
                        github:'https://github.com/MarianaLoaiza/Api-github/blob/master/src/components/Pagination.js',

                    },

                    
                ]
            })
        }, 1000 ) }

        componentDidUpdate(prevProps, prevState){
           console.log({
            prevProps: prevProps, prevState: prevState
           })

           console.log({
               props: this.props,
               state: this.state
           })
        }

        componentWillUnmount(){
            clearTimeout(this.timeoutId)
        }
    render(){
        return(
            <React.Fragment>
                <Navbar />

                <section>
                <h1 className="profile__title">Mis proyectos ♡ </h1>
               
                </section>
                
               
                 <Cards date={this.state.data}/>

                 

                <Footer />
            </React.Fragment>
        )
    }
}
export default Profile;