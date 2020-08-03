import React, { Component } from "react";

class Quicken extends Component{

    render(){
        return <div class="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div class = "text-left">
            <h2>
                Software Engineering
            </h2>
            <h class = "text-muted">
                Quicken Loans<br></br>
                May 2019 - August 2019
            </h>
            <ul class = "text-muted">
                <li>
                Led an agile development team by owning and managing the team backlog to implement an internal site providing visibility into AWS Dynamo databases; led daily stand-ups, prioritized work items with engineers and business analysts, and removed roadblocks by connecting engineers with appropriate resources.
                </li>
                <li>
                Delivered a more unified design across the site by leading alignment meetings with our User Experience team to define acceptance criteria around the redesign of our single sign on and account management pages; executed all engineering and automated end-to-end testing. 
                </li>
                <li>
                Developed data analytics and tracking across the core site as well as for a new page providing real time loan status insights; synthesized and measured findings to inform customer archetypes and product decision.
                </li>
                <li>
                Identified redundancies in an automated testing suite and implemented reusable functionality to prepare test cases, ultimately cutting down test case set-up code by 80%, reducing the possibility of duplication errors.
                </li>
            </ul>
            </div>
        </div>
    }
}

export default Quicken;