import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';

class Bio extends Component{
    render(){
        return <div className = "Content">
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="bio">
            <div class = "text-center">
                <h1>Hadley Peterson</h1> 
                <p class = "bio-blurb">
                I'm a senior associate software engineer at Capital One passionate about FinTech, social entrepreneurhsip and cloud technology. I am a University of Michigan grad with a degree in Computer Science from the College of Engineering. Outside work, I enjoy exploring crypto, meditating, and practicing yoga.
                </p>
            </div> 
            </section>
            <div class = "text-center">
                <SocialIcon url = "https://www.linkedin.com/in/hadley-peterson/" class = "social-icon"></SocialIcon>
                <SocialIcon url = "https://github.com/hadpeter" class = "social-icon"></SocialIcon>
                <SocialIcon url = "https://hadleypeterson.substack.com/publish?utm_source=menu" class = "social-icon"></SocialIcon>
            </div>
            <hr></hr>
        </div>
    }
}

export default Bio;