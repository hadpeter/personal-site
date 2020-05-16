import React, { Component } from "react";
import Container from 'react-bootstrap/Button';

class Skills extends Component{
    render(){
        return <section id = "skills">
            <head class="resume-section p-3 p-lg-5 d-flex align-items-center">
                Skills
            </head>
            <div class="subheading mb-3">Programming Languages &amp; Tools</div>
            <p>
            C++, Python3, C, Java, C#, JavaScript, HTML, CSS, Swift, Git, SQL, Flask, React, Jinja2, bash, MATLAB
            </p>

            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
                <li>
                    <i class="fa-li fa fa-check"></i>
                    End to End Testing &amp; Debugging
                </li>
                <li>
                    <i class="fa-li fa fa-check"></i>
                    Agile Development &amp; Scrum
                </li>
            </ul>
        </section>
    }
}

export default Skills;