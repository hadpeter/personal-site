import React, { Component } from "react";
import Container from 'react-bootstrap/Button';

class Interests extends Component{
    render(){
        return <section id = "interests">
            <head class="resume-section p-3 p-lg-5 d-flex align-items-center">
                Interests
            </head>
            <ul>
                <li>
                    FinTech
                </li>
                <li>
                    Entrepreneurship
                </li>
                <li>
                    Venture Capital
                </li>
                <li>
                    Yoga and Meditation
                </li>
            </ul>
        </section>
    }
}

export default Interests;