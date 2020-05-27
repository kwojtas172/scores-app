import React, { Component } from 'react';
import Header from "./Header";
import MainContent from "../components/MainContent";
import Footer from "./Footer";
import store from "../redux/store";
import {Provider} from "react-redux";

export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="main-wrapper">
                    <Header />
                    <MainContent />
                    <Footer />
                </div>
            </Provider>
        )
    }
}
