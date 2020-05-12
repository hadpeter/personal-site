import React, { Component } from "react";
import Quicken from "./quicken";
import TappanHill from "./tappanHill";

class Internships extends Component{
    render(){
        return <div className = "Content">
            <Quicken></Quicken>
            <TappanHill></TappanHill>
        </div>
    }
}

export default Internships;