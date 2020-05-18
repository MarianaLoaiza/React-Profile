import React from 'react';
//sdcbsjdbcjsbdcdj
import '../styles/card.css';
import github from '../images/github.png';

class Cards extends React.Component{

    render(){
        return( 

            <React.Fragment>
                <div className="container">

                    <div className="row">

                        {this.props.date.map((date) => {

                            return (

                                <div key={date.id}className="card col-12" >

                                    <div className="card-body ">
                                        <p className="card-title ">{date.projectName}</p>
                                        <img className="text-center" src={date.img} width="280px" alt="profile" />
                                        <p className="card-text ">{date.lenguaje}</p>
                                        <p>{date.description}</p>
                                        <a href={date.link} className="btn btn-primary " target="blank">View</a>
                                        <a href={date.github} target="blank"><img src={github} width="30px" height="30px" alt="github"/></a>
                                    </div>
                                
                                
                            
                                 </div>
                        )
                    })}
                    </div>
                </div>
            </React.Fragment>
          
        )
    }


}

export default Cards;