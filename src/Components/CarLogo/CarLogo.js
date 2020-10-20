import React, {Component} from 'react';
import CarLogoPic from '../../pics/car_logo_quiz.jpg';
import './CarLogo.css';

export default class CarLogoQuiz extends Component{
    render(){
        return(
            <section>
                <h4>Car Logo Quiz</h4>
                <a target="_blank" href="https://craragon77.github.io/CarLogoQuiz/" rel="noopener noreferrer"><img src={CarLogoPic} alt='car logo quiz' className="carlogo-link"/></a>
                <div>
                    <p>
                    This quick, fun quiz tests your knowledge of car logos. 
                    I made this program after not knowing a single answer in a "Name That Car Logo" category on Jeopardy. 
                    This program is for anyone who is interested in learning more about car logos and how many different brands there really are. 
                    Built using Javascript, jQuery, HTML5, and CSS. Feel free to view the code <a target="_blank" href="https://github.com/craragon77/CarLogoQuiz" rel="noopener noreferrer">here</a> .
                    </p>
                </div>
            </section>
        )
    }
}