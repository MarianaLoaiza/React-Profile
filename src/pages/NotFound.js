import React from 'react';


import '../styles/error.css'


import { Link } from 'react-router-dom';
class NotFound extends React.Component{
    render(){
        return(
            <div className="container-error">
                <p className="container-error__titulo"> 404 Not found </p>
                <Link to="/First/Page" className="container-error__btn">Home</Link>
            </div>
        )
    }
}

export default NotFound;