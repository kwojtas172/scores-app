import React, { Component } from 'react';
import ShowScore from "./ShowScore";
import ShowTable from "./ShowTable";

export default class ShowCountryAndLeauge extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            display: "none",
            standings: "Standings"
        }
    }
    

    componentDidMount() {

        this.sortByWins = arr => {
            this.setState({
                arr: arr.sort((a, b) => {
                    return b.all.win - a.all.win
                })
            })
        }

        this.sortByPoints = arr => {
            this.setState({
                arr: arr.sort((a, b) => {
                    return a.rank - b.rank
                })
            })
        }

        this.sortByGoals = arr => {
            this.setState({
                arr: arr.sort((a, b) => {
                    return b.goalsDiff - a.goalsDiff
                })
            })
        }

        this.handle = url => {
        
            fetch(`https://api-football-v1.p.rapidapi.com/v2/leagueTable/${url}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                    "x-rapidapi-key": "05da0dc747msh09150755268e421p148c8djsna768d3fd2802"
                }
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data.api);
                const arr = data.api.standings[0];
                this.addToArr(arr)
            })
            .catch(err => {
                console.log(err);
            });
        }

        this.addToArr = arr => {
            this.setState({
                arr: arr,
                display: this.state.display === "none" ? "" : "none",
                standings: this.state.standings === "Standings" ? "Close" : "Standings"
            })
        }
    }

    render() {
        //    const  {fixtures} = this.props
        if(this.props.fixtures.length && this.props.fixtures.filter(game => game.league.country === this.props.country.country).length &&  this.props.fixtures.filter(game => game.league.name === this.props.country.name).length) {
            return (
                <>
                
                <ul>
                    <div>
                        <div className="show-country-league">
                            <img className="show-country-league_img" src={this.props.country.flag ? this.props.country.flag : this.props.country.logo} alt="flag" />
                            <h4 className="show-country-league_header"> {this.props.country.country} - {this.props.country.name}
                            </h4>
                            <span onClick={() => this.handle(this.props.country.id)} >{this.state.standings} </span> 
                        </div>
                        <ShowTable key={this.props.country.id} display={this.state.display} arr={this.state.arr} sortByWins={this.sortByWins} sortByPoints={this.sortByPoints} sortByGoals={this.sortByGoals} />
                        {this.props.fixtures
                        .map(game => {
                            if (this.props.country.country === game.league.country && this.props.country.name === game.league.name) {
                                return <ShowScore key={game.homeTeam.team_id} game={game} toggle={this.props.toggle}  />
                            }
                        })}
                    </div>
                    
                </ul>
                
                </>
            )
        } else {
            return null
        }
    }
}
