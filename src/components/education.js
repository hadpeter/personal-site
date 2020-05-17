import React, { Component } from "react";
import Container from 'react-bootstrap/Button';

class Education extends Component{
    render(){
        return <section id = "education">
            <h1 class="resume-section p-3 p-lg-5 d-flex align-items-center">
                Education
            </h1>
            <div class="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div class="text-left">
                <h2 class="mb-0">University of Michigan</h2>
                <i>September 2017 - May 2021</i>
                <div class="subheading mb-3">Bachelor of Science, Computer Science Engineering</div>
                <p>GPA: 3.39/4.00</p>
                <div class="subheading mb-3">Courses:
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