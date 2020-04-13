import React from 'react';

import '../styles/profile.css'

import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


import landingPage from '../images/langing-page.png'
import documentacion from '../images/documentacion.png'
import tributePage from '../images/tributoPage.png'

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
                        id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                        img: landingPage,
                        projectName: 'Landing-Page',
                        lenguaje: 'HTML y CSS',
                        link:
                        'https://marianaloaiza.github.io/CSS/Landing-Page/',
                        github:'https://github.com/MarianaLoaiza/CSS/tree/master/Landing-Page',
                      },
                      {
                        id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                        img: documentacion,
                        projectName: 'Documentacion',
                        lenguaje: 'HTMl y CSS',
                        link:
                        'https://marianaloaiza.github.io/CSS/documentacion/index2.html',
                        github:'https://github.com/MarianaLoaiza/CSS/tree/master/documentacion',
                      },
                      {
                        id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                        img: tributePage,
                        projectName: 'Tributo-page',
                        lenguaje: 'HTML y CSS',
                        link:
                        'https://marianaloaiza.github.io/CSS/tributo-page/',
                        github:'https://github.com/MarianaLoaiza/CSS/tree/master/tributo-page',

                    },
                ]
            })
        }, 3000 ) }

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

                <h1 className="profile__title">Visita mi perfil en Github </h1>
                
               
                 <Cards date={this.state.data}/>

                 

                <Footer />
            </React.Fragment>
        )
    }
}
export default Profile;