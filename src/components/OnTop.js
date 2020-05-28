import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faArrowUp} />

export default class OnTop extends Component {

    toTop = () => {
            window.scrollTo(0, 0)
        }


    render() {
        return (
            <button className="to-top" onClick={this.toTop}>
                {element}
            </button>
            // <i class="fas fa-arrow-up"></i>
        )
    }
}
