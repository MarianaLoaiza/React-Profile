import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Layout from './Layout';
import Abautme from '../pages/Abautme';
 import FirstPage from '../pages/FirstPage';
 import NotFound from '../pages/NotFound';
 import Profile from '../pages/Profile';
// import Home from '../pages/Home';
// import Particulas from './Particulas';




function App() {
   return(
      
       <BrowserRouter>
     

            <Layout>

            <Switch>
            <Route exact path="/Abautme" component ={Abautme} />
            <Route exact path="/First/Page" component ={FirstPage} />
            <Route exact path="/Profile" component ={Profile} />
            <Route component={NotFound} />
            </Switch>
     
            </Layout>
     
       </BrowserRouter>
   )

}

export default App;