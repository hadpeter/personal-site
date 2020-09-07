import React, { Component } from "react";
import Quicken from "./quicken";
import TappanHill from "./tappanHill";
import CapitalOne from "./capitalOne";
import IA from './ia';

class Internships extends Component{
    render(){
        return <div className = "Content">
            <section id="internships">
                <h1 class="resume-section p-3 p-lg-5 d-flex align-items-center">
                    Work Experience
                </h1>
                <IA></IA>
                <CapitalOne></CapitalOne>
                <Quicken></Quicken>
                <TappanHill></TappanHill>
            </section>
            <hr></hr>
        </div>
    }
}

export default Internships;