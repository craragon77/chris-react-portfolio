import React, {Component} from 'react';
import './About-Me.css'

export default class AboutMe extends Component{
    render(){
        return(
            <>
                <h2 className="about-me">About Me</h2>
                <div>
                    <p className="about-me-text">
                    I was first exposed to coding after hearing this NPR podcast about how computer science is being used to save elephants in the wild, and since I started learning programming I have never looked back! 
                    I love coding because of its many fascinating interdisciplinary applications, as well as the rewarding feeling of seeing my programs and apps come alive with the code that I wrote. 
                    I also enjoy working on engineering, development, and non-technical teams with like-minded, passionate people. 
                    I’m especially interested in how software engineering and computer science can address and solve challenges in sustainability, renewable energy, and environmental conservation.
                    </p>
                </div><br/>
                <div>
                    <p className="about-me-text">
                        I am a graduate of Tufts University with a double major in Environmental Science and International Relations, and I'm a student of Bloc's Fullstack Engineering Program. 
                        Outside of coding, I love hiking, practicing yoga, reading non-fiction (especially books by Bill Bryson and Michael Pollan), baking breads and sweets, and playing guitar (mostly classical and Spanish guitar, but also the Grateful Dead and the Beatles).
                    </p>
                </div>
            </>
        )
    }
}