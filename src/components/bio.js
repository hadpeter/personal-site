import React, { Component } from "react";
import Container from 'react-bootstrap/Button';

class Bio extends Component{
    render(){
        return <div className = "Content">
            <Container className="p-3">
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="bio">
            <h1>
                Hadley Peterson
            </h1>
            <meta charset="utf-8"></meta>
            <p>
            I'm a rising Senior at the University of Michigan,  Ann Arbor, majoring in Computer Science. Outside of coursework I enjoy contributing to several student organizations, meditating, and practicing yoga.
            </p>
            </section>
            </Container>
        </div>
    }
}

export default Bio;