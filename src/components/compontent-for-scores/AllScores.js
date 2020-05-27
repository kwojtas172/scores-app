import React, { Component } from 'react';
// import ShowScore from "./ShowScore";
import ShowCountryAndLeague from "./ShowCountryAndLeague";

export default class AllScores extends Component {

    
    render() {
            return (
                <div>
                <ul className="show-scores">
                 {this.props.countries.map(country => {
                        return <ShowCountryAndLeague key={`${country.country} - ${country.name}`} country={country} fixtures={this.props.fixtures.arr} toggle={this.props.toggle}  />
                    })}
                </ul>
            </div>
            )
    
    }
}
