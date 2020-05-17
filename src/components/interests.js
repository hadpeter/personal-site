import React, { Component } from "react";
import Container from 'react-bootstrap/Button';

class Interests extends Component{
    render(){
        return <section id = "interests">
            <h1 class="resume-section p-3 p-lg-5 d-flex align-items-center">
                Interests
            </h1>
            <div class="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div class="text-left">
            <ul class = "text-muted">
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
            </div>
            </div>
        </section>
    }
}

export default Interests;