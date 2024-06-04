import styled from "styled-components"
import React, {useEffect} from "react";
import Controller from "../tvguide/controller";

const GuideContainer = styled.div`
    height: 1080px;
    width: 267px;
    margin-right: 0px;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 40.45%, rgba(0, 0, 0, 0) 100%);
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

const GuidePage = () => {

    useEffect(() => {
    }, []);


    return (
        <GuideContainer>
            <div style={{height: "100%", display: "flex", verticalAlign: "middle"}}>
                <Title>TV GUIDE</Title>
                <img style={{margin: "auto", width: "48px", height: "48px"}} src={Controller.path + '/image/icon/icon_arrow_right.png'} alt={""}/>
            </div>
        </GuideContainer>
    )
}

export default GuidePage