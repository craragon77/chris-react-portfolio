import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Welcome from './Components/Welcome/welcome';
import AboutMe from './Components/About-Me/About-Me';
import Portfolio from './Components/Portfolio/Portfolio'

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path ='/AboutMe' component={AboutMe} />
        <Route path='/Portfolio' component={Portfolio} />
      </Switch>
      
    </>
  );
}

export default App;
