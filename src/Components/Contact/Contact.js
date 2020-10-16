import React, {Component} from 'react';
import Resume from '../../resumes/Chris_Aragon_Resume_10_14_20.pdf'

export default class Contact extends Component{
    render(){
        return(
            <div>
                <h2>Contact Me</h2>
                <h4>Feel free to contact me any time<br/>I'd love to hear from you!</h4>
                <div>
                    <a href="malito:aragonchristopherray@gmail.com">Email</a>
                </div>
                <div>
                    <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
                <div>
                    <a href="https://github.com/craragon77" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/christopher-aragon/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        )
    }
}