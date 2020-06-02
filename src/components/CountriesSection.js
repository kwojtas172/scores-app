import React, { Component } from 'react';
import CountryForList from "./CountryForList";
import ShowNextGames from "./ShowNextGames";

export default class CountriesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrLeagues: [],
            isShowed: false
        }
    }
    

    componentDidMount() {
        this.props.fetchApiListCountries("https://api-football-v1.p.rapidapi.com/v2/countries")
    }

    fetchNextGames = id => {
        fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${id}/next/10?timezone=Europe/Warsaw`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "05da0dc747msh09150755268e421p148c8djsna768d3fd2802"
	}
})
.then(response => response.json())
.then(data => {
    console.log(data)
    this.setState({
        arrLeagues: data.api.fixtures,
        isShowed: true
    })
})
.catch(err => {
	console.log(err);
});
    }

    handleToClosed = () => {
        this.setState({
            isShowed: false
        })
    }

    render() {
        if(this.props.list) {
            return (
                <>
                <section className="main-content_countries">
                    <ul className="main-content_countries_list">
                        {this.props.list.map(country => {
                            return <CountryForList key={country.id} country={country} fetch={this.fetchNextGames} />
                        })}
                    </ul>
                    
                </section>
                {this.state.isShowed && <ShowNextGames handleToClosed={this.handleToClosed} style={{display: this.state.isShowed ? "block" : "none"}} games={this.state.arrLeagues} />}
                </>
            )
        } else {
            return (
                <section className="main-content_countries">
    
                </section>
            )
        }
    }
}
