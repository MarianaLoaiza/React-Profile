import React from 'react';



function Layout(props){

    return( 
        <React.Fragment>
            {/* <Navbar /> */}
            {/* <Footer/> */}
           
          { props.children}

         
        </React.Fragment>
    ) 

}

export default Layout;