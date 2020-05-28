import React, { Component } from 'react'
import {HashRouter, NavLink, Switch, Route} from "react-router-dom";
import AllScores from "./compontent-for-scores/AllScores";
import LiveScores from "./compontent-for-scores/LiveScores";
import MyScores from "./compontent-for-scores/MyScores";
import ScheduledScores from "./compontent-for-scores/ScheduledScores";
import FinishedScores from "./compontent-for-scores/FinishedScores";
import NotFound from "./compontent-for-scores/NotFound";
import ShowCalendar from "./ShowCalendar";



const today = new Date();
const dd = today.getDate();
const mm = today.getMonth()+1; 
const yyyy = today.getFullYear();

const createUrl = (year, month, day) => {
    if(month < 10) {
        month = "0"+month
    }
    if(day < 10) {
        day = "0"+day
    }

    return `${year}-${month}-${day}`
}


let dateUrl = createUrl(yyyy, mm, dd);
// console.log(dateUrl)


export default class ScoresSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showHide: "show",
            display: "none",
            dateUrl: dateUrl
        }
    }
    

    componentDidMount() {

        this.props.fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/${this.state.dateUrl}?timezone=Europe/Warsaw`);

        this.createToday = today => {
            const dd = today.getDate();
            const mm = today.getMonth()+1; 
            const yyyy = today.getFullYear();
            const dateUrl = createUrl(yyyy, mm, dd)
            this.props.fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/${dateUrl}?timezone=Europe/Warsaw`)
            this.setState({
                dateUrl: dateUrl
            })
            
        }

    }

    

    render() {
        return (
            <section className="main-content_scores">
                <HashRouter>
                    <nav className="main-content_scores_nav">
                        <ul className="main-content_scores_nav_list">
                            <li><NavLink exact to="/" activeClassName="actived-navlink" >All scores</NavLink></li>
                            <li><NavLink to="/live" activeClassName="actived-navlink" >Live scores</NavLink></li>
                            <li><NavLink to="/finished" activeClassName="actived-navlink" >Finished</NavLink></li>
                            <li><NavLink to="/scheduled" activeClassName="actived-navlink" >Scheduled</NavLink></li>
                            <li><NavLink to="/myscores" activeClassName="actived-navlink" >My scores</NavLink></li>
                        </ul>
                        <div className="show-calendar" > <span onClick={() => this.setState({showHide: this.state.showHide === "show" ? "hide" : "show", display: this.state.display === "none" ? "" : "none"})}>{this.state.showHide} calendar</span><ShowCalendar createToday={this.createToday} display={this.state.display} /></div>
                    </nav>
                    {this.props.state.isLoaded && this.props.countries && (
                    <Switch>
                        <Route exact path="/" component={() => <AllScores fixtures={this.props.state} countries={this.props.countries} toggle={this.props.toggle} />} />
                        <Route path="/live" component={() => <LiveScores fixtures={this.props.state} countries={this.props.countries} toggle={this.props.toggle} />} />
                        <Route path="/finished" component={() => <FinishedScores fixtures={this.props.state} countries={this.props.countries} toggle={this.props.toggle} />} />
                        <Route path="/scheduled" component={() => <ScheduledScores fixtures={this.props.state} countries={this.props.countries} toggle={this.props.toggle} />} />
                        <Route path="/myscores" component={() => <MyScores countries={this.props.countries} fixtures={this.props.state} toggle={this.props.toggle}/> }/>
                        <Route component={NotFound} />
                    </Switch>)
                    }
                </HashRouter>
                    
            </section>
        )
    }
}
