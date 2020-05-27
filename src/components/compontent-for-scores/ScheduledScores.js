import React, { Component } from 'react';
import ShowCountryAndLeague from "./ShowCountryAndLeague";

export default class ScheduledScores extends Component {
    render() {
        if(this.props.fixtures.arr.filter(game => game.status === "Not Started").length) {
            return (
                <div>
                    <ul className="show-scores">
                        {this.props.countries.map(country => {
                            return <ShowCountryAndLeague country={country} fixtures={this.props.fixtures.arr.filter(game => game.status === "Not Started")} toggle={this.props.toggle}  />
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <h3 style={{textAlign: "center", lineHeight: "50vh"}}>No scheduled games now...</h3>
                </div>
            )
        }
    }
}
