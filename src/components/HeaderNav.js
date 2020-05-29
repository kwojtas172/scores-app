import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default class HeaderNav extends Component {
   constructor(props) {
       super(props);
       this.state = {
           switchValue: "sun",
           mode: "Dark"
       }
   }
   

    handleSwitch = () => {
        this.setState({
            switchValue: this.state.switchValue === "sun" ? "moon" : "sun",
            mode: this.state.mode === "Dark" ? "Light" : "Dark"
        })
        this.props.switch()
    }
    render() {
        return (
            <nav className="header-container_nav">
                <ul className="header-container_nav_ul">
                    <li><a href="#" onClick={this.handleSwitch}>
                        {this.state.switchValue === "sun" && <FontAwesomeIcon icon={faSun} style={{color: "#FBDB48"}} />}
        {"   "}{this.state.mode} mode{"   "}
                        
                        {this.state.switchValue === "moon" && <FontAwesomeIcon icon={faMoon} style={{color: "#EAEAEA"}} />}</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Login / Register</a></li>
                </ul>
            </nav>
        )
    }
}
