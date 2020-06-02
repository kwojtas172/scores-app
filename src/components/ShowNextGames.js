import React, { Component } from 'react'

export default class ShowNextGames extends Component {

    handleToClose = () => {
        this.props.handleToClosed()
    }
    render() {
        return (
            <table className="show-next-games" style={{display: this.props.games.length > 0 ? "block" : "none"}}>
                <thead style={{textAlign: "center"}}>
                    <tr style={{fontSize: "1.5rem", textShadow: "0 0 0 #a06664"}}>Next Games <span style={{position: "absolute", right: "2rem", cursor: "pointer"}}onClick={this.handleToClose}>X</span></tr>
                    <tr><td>Home Team - Away Team</td><td>Time</td></tr></thead>
                <tbody>
                {this.props.games.map(game => {
                    
                return <tr><td><img src={game.homeTeam.logo} />{game.homeTeam.team_name} - {game.awayTeam.team_name} <img src={game.awayTeam.logo} /></td><td>{(game.event_date).slice(0,10)} {(game.event_date).slice(11,16)}</td></tr>
                })}
                </tbody>
            </table>
        )
    }
}
