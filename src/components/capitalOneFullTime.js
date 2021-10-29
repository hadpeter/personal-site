import React, { Component } from "react";
import FullTime from "./fulltime";

class CapitalOneFullTime extends Component{
    render(){
        return <div class="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div class = "text-left">
            <h2>
                Associate Software Engineer
            </h2>
            <h class = "text-muted">
                Capital One <br></br>
                August 2021 - Present
            </h>
            <ul class = "text-muted">
                <li>Led POC for enabling runtime lineage of features in the QA environment by integrating lineage package into the existing featuring store sdk. Collaborated across teams and demo’ed POC to stakeholders. Lineage allows customers to understand the datasources used to create the outputted feature dataset.</li>
                <li>Developed script to automate mapping the extract class names to a feature in order to group features by shared extracts. Findings were used to analyze cost savings for reusing extracts.</li>
                <li>Enabled slack notification events upon a feature job completing or failing. Events include useful debugging information for Machine Learning Engineers such as links to splunk logs, a useful error message, and other feature data</li>
            </ul>
            </div>
        </div>
    }
}

export default CapitalOne;