import React, {Component} from 'react';
import snapshot from '../../pics/Discover-E-Pass-snapshot.jpg'

export default class DiscoverEPass extends Component{
    render(){
        return(
            <>
                <section>
                    <h4>Discover-E-Pass</h4><br/>
                    <div><img src={snapshot} alt='Discover-E-Pass snapshot'/></div>
                    <div>
                        <p>
                            Inspired by the Passport to Your National Parks, <a target="_blank" href="https://parks-client.vercel.app/">Discover-E-Pass</a> is a fullstack program in which
                            users can "stamp" every American national park, monument, and historic they have attended, as well
                            as record which histoic sites they wish to attend. This program was built with React, JSX, CSS + SCSS,
                            Node.js, and PostgreSQL.
                        </p>
                    </div>
                </section>
                

            </>
        )
    }
}