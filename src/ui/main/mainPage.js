import styled from "styled-components"
import React, {useEffect, useRef, useState} from "react";
import {BrowserRouter, Route, Routes, useNavigate, useLocation} from "react-router-dom";
import ReactHlsPlayer from "react-hls-player";
import TvGuideContainer from "./tvGuideContainer";
import HomeContainer from "./homeContainer";
import mock from "../../mock/Mock";
import ChannelPage from "../channels/channelPage";
import controller from "../tvguide/controller";
import VerticalPage from "../channels/verticalPage";
import Controller from "../tvguide/controller";

const MainContainer = styled.div`
    background: linear-gradient(180deg, rgba(23, 23, 23, 0.1) 0%, rgba(23, 23, 23, 0.75) 37.51%, rgba(23, 23, 23, 0.75) 64.01%, rgba(0, 0, 0, 0.1) 100%);
    display: flex;
    position: absolute;
    overflow: hidden;
`

const MainPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let totalCount = 0;
    const [channels, setChannels] = useState([]);
    const [channelList, setChannelList] = useState([])
    const [channelNumber, setChannelNumber] = useState(-1)

    const playerRef = useRef(null);
    const [hlsUrl, setHlsUrl] = useState("");
    const [isShowNavi, setShowNavi] = useState(true);
    const [channel, setChannel] = useState({});

    let isActive = true;
    let initIndex = 0;
    let initData = {
        channelNo: 401,
        channelIndex: 0
    }

    if (location.state !== null) {
        initData = location.state
    }

    let showNaviTimer = null;
    let count = initData.channelIndex;
    let chList = []


    // f()
    console.log('mainPage === ', initData)

    useEffect(() => {
        console.log('mainPage init 1 location ', location)
        console.log('mainPage init 1 initData ', initData)

        mock.ch.sort((a, b) => {
            if (a.chno < b.chno) return -1;
            if (a.chno > b.chno) return 1;
            return 0;
        });
        setChannels(mock.ch)
        totalCount = mock.ch.length
        showNavi()
    }, []);

    useEffect(() => {
        console.log('mainPage init 2')
        window.addEventListener("keydown", keyDown);
        return () => window.removeEventListener("keydown", keyDown);
    }, []);

    useEffect(() => {
        isActive = isShowNavi
    console.log('mainPage useEffect isShowNavi : ', isActive)
    }, [isShowNavi]);

    useEffect(() => {
        console.log('mainPage channels!!!! ', channels)
        if (channels.length > 0) {
            console.log('mainPage channels!!!! ', initData)
            for (let i = 0; i < channels.length; i++) {
                if (channels[i].chno === initData.channelNo) {
                    initIndex = i;
                    break;
                }
            }
            setChannelNumber(initIndex)
            count = initIndex;
        } else {
            setHlsUrl('EMPTY')
        }

    }, [channels]);

    useEffect(() => {
        console.log('mainPage channelNumber')
        let chList = channels;
        if (chList.length > 0) {
            let ch = chList[channelNumber];

            if (ch !== undefined) {
                let showChannels = []

                if (channelNumber < 4) {
                    let lastList = [];
                    let deepList = [...channels];
                    chList = [...channels];
                    let contents = channels.filter((item, index) =>
                        (index <= channelNumber + 3 && index < (7))).map((ch) => ch)

                    let addCount = 3 - channelNumber;
                    if (addCount > 0) {
                        lastList = deepList.reverse().filter((item, index) => index < (addCount)).map((ch) => ch);
                        lastList = lastList.reverse();
                    }

                    for (let i = 0; i < addCount; i++) {
                        showChannels.push(lastList[i]);
                    }

                    for (let i = 0; i < contents.length; i++) {
                        showChannels.push(contents[i]);
                    }
                    console.log('addCount: ' + addCount)
                    console.log('channels: ', channels)
                    console.log('deepList: ', deepList)

                } else {
                    console.log('channelNumber: ' + channelNumber)

                    showChannels = channels.filter((item, index) =>
                        (index >= (channelNumber - 3) && index <= (channelNumber + 3))
                    ).map((ch) => ch)
                    let addCount = 7 - showChannels.length;
                    for (let i = 0; i < addCount; i++) {
                        showChannels.push(channels[i])
                    }
                }

                let resultList = showChannels;
                setChannelList(resultList);
                console.log('chList[channelNumber]: ', chList[channelNumber])

                setChannel(chList[channelNumber])

                if (chList[channelNumber].type === 'vertical') {
                    // navigate('/main/vertical', {
                    //     replace: true, state: {
                    //         channel: mock.ch[count],
                    //         // channelIndex: count
                    //     },
                    // })
                    setHlsUrl('EMPTY')
                } else {
                    // navigate('/main', {
                    //     replace: true, state: {
                    //         channelNo: mock.ch[count].chno,
                    //         channelIndex: count
                    //     },
                    // })
                    setHlsUrl(chList[channelNumber].url)
                }

            }
        }
    }, [channelNumber]);

    function showNavi() {
        console.log('mainPage showNavi!!!!')
        setShowNavi(true)
        isActive = true;
        console.log('showNavi: ' + isShowNavi)
        clearTimeout(showNaviTimer)
        showNaviTimer = setTimeout(() => {
            setShowNavi(false)
            // console.log('showNavi: ' + isShowNavi)
            isActive = false;
            // navigate('/vertical')
        }, 5000)
    }


    const keyDown = (event) => {
        const code = event.keyCode;
        console.log('mainPage keyDown : ', code)
        console.log('mainPage isActive : ', isActive)
        console.log('mainPage isShowNavi : ', isShowNavi)
        // console.log('tvguidePage list : ', list)
        if (isActive) {
            if (code === 40) {
                if (totalCount - 1 > count) {
                    count++;
                } else {
                    count = 0;
                }
                setChannelNumber(count)
                showNavi()
            } else if (code === 38) {
                // UP
                if (count > 0) {
                    count--;
                } else {
                    count = totalCount - 1;
                }
                setChannelNumber(count)
                showNavi()
            } else if (code === 37) {
                // LEFT
                if (isShowNavi) {
                    navigate( Controller.path + 'home', {
                        replace: false, state: {
                            channelNo: channels[channelNumber],
                            channelIndex: channelNumber
                        }
                    })
                }
            } else if (code === 39) {
                // RIGHT
                console.log('chList :: ', chList)
                console.log('channels :: ', channels)
                console.log('channels :: ', mock.ch)
                console.log('count :: ', channelNumber)
                console.log('navigate :: ', Controller.path +'tvguide')
                if (isShowNavi) {
                    navigate(Controller.path +'tvguide', {
                        replace: false, state: {
                            channelNo: mock.ch[count].chno,
                            channelIndex: count
                        },
                    })
                }
            }
        } else if (code === 13) {
            showNavi()
        }
    };

    return (
        <div>
            <div style={{position: "absolute"}}>

                {
                    channel.type === 'vertical' ? <VerticalPage key={channel.id} content={channel} isActive={!isShowNavi}/> :
                        <div>
                            {
                                hlsUrl.indexOf('m3u8') >= 0 ? <ReactHlsPlayer
                                    playerRef={playerRef}
                                    src={hlsUrl}
                                    autoPlay={true}
                                    controls={false}
                                    width="1920px"
                                    height="1080px"
                                    muted={false}
                                /> : <video autoPlay loop>
                                    <source src={Controller.path + hlsUrl} type="video/mp4"/>
                                </video>}
                        </div>
                }

            </div>
            <div style={{display: isShowNavi ? 'block' : 'none'}}>
                <MainContainer>
                    <HomeContainer></HomeContainer>
                    <ChannelPage channelList={channelList} channelIndex={3} groupTitleList={mock.gt}></ChannelPage>
                    <TvGuideContainer></TvGuideContainer>
                </MainContainer>
            </div>
        </div>
    )
}

export default MainPage