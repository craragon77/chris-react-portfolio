import React, {Component} from 'react';
import '../DiscoverEPass/DiscoverEPass';
import {Link} from 'react-router-dom';
import DiscoverEPass from '../DiscoverEPass/DiscoverEPass';
import Bearfoot from '../Bearfoot/Bearfoot';
import CarLogoQuiz from '../CarLogo/CarLogo';

export default class Portfolio extends Component{
    render(){
        return(
            <>
                <h1>Click on any of the following to learn about my work</h1>
                <DiscoverEPass/>
                <Bearfoot/>
                <CarLogoQuiz/>
            </>
        )
    }
}