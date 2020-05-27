import React, { Component } from 'react';

export default class CountryForList extends Component {
    render() {
        return (
            <li>
                <img src={this.props.country.flag} alt="flag" /><span>{this.props.country.country}</span>
            </li>
        )
    }
}
