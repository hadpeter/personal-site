import React, { Component } from "react";
import FullTime from "./fulltime";

class CapitalOneFullTime extends Component{
    render(){
        return <div class="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div class = "text-left">
            <h2>
                Senior Associate Software Engineer
            </h2>
            <h class = "text-muted">
                Search Optimization <br></br>
                Capital One <br></br>
                July 2022 - Present
            </h>
            <ul class = "text-muted">
                <li>Enabled standardization at the dataset column level to promote reuse and joining of data; updated batch ETL jobs, OpenSearch index and API to support processing, storage, and serving of standardization fields</li>
                <li>Piloted search evaluation product, winning internal buy-in to develop complete product; onboarded multiple teams to search evaluation product; product was adopted as standard practice in roll out of search changes</li>
                <li>Enhanced backend to unify datasets using the same underlying data across platforms into a single search result; combining all data platforms containing a datasource users' experience parsing search results</li>
                <li>Engineered internal tool where data scientists register code snippets with datasets; association between datasets and code snippets is used to onboard team members to data ecosystem </li>
                <li>Onboarded 30+ new hires to Agile methodologies used at Capital One</li>
            </ul>
            <h2>
                Associate Software Engineer
            </h2>
            <h class = "text-muted">
                Machine Learning Platforms <br></br>
                Capital One <br></br>
                August 2021 - July 2022
            </h>
            <ul class = "text-muted">
                <li>Pioneered compute alternative for enterprise batch feature calculations, implementing operator to run feature jobs on Kubernetes. Yielded 10x speed boost compared to existing option, Elastic Map Reduce.</li>
                <li>Piloted use of hierarchical namespaces to support division-wide configuration inheritance. Integrated open source hierarchical namespace controller into our system which can be used to enable parent-child namespace relationship. The hierarchical namespace relationship not only organizes a cluster, but can be used to pass configurations down the hierarchy. Shared configurations simplified the data scientist onboarding process and improved debugging feature failures.</li>
                <li>Led proof of concept to enable runtime lineage for features. Integration provided users with lineage graphs, data transformations, and other information to help data scientists meet model regulatory requirements.</li>
                <li>Designed and implemented migration of IAM resource deployment to a managed pipeline. Documented organization-wide approach to assist other teams in CI/CD efforts.</li>
            </ul>
            </div>
        </div>
    }
}

export default CapitalOneFullTime;