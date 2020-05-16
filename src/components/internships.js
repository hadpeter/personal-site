import React, { Component } from "react";
import Quicken from "./quicken";
import TappanHill from "./tappanHill";

class Internships extends Component{
    render(){
        return <div className = "Content">
            <section id="internships">
                <head class="resume-section p-3 p-lg-5 d-flex align-items-center">
                    Internships
                </head>
                <Quicken></Quicken>
                <TappanHill></TappanHill>
            </section>
        </div>
    }
}

export default Internships;