import React, {Component} from 'react';
import BestPracticeScreenShot from '../../pics/BestPractice2.jpg';
import './BestPractice.css';

export default class BestPractice extends Component{
    render(){
        return(
            <section className="BestPractice-Container">
                <h4>Best Practice</h4>
                <div>
                    <a target="_blank" href="https://best-practice-client.vercel.app/" rel="noopener noreferrer"><img src={BestPracticeScreenShot} alt="best practice screenshot + link" className="BestPracticePic"/></a>
                </div>
                <div className="BestPractice_Textbox">
                    <p>
                        Best Practice is a full stack program built to better oragnize musician's practice time. 
                        Users are invited to log the date and time, as well as add notes about their practice sessions, and Best Practice tracks these trends over time.
                        As a classical musician myself, I was interested in making a program to better regiment how we practice by knowing what songs need the most attention.
                        In other words, Best Practice makes your practice time smarter and better organized so you can improve. 
                        Developed using React, Javascript, Node.js, PostgreSQL, Mocha, Chai, and CSS. You can find the client repo 
                        <a href="https://github.com/craragon77/Best-Practice-Client" target="_blank" rel="noopener noreferrer"> here</a> and the server repo <a href="https://github.com/craragon77/Best-Practice-Server" target="_blank" rel="noopener noreferrer">here</a>
                    </p>
                </div>
            </section>
        )
    }
}