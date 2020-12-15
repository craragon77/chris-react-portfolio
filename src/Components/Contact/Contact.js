import React, {Component} from 'react';
import Resume from '../../resumes/Chris Aragon Resume (ATS-Friendly) 12_10_20.pdf'
import './Contact.css';
import email from '../../pics/email2.jpg';
import resume from '../../pics/resume.jpg';
import linkedin from '../../pics/linkedin.jpg';
import github from '../../pics/github3.png';

export default class Contact extends Component{
    render(){
        return(
            <div className="contact-container">
                <h2 className="contact-me">Contact Me</h2>
                <h4 className="feel-free">Feel free to contact me any time<br/>I'd love to hear from you!</h4>
                <section className="links-section">
                    <div className="github-div">
                        <label htmlFor="Github" className="link-label">Github</label><br/>
                        <a href="https://github.com/craragon77" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github logo" className="github_logo"/></a>
                    </div>
                    <div className="resume-div">
                        <label htmlFor="Resume" className="link-label">Resume</label><br/>
                        <a href={Resume} target="_blank" rel="noopener noreferrer"><img src={resume} alt="Resume logo" className="resume_logo"/></a>
                    </div>
                    <div className="email-div">
                        <label htmlFor="Email" className="link-label">Email</label><br/>
                        <a href="malito:aragonchristopherray@gmail.com"><img src={email} alt="Email logo" className="email_logo"/></a>
                    </div>
                    <div className="linkedin-div">
                        <label htmlFor="LinkedIn" className="link-label">LinkedIn</label><br/>
                        <a href="https://www.linkedin.com/in/christopher-aragon/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Linkedin logo" className="linkedin_logo"/></a>
                    </div>
                </section>
                
            </div>
        )
    }
}