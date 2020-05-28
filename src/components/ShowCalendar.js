import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class ShowCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    onChange = date => {
        this.setState({
            date: date
        })
        this.props.createToday(date)
    }

    render() {
        return (
            <div className="show-calendar_content" style={{display: this.props.display}}>
                <Calendar onChange={this.onChange} value={this.state.date} />
            </div>
        )
    }
}
