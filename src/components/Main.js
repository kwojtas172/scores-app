import React, { Component } from 'react';
import Header from "./Header";
import MainContent from "../components/MainContent";
import Footer from "./Footer";
import store from "../redux/store";
import {Provider} from "react-redux";



export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchClass: localStorage.getItem("whichTheme") ? JSON.parse(localStorage.getItem("whichTheme")) : "",
            bodyBackground: ""
        }
    }


    componentDidMount() {
        document.body.style.backgroundColor = this.state.switchClass === "dark" ? "#363434" : "";
    }

    componentDidUpdate() {
        document.body.style.backgroundColor = this.state.switchClass === "dark" ? "#363434" : "";
    }
    

    switchMode = () => {
        this.setState({
            switchClass: this.state.switchClass === "dark" ? "" : "dark"
        })
        localStorage.setItem("whichTheme", JSON.stringify(this.state.switchClass === "dark" ? "" : "dark"));
    }
    
    render() {
        return (
            <Provider store={store}>
                <div className={`main-wrapper ${this.state.switchClass}`}>
                    <Header switch={this.switchMode} />
                    <MainContent />
                    <Footer />
                </div>
            </Provider>
        )
    }
}


