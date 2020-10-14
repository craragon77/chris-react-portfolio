import React, {Component} from 'react';
import Bearfoot_Pic from '../../pics/Bearfoot-snapshot.jpg';

export default class Bearfoot extends Component{
    render(){
        return(
            <>
                <section htmlFor="bearfoot">
                    <h4>Bearfoot</h4>
                    <img src={Bearfoot_Pic} alt="Bearfoot snapshot"/>
                    <div>
                        <a target='_blank' href="https://github.com/craragon77/hiking-program">Bearfoot</a> is an app that finds hiking trails and green spaces near you! Just enter your address, 
                        town or city, zip code, or coordinates and explore the natural wonders near you! Built using 
                        Javascript, HTML5, and CSS. 
                    </div>
                </section>
            </>
        )
    }
}