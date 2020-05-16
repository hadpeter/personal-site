import React, { Component } from "react";
import Container from 'react-bootstrap/Button';

class Education extends Component{
    render(){
        return <section id = "education">
            <head class="resume-section p-3 p-lg-5 d-flex align-items-center">
                Education
            </head>
            <div class="resume-content">
                <h3 class="mb-0">University of Michigan</h3>
                <div class="subheading mb-3">Bachelor of Science</div>
                <div>Computer Science Engineering</div>
                <p>GPA: 3.39/4.00</p>
                <div class="subheading mb-3">Courses</div>
                <p>
                EECS 485 - Websystems<br></br>
                EECS 388 - Introduction to Computer Security<br></br>
                EECS 376 - Foundations of Computer Science<br></br>
                EECS 370 - Computer Organization<br></br>
                EECS 281 - Data Structures and Algorithms<br></br>
                EECS 280 - Programming and Introductory Data Structures<br></br>
                EECS 203 - Discrete Math<br></br>
                ENGR 151 - Accelerated Introduction to Computer Programming<br></br>
                ENGR 100 - Underwater Vehicle Design
                </p>
            </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">September 2017 - May 2021</span>
          </div>
        </section>
    }
}

export default Education;