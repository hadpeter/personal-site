import React, { Component } from "react";
import Quicken from "./quicken";
import TappanHill from "./tappanHill";
import CapitalOne from "./capitalOne";
import IA from './ia';

class Internships extends Component{
    render(){
        return <div className = "Content">
            <section id="internships">
                <CapitalOne></CapitalOne>
                <Quicken></Quicken>
                <TappanHill></TappanHill>
            </section>
            <hr></hr>
        </div>
    }
}

export default Internships;