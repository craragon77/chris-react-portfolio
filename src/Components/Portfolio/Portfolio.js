import React, {Component} from 'react';
import '../DiscoverEPass/DiscoverEPass';
import {Link} from 'react-router-dom';
import DiscoverEPass from '../DiscoverEPass/DiscoverEPass';
import Bearfoot from '../Bearfoot/Bearfoot';
import CarLogoQuiz from '../CarLogo/CarLogo';
import './Portfolio.css'

export default class Portfolio extends Component{
    render(){
        return(
            <>
                <h1>Portfolio</h1>
                <h3>Please feel free to explore and learn about my work</h3>
                <div>
                    <Link to="/DiscoverEPass">Discover-E-Pass</Link>
                </div>
                <hr/>
                <div>
                    <Link to="/Bearfoot">Bearfoot</Link>
                </div>
                <hr/>
                <div>
                    <Link to="/BestPractice">Best Practice</Link>
                    <hr />
                </div>
                <div>
                    <Link to="/CarLogoQuiz">CarLogoQuiz</Link>
                </div>
                <hr/>
            </>
        )
    }
}