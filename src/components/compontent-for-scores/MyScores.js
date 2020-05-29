import React, { Component } from 'react';
import ShowCountryAndLeague from "./ShowCountryAndLeague";

export default class MyScores extends Component {

    render() {
      
        if(this.props.fixtures.arr.filter(game => game.isLiked).length) {
            return (
                <div>
                    <ul className="show-scores">
                        {this.props.countries.map(country => {
                            return <ShowCountryAndLeague country={country} fixtures={this.props.fixtures.arr.filter(game => game.isLiked)} toggle={this.props.toggle} />
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <h3 style={{textAlign: "center", lineHeight: "50vh"}}>Not yet added liked games!</h3>
                </div>
            )
        }
    }
}
