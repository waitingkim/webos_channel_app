import styled from "styled-components"
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Controller from "../tvguide/controller";

const AdListContainer = styled.div`
    height: 1080px;
    width: 1920px;
    //background-color: beige;
    overflow: hidden;
    background-color: transparent;
    display: flex;
`

// export default function (props) {
// }

const AdPage = ({adList}) => {
    const navigate = useNavigate();
    const [adNumber, setAdNumber] = useState(0)
    const [showAd, setShowAd] = useState('')

    let showAdTime = 3000;

    useEffect(() => {
        console.log('AdPage channelList : ', adList)
        setAdNumber(0)
        showAdPlay()
    }, []);

    useEffect(() => {
        console.log('AdPage channelList : ', adList)
        setShowAd(adList[adNumber])
    }, [adList]);

    useEffect(() => {
        console.log('AdPage adNumber : ', adNumber)
        console.log('AdPage list.length : ', adList.length)
        if (adNumber < adList.length) {
            setShowAd(adList[adNumber])
            showAdPlay()
        } else {
            move()
        }
    }, [adNumber]);

    function showAdPlay() {
        setTimeout(() => {
            setAdNumber(adNumber + 1)
        }, showAdTime)
    }

    function move() {
        navigate(Controller.path + 'main', { replace: false})
    }

    return (
        <AdListContainer>
            <img style={{width: "1920px", height: "1080px"}} src={showAd} alt={""}/>
        </AdListContainer>
    )
}

export default AdPage