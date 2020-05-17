import React, { Component } from "react";
import Container from 'react-bootstrap/Button';

class Education extends Component{
    render(){
        return <section id = "education">
            <h1 class="resume-section p-3 p-lg-5 d-flex align-items-center">
                Education
            </h1>
            <div>
            <div class="text-left">
            <h2 class="mb-0">University of Michigan</h2>
                <div class="text-muted"><i >September 2017 - May 2021</i><br></br>
                Bachelor of Science, Computer Science Engineering</div>
                <p class = "text-muted">GPA: 3.39/4.00</p>
                <div class = "text-muted">Courses:
                <ul class = "list-unstyled">
                    <li>EECS 485 - Websystems</li>
                    <li>EECS 388 - Introduction to Computer Security</li>
                    <li>EECS 376 - Foundations of Computer Science</li>
                    <li>EECS 370 - Computer Organization</li>
                    <li>EECS 281 - Data Structures and Algorithms</li>
                    <li>EECS 280 - Programming and Introductory Data Structures</li>
                    <li>EECS 203 - Discrete Math</li>
                    <li>ENGR 151 - Accelerated Introduction to Computer Programming</li>
                    <li>ENGR 100 - Underwater Vehicle Design</li>
                </ul>
                </div>
            </div>
            </div>
        </section>
    }
}

export default Education;