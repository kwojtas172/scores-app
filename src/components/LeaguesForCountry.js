import React, { Component } from 'react'

export default class LeaguesForCountry extends Component {

   

    render() {
        return (
            <li style={{display:  this.props.visibility}}>
                {this.props.leagues.map(league => {
                    return <a className="leagues-for-country" style={{display: "block", margin: "0.75rem", lineHeight: "1rem", cursor: "pointer"}} onClick={() => this.props.fetch(league.league_id)}>{league.name}</a>
                })
                
                }
            </li>
        )
    }
}
