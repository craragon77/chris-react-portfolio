import React, {Component} from 'react';
import GoodPic from '../../pics/really_good_pic_of_me.jpeg';
import {Link} from 'react-router-dom';
import AboutMe from '../About-Me/About-Me'
import './welcome.css'

export default class Welcome extends Component{
    render(){
        return(
            <>
            <div className="welcome-container">
                <div className="welcome-text">
                    <h1 className="Hi">Hi, I'm <span className="my-name">Chris Aragon</span><br/> a full stack developer in the DC Area</h1>
                </div>
                <div className="welcome-img">
                    <img src={GoodPic} alt="Chris Aragon" className="chris-aragon"/>
                </div>
            </div>
            <hr/>
            <AboutMe/>
            </>
        )
    }
}