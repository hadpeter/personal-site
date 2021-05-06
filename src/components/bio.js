import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';

class Bio extends Component{
    render(){
        return <div className = "Content">
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="bio">
            <div class = "text-center">
                <h1>Hadley Peterson</h1> 
                <p class = "bio-blurb">
                I'm a New Grad from the University of Michigan,  Ann Arbor, with a degree in Computer Science from the College of Engineering. I enjoy contributing to several student organizations, meditating, and practicing yoga. In the fall, I will be joining Capital One as a Software Engineer in the New York City Office.
                </p>
            </div> 
            </section>
            <div class = "text-center">
                <SocialIcon url = "https://www.linkedin.com/in/hadley-peterson/" class = "social-icon"></SocialIcon>
                <SocialIcon url = "https://github.com/hadpeter" class = "social-icon"></SocialIcon>
                <SocialIcon url = "https://www.facebook.com/profile.php?id=100009512854778" class = "social-icon"></SocialIcon>
            </div>
            <hr></hr>
        </div>
    }
}

export default Bio;