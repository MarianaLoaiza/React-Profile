import React from 'react';

  
  import Home from '../Home';
  import Navbar from '../components/Navbar';

  
 

class FirstPage extends React.Component{
    render(){
        return(
            <React.Fragment>  
                
                <Navbar/>
                <Home />
            
            </React.Fragment>
        )
    }

}

export default FirstPage;