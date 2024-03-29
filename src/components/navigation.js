import React, { Component } from "react";

class Navigation extends Component{
    render(){
        return <div class = "navigation">
            <nav class="sidenav navbar-expand-lg navbar-dark fixed-top sidenav" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Hadley Peterson</span>
                <span class="d-none d-lg-block">
                    <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="favicon.ico" alt=""/>
                </span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <ul class="nav-item">
                <ul class = "list-unstyled">
                <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#bio">About</a>
                </li>
                <br></br>
                <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#internships">Work Experience</a>
                </li>
                <br></br>
                <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#education">Education</a>
                </li>
                <br></br>
                <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#studentorgs">Organizations</a>
                </li>
                <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
                </li>
                <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
                </li>
                </ul>
                </ul>
            </ul>
            </div>
            </nav>
        </div>
    }
}

export default Navigation;