import React, { Component } from 'react';

export default class ShowScore extends Component {
    
   
        

    render() {
        const { game } = this.props;
        const date = new Date(game.event_timestamp * 1000);
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();

        if (game.status === "Match Finished") {
            return (
                <li >
                    <span><input type="checkbox" style={{marginRight: "0.5rem"}} defaultChecked={game.isLiked ? true : false} onClick={e =>  this.props.toggle(game, e.target.checked)}/><span style={{ color: "green", fontWeight: "bold" }}>Finished</span> <span style={{ opacity: 0 }}>-----------</span> </span><span><span style={{ fontWeight: game.goalsHomeTeam > game.goalsAwayTeam ? "bold" : "" }}>{game.homeTeam.team_name} </span> - <span style={{ fontWeight: game.goalsHomeTeam < game.goalsAwayTeam ? "bold" : "" }}>{game.awayTeam.team_name}</span></span> <span style={{ fontWeight: "bold" }}>{game.score.fulltime}</span>

                </li>
            )
        }

        if (game.status === "Not Started") {
            return (
                <li>
                    <span><input type="checkbox" style={{marginRight: "0.5rem"}} defaultChecked={game.isLiked ? true : false} onClick={e =>  this.props.toggle(game, e.target.checked)} /><span style={{ fontStyle: "italic" }}  >Not started </span><span style={{ opacity: 0 }}>-----------</span><span>{hours + ':' + minutes.substr(-2)}</span></span> <span><span>{game.homeTeam.team_name} </span> - <span>{game.awayTeam.team_name}</span></span> <span style={{ fontWeight: "bold" }}>?-?</span>
                    
                </li>
            )
        }
        if (game.status === "First Half" || game.status === "Second Half") {
            return (
                <li>
                    <span><input type="checkbox" style={{marginRight: "0.5rem"}} defaultChecked={game.isLiked ? true : false} onClick={e =>  this.props.toggle(game, e.target.checked)}/><span style={{ color: "red", fontStyle: "italic" }}>Live</span><span style={{ opacity: 0 }}>----------------------</span><span style={{ color: "red" }}> {game.elapsed}'</span></span> <span><span>{game.homeTeam.team_name} </span> - <span>{game.awayTeam.team_name}</span></span> <span style={{ fontWeight: "bold" }}>{game.goalsHomeTeam}-{game.goalsAwayTeam}</span>
                </li>
            )
        } if (game.status === "Halftime") {
            return (
                <li>
                    <span><input type="checkbox" style={{marginRight: "0.5rem"}} defaultChecked={game.isLiked ? true : false} onClick={e =>  this.props.toggle(game, e.target.checked)}/><span style={{ color: "red", fontStyle: "italic" }}>Live</span><span style={{ opacity: 0 }}>----------------------</span><span style={{ color: "red" }}> {game.statusShort}</span></span> <span><span>{game.homeTeam.team_name} </span> - <span>{game.awayTeam.team_name}</span></span> <span style={{ fontWeight: "bold" }}>{game.goalsHomeTeam}-{game.goalsAwayTeam}</span>
                </li>
            )
        }
        
        
        else {
            return (
                <li>
                    <span>{game.status}</span>
                </li>
            )
        }





    }
}



