import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default class HeaderNav extends Component {
   constructor(props) {
       super(props);
       this.state = {
           switchValue: localStorage.getItem("switch") ? JSON.parse(localStorage.getItem("switch")) : "sun",
           mode: localStorage.getItem("mode") ? JSON.parse(localStorage.getItem("mode")) : "Dark"
       }
   }
   


    handleSwitch = e => {
        e.preventDefault();
        this.setState({
            switchValue: this.state.switchValue === "sun" ? "moon" : "sun",
            mode: this.state.mode === "Dark" ? "Light" : "Dark"
        })
        this.props.switch()
        localStorage.setItem("switch", JSON.stringify(this.state.switchValue === "sun" ? "moon" : "sun"));
        localStorage.setItem("mode", JSON.stringify(this.state.mode === "Dark" ? "Light" : "Dark"));
        
        
    }
    

    render() {
        return (
            <nav className="header-container_nav">
                <ul className="header-container_nav_ul">
                    <li><a href="none" onClick={e => this.handleSwitch(e)}>
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
