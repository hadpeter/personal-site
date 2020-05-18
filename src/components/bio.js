import React, { Component } from "react";
import Container from 'react-bootstrap/Button';

class Bio extends Component{
    render(){
        return <div className = "Content">
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="bio">
            <h1 class = "text-center">
                <big class = "name-title">Hadley Peterson</big>
            </h1>      
            <p class = "text-center">
            I'm a rising Senior at the University of Michigan,  Ann Arbor, majoring in Computer Science. Outside of coursework I enjoy contributing to several student organizations, meditating, and practicing yoga.
            </p>
            <div class="social-icons">
            <a href="https://www.linkedin.com/in/hadley-peterson/">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/hadpeter">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100009512854778">
                <i class="fab fa-facebook-f"></i>
            </a>
            </div>
            </section>
            <hr></hr>
        </div>
    }
}

export default Bio;