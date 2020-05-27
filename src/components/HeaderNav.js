import React, { Component } from 'react'

export default class HeaderNav extends Component {
    render() {
        return (
            <nav className="header-container_nav">
                <ul className="header-container_nav_ul">
                    <li><a href="#">Night Mode</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Login / Register</a></li>
                </ul>
            </nav>
        )
    }
}
