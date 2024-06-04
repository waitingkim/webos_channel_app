import styled from "styled-components"
import React, {useEffect, useState} from "react";
import RailContainer from "./railContainer";
import mock from "../../mock/Mock";

import controller from "./controller"
import {useLocation, useNavigate} from "react-router-dom";
import ReactHlsPlayer from "react-hls-player";
import Controller from "./controller";
import Mock from "../../mock/Mock";

const GuideContainer = styled.div`
    width: 1920px;
    height: 1080px;
    flex-grow: 0;
    overflow: hidden;
    background-image: linear-gradient(89deg, rgba(34, 34, 34, 0) 64%, rgba(34, 34, 34, 0.8) 87%, #222 92%), linear-gradient(to bottom, #222 93%, rgba(34, 34, 34, 0.38) 86%, rgba(34, 34, 34, 0) 86%), linear-gradient(to left, rgba(34, 34, 34, 0) 100%, #222 81%, #222 0%), linear-gradient(to bottom, rgba(34, 34, 34, 0.13) 28%, rgba(34, 34, 34, 0.6) 33%, #222 41%);
    //display: flex;
`

const ChannelDescriptionLayout = styled.div`
    width: 947px;
    height: 415px;
    //margin: 0 136px 21px 0;
    //padding: 0 0 1px 60px;
    background-color: transparent;
`
const ChannelThumbnailLayout = styled.div`
    width: 973px;
    height: 415px;
    //margin: 0 9px 21px 0;
    //padding: 0 0 1px 60px;
    background-color: transparent;
    display: flex;
`
const ChannelGuideLayout = styled.div`
    width: 100%;
    height: 665px;
    //margin: 0 9px 21px 0;
    //padding: 0 0 1px 60px;
    background-color: transparent;
`

const Menu2depth = styled.div`
    width: 887px;
    height: 414px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 40px;
    padding-left: 60px;
    padding-top: 60px;
    background-color: transparent;
`

const ChannelGuide = styled.div`
    height: 62px;
    flex-grow: 1;
    font-family: Pretendard;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #d2d4da;
    background-color: transparent;
    padding-left: 20px;
`

const Title = styled.div`
    height: 62px;
    width: auto;
    align-self: stretch;
    flex-grow: 0;
    display: inline;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    //padding: 0 20px 30px;
    //border: solid 2px #d2d4da;
    border-bottom-style: solid;
    border-bottom-width: 4px;
    border-bottom-color: #d2d4da;
`

const NationalGeographic = styled.div`
    align-self: stretch;
    flex-grow: 1;
    font-family: Pretendard;
    font-size: 70px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    padding-top: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
`

const Desc = styled.div`
    align-self: stretch;
    flex-grow: 1;
    font-family: Pretendard;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #92949b;
    padding-top: 10px;
`

const PipSample = styled.video`
    position: absolute;
    width: 777px;
    height: 436px;
    margin: 0 60px 0 136px;
    background-color: transparent;
    object-fit: cover;
`

const PipSampleShadow = styled.div`
    position: absolute;
    width: 777px;
    height: 436px;
    margin: 0 60px 0 136px;
    background-image: linear-gradient(to bottom, #222 0%, rgba(34, 34, 34, 0) 20%, rgba(34, 34, 34, 0) 98%),
    linear-gradient(to top, #222 0%, rgba(34, 34, 34, 0) 20%, rgba(34, 34, 34, 0) 98%),
    linear-gradient(to right, rgba(34, 34, 34, 0) 0%, rgba(34, 34, 34, 0) 79%, #222 98%),
    linear-gradient(to left, rgba(34, 34, 34, 0) 0%, rgba(34, 34, 34, 0) 79%, #222 98%)
`

const GuidePage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [guideList, setGuideList] = useState([]);
    const [index, setIndex] = useState(0);
    const [top, setTop] = useState(0);
    const [content, setContent] = useState({});
    const [hlsUrl, setHlsUrl] = useState("");

    let list = [];
    let currentIndex = 0;
    let currentContent = {}
    let cotent = {}
    let Top10 = [
        Mock.ch[14],
        Mock.ch[3],
        Mock.ch[5],
        Mock.ch[7],
        Mock.ch[20],
        Mock.ch[12],
        Mock.ch[16],
        Mock.ch[11],
        Mock.ch[9],
        Mock.ch[19]
    ]

    // const [currentContent, setCurrentContent] = useState({});


    useEffect(() => {
    }, []);

    // useEffect(() => {
    //     console.log('EVENT currentContent ', currentContent)
    // }, [currentContent]);

    useEffect(() => {
        console.log('===============mock.ch', mock.ch)
        let result = Object.values(mock.ch.reduce((acc, item) => {
            const {group} = item
            acc[group] = acc[group] ? [...acc[group], item] : [item]
            return acc
        }, {}))

        let tempList = result.map((item) => {
            return {
                groupId: item[0].group,
                groupName: mock.gt[item[0].group],
                list: item
            }
        })

        tempList.unshift({
            groupId: 1000,
            groupName: 'Monthly Top 10',
            list: Top10
        })

        setGuideList(tempList)
        list = tempList;
        currentContent = list[0];
        setIndex(currentIndex);
        console.log('========!!', list)

        controller.event.on('updateContent', (data) => {
            console.log('updateContent', data)
            if (data.content !== undefined) {
                setHlsUrl(data.content.url)
                setContent(data.content)
                cotent = data.content;
            }
        })

        console.log('GuidePage init 1', location.state)

    }, []);

    useEffect(() => {
        window.addEventListener("keydown", keyDown);
        return () => window.removeEventListener("keydown", keyDown);
    }, []);

    const keyDown = (event) => {
        const code = event.keyCode;
        console.log('tvguidePage keyDown : ', code)
        // console.log('tvguidePage list : ', list)
        // console.log('tvguidePage currentIndex : ', currentIndex)
        if (code === 40) {
            // DOWN
            if (list.length - 1 > currentIndex) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            currentContent = list[currentIndex]
            setIndex(currentIndex)
            setTop((currentIndex * 436) * -1)
        } else if (code === 38) {
            // UP
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = list.length - 1;
            }
            currentContent = list[currentIndex]
            setIndex(currentIndex)
            setTop((currentIndex * 436) * -1)
        } else if (code === 37) {
            // LEFT
            controller.event.emit('onKeydown', {index: currentIndex, content: currentContent, keyCode: code})
        } else if (code === 39) {
            // RIGHT
            console.log('RIGHT select ', currentContent)
            controller.event.emit('onKeydown', {index: currentIndex, content: currentContent, keyCode: code})
        } else if (code === 13) {
            console.log('select cotent ', cotent)
            console.log('select currentContent ', currentContent)

            let index = 0;
            for (let i = 0; i < mock.ch.length; i++) {
                if (mock.ch[i].chno === cotent.chno) {
                    index = i;
                    break;
                }
            }

            navigate(Controller.path + 'main', { replace: true, state: {channelNo:cotent.chno, channelIndex:index}})

        } else if (code === 27) {
            navigate(Controller.path + 'main', { replace: true, state: location.state})
        }
    };

    return (
        <GuideContainer>
            <div style={{display: "flex"}}>
                <ChannelDescriptionLayout>
                    <Menu2depth>
                        <ChannelGuide>
                            <Title>CHANNEL GUIDE</Title>
                            <NationalGeographic>{(content !== undefined) ? content.name : '_'}</NationalGeographic>
                            <Desc>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut</Desc>
                        </ChannelGuide>
                    </Menu2depth>
                </ChannelDescriptionLayout>
                <ChannelThumbnailLayout>
                    {
                        (hlsUrl !== undefined) ? <div>
                            {

                                hlsUrl.indexOf('m3u8') >= 0 ?
                                    <ReactHlsPlayer
                                        style={{marginLeft: "136px"}}
                                        src={hlsUrl}
                                        autoPlay={true}
                                        controls={false}
                                        width="777px"
                                        height="436px"
                                    /> : <PipSample muted autoPlay loop>
                                        <source src={hlsUrl} type="video/mp4"/>
                                    </PipSample>
                            }

                        </div> : <div/>



                        // content.url.indexOf('m3u8') >= 0 ? <ReactHlsPlayer
                        //     playerRef={playerRef}
                        //     src={content.url}
                        //     autoPlay={true}
                        //     controls={false}
                        //     width="1920px"
                        //     height="1080px"
                        // /> : <PipSample muted autoPlay loop>
                        //     <source src={content.url} type="video/mp4"/>
                        // </PipSample>


                    }
                    <PipSampleShadow/>
                </ChannelThumbnailLayout>
            </div>
            <div style={{overflow: "hidden", height: "665px"}}>
                {/*<ChannelGuideLayout style={{marginTop:"436px"}}>*/}
                <ChannelGuideLayout style={{marginTop: top}}>
                    {
                        guideList.map((item, i) => {
                            return (
                                <RailContainer key={item.groupId} isActive={i === index} item={item}></RailContainer>)
                        })
                    }
                </ChannelGuideLayout>
            </div>
        </GuideContainer>
    )
}

export default GuidePage