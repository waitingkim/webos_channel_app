import styled from "styled-components"
import React, {useEffect, useState} from "react";
import {useLocation } from "react-router-dom";

const HomeContainer = styled.div`
    height: 1080px;
    width: 1920px;
    margin-right: 20px;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 53.95%);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: transparent;
    position: relative;
`

const Title = styled.div`
    font-family: Inter;
    font-size: 30px;
    font-weight: 500;
    line-height: 36.31px;
    text-align: left;
    margin: auto;
    gap: 0px;
    opacity: 1;
    color: rgba(255, 255, 255, 0.6);

`

const OtherPage = () => {
    const location = useLocation();

    const [path, setPath] = useState('')

    useEffect(() => {
        console.log('Not Found', location)
        setPath(location.pathname)
    }, []);


    return (
        <HomeContainer>
            <div style={{height: "100%", display: "flex", verticalAlign: "middle"}}>
                <Title>v0.0.5</Title>
                <Title>Not Found Path= {path}</Title>
            </div>
        </HomeContainer>
    )
}

export default OtherPage