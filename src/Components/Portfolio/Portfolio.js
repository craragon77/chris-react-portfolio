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
                <div className="menu">
                    <Link to="/DiscoverEPass">Discover-E-Pass (full stack program)</Link>
                </div>
                <hr/>
                <div className="menu">
                    <Link to="/Bearfoot">Bearfoot (client-side program)</Link>
                </div>
                <hr/>
                <div className="menu">
                    <Link to="/BestPractice">Best Practice (full stack program)</Link>
                    <hr />
                </div>
                <div className="menu">
                    <Link to="/CarLogoQuiz">Car Logo Quiz (client-slide program)</Link>
                </div>
                <hr/>
            </>
        )
    }
}