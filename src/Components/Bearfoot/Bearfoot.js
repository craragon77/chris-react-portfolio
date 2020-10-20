import React, {Component} from 'react';
import Bearfoot_Pic from '../../pics/Bearfoot-snapshot.jpg';
import './Bearfoot.css';

export default class Bearfoot extends Component{
    render(){
        return(
                <section htmlFor="bearfoot">
                    <h4>Bearfoot</h4>
                    <a target="_blank" href="https://craragon77.github.io/hiking-program/" rel="noopener noreferrer"><img src={Bearfoot_Pic} alt="Bearfoot snapshot" className="bearfoot-link"/></a>
                    <div>
                        <p><a target='_blank' href="https://github.com/craragon77/hiking-program" rel="noopener noreferrer">Bearfoot</a> is a program designed to find hiking trails near you.
                        Just enter your address, town, zip code, or coordinates to explore different green spaces anywhere in the United States.
                        I made Bearfoot because people forget that, wherever you are in the United States, you are always close to green space or to the great outdoors, and Bearfoot is perfect for those who love hiking and the outdoors as much as I do. 
                        Bearfoot was made with Javascript, jQuery, Restful APIs, HTML5, and CSS. You can find view the code <a target="_blank" href="https://github.com/craragon77/hiking-program" rel="noopener noreferrer">here</a>.</p>
                    </div>
                </section>
        )
    }
}