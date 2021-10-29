import React, { Component } from "react";
import Internships from "./internships";

class CapitalOne extends Component{
    render(){
        return <div class="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div class = "text-left">
            <h2>
                Software Engineer Intern
            </h2>
            <h class = "text-muted">
                Capital One <br></br>
                June 2020 - August 2020
            </h>
            <ul class = "text-muted">
                <li>Built API to convert credit card network tokens into relevant transaction information. Gathered data by connecting to AWS RDS instance and integrated with the Mastercard API. Achieved over 85% code coverage with zero identified security hotspots.</li>
                <li>Engineered scalable serverless product with minimal costs, failover ability, and high performance. Averaged response times of 100 ms for the product. Presented to leadership the advantages and drawbacks of using serverless architecture for APIs.</li>
                <li>Developed automated pipeline to deploy a lambda with an application load balancer using Jenkins. Integrated functional and unit testing, along with static code analysis resulting in CI/CD for our product.</li>
                <li>Created Angular frontend to cleanly display information returned by our API to fraud agents. Allows for search capability and specific search field selection.</li>
            </ul>
            </div>
        </div>
    }
}

export default CapitalOne;