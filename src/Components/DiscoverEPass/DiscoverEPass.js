import React, {Component} from 'react';
import snapshot from '../../pics/Discover-E-Pass-snapshot.jpg';
import './DiscoverEPass.css'

export default class DiscoverEPass extends Component{
    render(){
        return(
            <>
                <section>
                    <h4 id="app_title">National Parks Discover-E-Pass</h4><br/>
                    <div>
                        <a target="_blank" href="https://parks-client.vercel.app/" rel="noopener noreferrer"><img src={snapshot} alt='Discover-E-Pass snapshot' className="image-link"/></a>
                    </div>
                    <div>
                        <p id="what_is_it">
                        <a target="_blank" href="https://en.wikipedia.org/wiki/National_Park_Passport_Stamps" rel="noopener noreferrer">Inspired by the National Parks Passport</a>, the National Parks Discover-E-Pass is a program to "stamp" every national park, monument, and historic site that you have attended or wish to visit. 
                        I built this because I own a National Parks Passport, and I wanted to pay tribute to those who work hard to preserve the 490+ national parks and monuments around the country. 
                        The National Parks Discover-E-Pass is a program that aims to inspire others to visit and explore national parks. 
                        It is a full stack program made with React, Node.js, PostgreSQL, and CSS. 
                        Feel free to view the client code <a target="_blank" href="https://github.com/craragon77/National-Parks-Passport-Client" rel="noopener noreferrer">here</a> and the server code <a target="_blank" href="https://github.com/craragon77/National-Parks-Passport-Server" rel="noopener noreferrer">here</a>.
                        </p>
                    </div>
                </section>
                

            </>
        )
    }
}