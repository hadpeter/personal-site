import React, { Component } from "react";
import Container from 'react-bootstrap/Button';

class Bio extends Component{
    render(){
        return <div className = "Content">
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="bio">
            <h1 class = "text-center">
                Hadley Peterson
            </h1>       
            <p class = "text-center">
            I'm a rising Senior at the University of Michigan,  Ann Arbor, majoring in Computer Science. Outside of coursework I enjoy contributing to several student organizations, meditating, and practicing yoga.
            </p>
            </section>
        </div>
    }
}

export default Bio;