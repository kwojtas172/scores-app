import React, { Component } from 'react';
import CountriesSection from "../containers/CountriesSection";
import ScoresSection from "../containers/ScoreSection";
import OnTop from "./OnTop";

export default class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            button: ""
        }
    }
    

    
        componentDidMount() {
            this.handleScroll = () => {
                this.setState({
                    button: window.pageYOffset
                })
            }

            window.addEventListener("scroll", this.handleScroll)
     
        }

    render() {
        return (
            <main className="main-content">
                <CountriesSection />
                <ScoresSection /* fixtures={this.props.state} fetch={this.props.fetch}  *//>
                {this.state.button > 150 && <OnTop />}
            </main>
        )
    }
}
