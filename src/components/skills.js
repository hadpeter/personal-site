import React, { Component } from "react";

class Skills extends Component{
    render(){
        return <div><section id = "skills">
            <h1 class="resume-section p-lg-5 d-flex">
                Skills
            </h1>
            <div class="resume-section p-lg-5 d-flex">
                <div class="text-left">
                    <h2>Programming Languages &amp; Tools</h2>
                        <p class = "text-muted">
                        C++, Python, C, Java, C#, JavaScript, HTML, CSS, Swift, Git, SQL, Flask, React, Jinja2, bash, MATLAB
                        </p>
                    <h2>Workflows</h2>
                        <ul class= "text-muted">
                            <li>
                                CI/CD
                            </li>
                            <li>
                                Unit Testing
                            </li>
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
        <hr></hr>
        </div>
    }
}

export default Skills;