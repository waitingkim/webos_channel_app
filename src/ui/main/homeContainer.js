import styled from "styled-components"
import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Controller from "../tvguide/controller";

const HomeContainer = styled.div`
    height: 1080px;
    width: 228px;
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
    width: 110px;
    gap: 0px;
    opacity: 1;
    color: rgba(255, 255, 255, 0.6);

`

const HomePage = () => {

    const navigate = useNavigate();

    useEffect(() => {
    }, []);

    function move() {
        navigate('/vertical')
    }

    return (
        <HomeContainer>
            <div style={{height: "100%", display: "flex", verticalAlign: "middle"}}>
                <img style={{margin: "auto", width: "48px", height: "48px"}} src={Controller.path + '/image/icon/icon_arrow_left.png'}
                     alt={""}/>
                <Title>HOME</Title>
            </div>
        </HomeContainer>
    )
}

export default HomePage