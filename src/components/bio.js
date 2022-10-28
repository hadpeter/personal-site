import React, { Component } from "react"
import styled from 'styled-components'
import { Icon } from '@iconify/react'

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const IconInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;

`

const StyledIcon = styled(Icon)`
    color: ${({ color }) => color};
`

class Bio extends Component{
    render(){
        return <div className = "Content">
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="bio">
            <div class = "text-center">
                <h1>Hadley Peterson</h1> 
                <p class = "bio-blurb">
                I'm a senior associate software engineer at Capital One passionate about FinTech, social entrepreneurhsip and cloud technology. I am a University of Michigan grad with a degree in Computer Science from the College of Engineering. Outside work, I enjoy exploring crypto, meditating, and practicing yoga.
                </p>
            </div> 
            </section>
            <IconContainer>
                <IconInnerContainer>
                    <a href = "https://www.linkedin.com/in/hadley-peterson/">
                        <StyledIcon icon = "akar-icons:linkedin-fill" color='blue'/>
                    </a>
                    <a href = "https://github.com/hadpeter">
                        <StyledIcon icon="charm:github" color='black'/>
                    </a>
                    <a href = "https://hadleypeterson.substack.com/publish?utm_source=menu">
                        <StyledIcon icon="simple-icons:substack" color='orange'/>
                    </a>
                </IconInnerContainer>
            </IconContainer>
            <hr></hr>
        </div>
    }
}

export default Bio;