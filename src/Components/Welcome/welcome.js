import React, {Component} from 'react';
import GoodPic from '../../pics/really_good_pic_of_me.jpeg';
import {Link} from 'react-router-dom';
import './welcome.css'

export default class Welcome extends Component{
    render(){
        return(
            <div>
                <div>
                    <h1>Hi, I'm Chris Aragon<br/> a full stack developer in the DC Area</h1>
                </div>
                <div>
                    <img src={GoodPic} alt="Chris Aragon" className="chris-aragon"/>
                </div>
                <div className="links">
                    <Link to="/en/Portfolio">View Portfolio</Link>
                    <Link to="/en/Contact">Contact Me Directly</Link>
                </div>
            </div>
        )
    }
}