import React, { Component } from 'react';
import CountryForList from "./CountryForList";

export default class CountriesSection extends Component {

    componentDidMount() {
        this.props.fetchApiListCountries("https://api-football-v1.p.rapidapi.com/v2/countries")
    }
    render() {
        if(this.props.list) {
            return (
                <section className="main-content_countries">
                    <ul className="main-content_countries_list">
                        {this.props.list.map(country => {
                            return <CountryForList key={country.id} country={country} />
                        })}
                    </ul>
    
                </section>
            )
        } else {
            return (
                <section className="main-content_countries">
    
                </section>
            )
        }
    }
}
