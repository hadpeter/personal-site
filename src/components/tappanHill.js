import React, { Component } from "react";
import Internships from "./internships";

class TappanHill extends Component{
    render(){
        return <div class="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div class = "text-left">
            <h2>
                Investment Analyst
            </h2>
            <h class = "text-muted">
                Tappan Hill Ventures <br></br>
                February 2019 - March 2020
            </h>
            <ul class = "text-muted">
                <li>
                Performed start-to-finish diligence across multiple investment opportunities; outputs included competitor analysis, market sizing, financial forecasting, customer references and valuation
                </li>
                <li>
                Advised partnership to pass on nine evaluated investment opportunities across the cybersecurity, blockchain, and asset management sectors
                </li>
                <li>
                Advised a cybersecurity startup on exit strategies and met with the CEO to investigate their market position
                </li>
            </ul>
            </div>
        </div>
    }
}

export default TappanHill;