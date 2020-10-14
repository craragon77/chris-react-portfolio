import React, {Component} from 'react';
import '../DiscoverEPass/DiscoverEPass';
import DiscoverEPass from '../DiscoverEPass/DiscoverEPass';
import Bearfoot from '../Bearfoot/Bearfoot';

export default class Portfolio extends Component{
    render(){
        return(
            <>
                <p>Check out my featured programs</p>
                <DiscoverEPass />
                <Bearfoot />
            </>
        )
    }
}