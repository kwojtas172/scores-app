import React, { Component } from 'react';
import HeaderName from "./HeaderName";
import HeaderNav from "./HeaderNav";

export default class Header extends Component {
    render() {
        return (
            <header className="header-container">
                <HeaderName />
                <HeaderNav />
            </header>
        )
    }
}
