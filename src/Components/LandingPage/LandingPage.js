import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import english from '../../pics/english.jpg';
import spanish from '../../pics/spanish.jpg';

export default class LandingPage extends Component{

    render(){
        return(
            <>
                <main>
                    <div>
                        <h1>Welcome</h1><br/>
                        <h3>Please select your language</h3><br/>
                        <Link to="/en/Welcome"><img alt="American Flag" src={english}/></Link>
                    </div>
                    <dv>
                        <h1>Bienvenidos</h1>
                        <h3>Por favor elija su idoma</h3>
                        <img alt="Mexican Flag" src={spanish}/>
                    </dv>
                </main>
            </>
        )
    }
}