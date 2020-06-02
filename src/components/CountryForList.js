import React, { Component } from 'react';
import LeaguesForCountry from "./LeaguesForCountry";

export default class CountryForList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: "none",
            leagues: []
        }
    }

    handleClick = () => {
        this.setState({
            visibility: this.state.visibility === "none" ? "block" : "none"
        });
        this.fetchLeagues()
    }

    componentDidMount() {

        this.fetchLeagues = () => {
            fetch(`https://api-football-v1.p.rapidapi.com/v2/leagues/country/${this.props.country.country}/2019`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                    "x-rapidapi-key": "05da0dc747msh09150755268e421p148c8djsna768d3fd2802"
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    leagues: data.api.leagues
                })

            })
            .catch(err => {
                console.log(err);
            });
        }
    }
    
    render() {
        return (
            <li style={{display: "block"}}>
                <img src={this.props.country.country === "World" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/International_Flag_of_Planet_Earth.svg/350px-International_Flag_of_Planet_Earth.svg.png" : this.props.country.flag} alt="flag" /><span onClick={this.handleClick} style={{cursor: "pointer"}}>{this.props.country.country}</span>
                <ul style={{display: this.state.visibility}}>
                    {this.state.leagues && <LeaguesForCountry country={this.props.country.country} leagues={this.state.leagues} visibility={this.state.visibility} fetch={this.props.fetch} />}
                </ul>
            </li>
        )
    }
}
