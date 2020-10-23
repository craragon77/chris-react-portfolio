import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./Menu.css";

export default class Menu extends Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
      }
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.open !== this.state.open){
          this.setState({open:nextProps.open});
        }
    }
    render(){
        const styles={
            container: {
              position: 'absolute',
              top: 0,
              left: 0,
              height: this.state.open? '60%': 0,
              width: '100vw',
              display: 'flex',
              flexDirection: 'column',
              background: 'black',
              opacity: 0.95,
              color: '#fafafa',
              transition: 'height 0.3s ease',
              zIndex: 2
            }
        }
        return(
            <div>
                {
                    this.state.open?
                    <div style={styles.container} className="Menulist">
                        {/*this is gonna be hard coded I think*/}
                        <Link to="/" onClick={this.props.onClick}>Home</Link>
                        <Link to="/Portfolio" onClick={this.props.onClick}>Portfolio</Link>
                        <Link to="/Contact" onClick={this.props.onClick}>Contact Me</Link>
                    </div>:null
                }
            </div>
        )
    }
}