import React, { Component } from 'react'

export default class ShowTable extends Component {

    componentDidMount() {
        this.handleSortByWins = arr => {
            this.props.sortByWins(arr)
        }

        this.handleSortByPoints = arr => {
            this.props.sortByPoints(arr)
        }

        this.handleSortByGoals = arr => {
            this.props.sortByGoals(arr)
        }
    }
    render() {
        const {arr, display} = this.props;
        if(arr) {
            return (
                <div className="show-table" style={{display: display}}>
                    <button onClick={() => this.handleSortByPoints(arr)}>Sort by points</button>
                    <button onClick={() => this.handleSortByWins(arr)}>Sort by wins</button>
                    <button onClick={() => this.handleSortByGoals(arr)}>Sort by +goals</button>
                    <table>
                        <thead>
                        <tr style ={{fontWeight: "bold"}}>
                            <td>Position</td>
                            <td>Team name</td>
                            <td>Total points</td>
                            <td>Total games</td>
                            <td>Win-Draw-Lost</td>
                            <td>Goals scored</td>
                            <td>Goals lost</td>
                            <td>Goal difference</td>
                        </tr>
                        </thead>
                        <tbody>
                    {arr.map(el => {
                        return ( 
                            <tr key={el.team_id}>
                                <td>{el.rank}</td>
                                <td>{el.teamName}</td>
                                <td>{el.points}</td>
                                <td>{el.all.matchsPlayed}</td>
                                <td>{el.all.win}-{el.all.draw}-{el.all.lose}</td>
                                <td>{el.all.goalsFor}</td>
                                <td>{el.all.goalsAgainst}</td>
                                <td>{el.goalsDiff}</td>
                            </tr>
                            )
                    })}
                    </tbody>
                </table>
                </div>
            )
        } else {
            return null
        }
    }
}
