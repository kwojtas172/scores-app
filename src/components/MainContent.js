import React, { Component } from 'react';
import CountriesSection from "../containers/CountriesSection";
import ScoresSection from "../containers/ScoreSection";

export default class MainContent extends Component {

    render() {
        return (
            <main className="main-content">
                <CountriesSection />
                <ScoresSection /* fixtures={this.props.state} fetch={this.props.fetch}  *//>
            </main>
        )
    }
}
