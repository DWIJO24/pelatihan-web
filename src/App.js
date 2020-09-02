import React from 'react';
import './App.css';
import Register from './Register';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from './Home';

/*import { Button } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
*/
//import { Button, Header, Segment, Form,  Label } from 'semantic-ui-react';


function App() {
  return (
    <Router>
     <Switch>
       <Route exact path='/'>
         <Home/>
       </Route>
       <Route path='/register'>
         <Register/>
       </Route>
     </Switch>
   </Router>  
    
    );
}

export default App;
