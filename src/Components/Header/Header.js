import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu';
import MenuButton from './MenuButton';
import './Header.css';

export default class Header extends Component{
    constructor(props){
        //idk what to make of this super with a line through it
      super(props);
      this.state={
        menuOpen:false,
      }
    }
    handleMenuClick() {
        this.setState({menuOpen:!this.state.menuOpen});
    }
    
    handleLinkClick() {
        this.setState({menuOpen: false});
    }
    render(){
        const styles= 
        {
          container:{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: '99',
            opacity: 0.9,
            display:'flex',
            alignItems:'center',
            background: 'black',
            width: '100%',
            color: 'white',
            fontFamily:'Lobster'
          },
          logo: {
            margin: '0 auto',
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            filter: this.state.menuOpen ? 'blur(2px)':null,
            transition: 'filter 0.5s ease',
          },
        }
        return(
            <div className="header">
                <div style={styles.container}>
                    <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white' />
                </div>
                <Menu open={this.state.menuOpen} onClick={()=>this.handleLinkClick()}/>
                {/*<Link to="/">Home</Link>
                <Link to="AboutMe">About Me</Link>
                <Link to="/Portfolio">Portfolio</Link>
                <Link to="/Contact">Contact Me</Link> */}
            </div>
        )
    }
}