import React, { Component } from "react";
import Container from 'react-bootstrap/Button';

class Skills extends Component{
    render(){
        return <section id = "skills">
            <h1 class="resume-section p-3 p-lg-5 d-flex align-items-center">
                Skills
            </h1>
            <div class="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div class="text-left">
            <h3 class = "text-muted">Programming Languages &amp; Tools</h3>
            <p class = "text-muted">
            C++, Python3, C, Java, C#, JavaScript, HTML, CSS, Swift, Git, SQL, Flask, React, Jinja2, bash, MATLAB
            </p>

            <h3 class="text-muted">Workflow</h3>
            <ul class= "text-muted">
                <li>
                    <i class="fa-li fa fa-check"></i>
                    End to End Testing &amp; Debugging
                </li>
                <li>
                    <i class="fa-li fa fa-check"></i>
                    Agile Development &amp; Scrum
                </li>
            </ul>
            </div>
            </div>
        </section>
    }
}

export default Skills;