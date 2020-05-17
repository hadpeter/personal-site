import React, { Component } from "react";

class Education extends Component{
    render(){
        return <section id = "education">
            <h1 class="resume-section p-3 p-lg-5 d-flex align-items-center">
                Education
            </h1>
            <div class="resume-section p-3 p-lg-5 d-flex align-items-center">
                <div class="text-left">
                    <h2>University of Michigan</h2>
                    <h class = "text-muted"><i>September 2017 - May 2021</i><br></br>
                    Bachelor of Science, Computer Science Engineering
                    </h>
                    <p class = "text-muted">
                        GPA: 3.39/4.00<br></br>
                        Courses: EECS 485 - Websystems, EECS 388 - Introduction to Computer Security, EECS 376 - Foundations of Computer Science, EECS 370 - Computer Organization, EECS 281 - Data Structures and Algorithms, EECS 280 - Programming and Introductory Data Structures, EECS 203 - Discrete Math, ENGR 151 - Accelerated Introduction to Computer Programming
                    </p>
                </div>
            </div>
        </section>
    }
}

export default Education;