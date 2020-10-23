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
import Header from './Components/Header/Header';
import BestPractice from './Components/BestPractice/BestPractice';
import './App.css';

function App() {
  const styles={
    main: {
      display:'flex',
      flexDirection:'column',
      alignItems: 'center',
      //height: '100vh',
    }
  }
  return (
    <div className="App">
      <div style={styles.main}>
        <Header/>
      </div>
      
      <Switch> 
        <Route exact path='/' component={Welcome}/>
        <Route path ='/AboutMe' component={AboutMe}/>
        <Route path='/Portfolio' component={Portfolio}/>
        <Route path='/Bearfoot' component={Bearfoot}/>
        <Route path='/DiscoverEPass' component={DiscoverEPass}/>
        <Route path='/CarLogoQuiz' component={CarLogo}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/BestPractice' component={BestPractice}/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
