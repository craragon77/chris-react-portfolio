import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Welcome from './Components/Welcome/welcome';
import AboutMe from './Components/About-Me/About-Me';
import Portfolio from './Components/Portfolio/Portfolio';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import LandingPage from './Components/LandingPage/LandingPage';
import Bearfoot from './Components/Bearfoot/Bearfoot';
import DiscoverEPass from './Components/DiscoverEPass/DiscoverEPass';
import CarLogo from './Components/CarLogo/CarLogo';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/en/Welcome' component={Welcome}/>
        <Route path ='/en/AboutMe' component={AboutMe} />
        <Route path='/en/Portfolio' component={Portfolio}/>
        <Route path='/en/Bearfoot' component={Bearfoot}/>
        <Route path='/en/DiscoverEPass' component={DiscoverEPass}/>
        <Route path='/en/CarLogoQuiz' component={CarLogo}/>
        <Route path='/en/Contact' component={Contact}/>
        <Route component={PageNotFound}/>
      </Switch>
    </>
  );
}

export default App;
