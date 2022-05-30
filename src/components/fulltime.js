import React, { Component } from "react";
import CapitalOneFullTime from "./capitalOneFullTime";

class FullTime extends Component{
    render(){
        return <div className = "Content">
            <section id="fulltime">
                <h1 class="resume-section p-3 p-lg-5 d-flex align-items-center">
                    Work Experience
                </h1>
                <CapitalOneFullTime></CapitalOneFullTime>
            </section>
            <hr></hr>
        </div>
    }
}

export default FullTime;