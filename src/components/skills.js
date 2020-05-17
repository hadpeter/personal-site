import React, { Component } from "react";

class Skills extends Component{
    render(){
        return <section id = "skills">
            <h1 class="resume-section p-lg-5 d-flex">
                Skills
            </h1>
            <div class="resume-section p-lg-5 d-flex">
                <div class="text-left">
                    <h2>Programing Languages &amp; Tools</h2>
                        <p class = "text-muted">
                        C++, Python3, C, Java, C#, JavaScript, HTML, CSS, Swift, Git, SQL, Flask, React, Jinja2, bash, MATLAB, Arduino, AWS DynamoDB
                        </p>
                    <h2>Workflow</h2>
                        <ul class= "text-muted">
                            <li>
                                End to End Testing &amp; Debugging
                            </li>
                            <li>
                                Agile Development &amp; Scrum
                            </li>
                        </ul>
                </div>
            </div>
        </section>
    }
}

export default Skills;