import styled from "styled-components"
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import mock from "../../mock/Mock";
import Controller from "../tvguide/controller";
import ReactHlsPlayer from "react-hls-player";

const PageContainer = styled.div`
    height: 1080px;
    width: 1920px;
    overflow: hidden;
    background-image: linear-gradient(to bottom, #000 0%, #666);
    display: flex;
`

const ChannelContainer = styled.div`
    height: 1080px;
    width: 1920px;
    //background-color: beige;
    overflow: hidden;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4) 54%);
    display: flex;
`

const ChannelDimContainer = styled.div`
    position: absolute;
    height: 1080px;
    width: 1920px;
    //background-color: beige;
    overflow: hidden;
    //background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4) 54%);
    display: flex;
    background-color: rgba(0, 0, 0, 0.6);
`

const ChannelTitleLayout = styled.div`
    width: 637px;
    height: 1080px;
    flex-grow: 0;
    padding: 0 0 0 60px;
    background-image: linear-gradient(to bottom, rgba(23, 23, 23, 0.1), rgba(23, 23, 23, 0.75), rgba(23, 23, 23, 0.75), rgba(0, 0, 0, 0.1));
`

const ChannelTitleInfo = styled.div`
    width: 537px;
    height: 980px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding: 60px 40px 60px 0;
`

const ChannelTitle = styled.span`
    height: 111px;
    width: 537px;
    //flex-grow: 1;
    font-family: Pretendard;
    font-size: 60px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    margin-bottom: 40px;
    border-bottom: solid 1px #92949b;
`

const ChannelTitleDesc = styled.span`
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
    color: #d2d4da;
`


const ChannelContentLayout = styled.div`
    width: 850px;
    height: 1080px;
    flex-grow: 0;
    padding: 0 114px;
`

const ChannelBannerLayout = styled.div`
    width: 432px;
    height: 1080px;
    flex-grow: 0;
`

const ChannelContentFocus = styled.div`
    //     width: 622px;
    //     height: 1056px;
    //     //padding: 60px 281px;
    //     border-radius: 40px;
    //     border-style: solid;
    //     border-width: 12px;
    //     border-image-source: linear-gradient(to right, #15d199, #18b4b4);
    //     border-image-slice: 1;
    position: absolute;
    width: 622px;
    height: 1056px;
    //margin: 10px;
    border: 12px solid transparent;
    border-radius: 40px;
    background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #15d199, #18b4b4);
    background-origin: border-box;
    background-clip: content-box, border-box;
`

const ChannelContentUnFocus = styled.div`
    position: absolute;
    width: 622px;
    height: 1056px;
    //margin: 10px;
    border: 12px solid transparent;
    border-radius: 40px;
    background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, dimgray, dimgray);
    background-origin: border-box;
    background-clip: content-box, border-box;
`

const ChannelContentBg = styled.div`
    position: absolute;
    top: 0px;
    width: 622px;
    height: 1056px;
    border: 12px solid transparent;
    border-radius: 40px;
    background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, transparent, transparent);
    background-origin: border-box;
    background-clip: content-box, border-box;
`

const VideoFocus = styled.video`
    width: 622px;
    height: 1056px;
    object-fit: cover;
    border-radius: 27px;
`

const ArrowFocus = styled.div`
    position: absolute;
    width: 622px;
    align-items: center;
    display: flex;
`


const VerticalPage = ({content, isActive}) => {
    const navigate = useNavigate();
    const [contentData, setContentData] = useState({});
    const [desc, setDesc] = useState('');
    const [styleValue, setStyleValue] = useState({});
    const [focus, setFocus] = useState('');

    useEffect(() => {
        let temp = mock.verticals.filter((item) => (item.id === content.verticalId)).map(ch => ch)
        setContentData(temp[0])
        setDesc(temp[0].desc.split('<br/>').map(line => {
            return (<span>{line}<br/></span>)
        }))
        if (isActive) {
            setFocus(true)
        } else {
            setFocus(false)
        }

        // let showNaviTimer = setTimeout(() => {
        //     setFocus(true)
        // }, 3000)

    }, []);

    useEffect(() => {
        if (isActive) {
            setFocus(true)
        } else {
            setFocus(false)
        }
    }, [isActive]);

    return (
        <PageContainer>
            <ChannelContainer>
                <ChannelTitleLayout>
                    <ChannelTitleInfo>

                        <ChannelTitle>
                            {contentData.title}
                        </ChannelTitle>

                        <ChannelTitleDesc>
                            {desc}
                        </ChannelTitleDesc>
                    </ChannelTitleInfo>
                </ChannelTitleLayout>
                <ChannelContentLayout>
                    {focus ? <ChannelContentFocus/> : <ChannelContentUnFocus/>}
                    <ChannelContentBg>
                        {/*<video style={{width:"622px", height:"1056px", objectFit:"cover"}} autoPlay loop key={contentData.video}>*/}
                        {/*    <source src={contentData.video} type="video/mp4"/>*/}
                        {/*</video>*/}

                        <ReactHlsPlayer
                            src={contentData.video}
                            autoPlay={true}
                            controls={false}
                            width="622px"
                            height="1056px"
                            muted={false}
                        />

                        <ArrowFocus style={{top: "42px"}}>
                            <img style={{margin: "auto", width: "60px", height: "60px"}}
                                 src={Controller.path + '/image/icon/icon_arrow_up.png'} alt={""}/>
                        </ArrowFocus>
                        <ArrowFocus style={{bottom: "42px",}}>
                            <img style={{margin: "auto", width: "60px", height: "60px"}}
                                 src={Controller.path + '/image/icon/icon_arrow_down.png'} alt={""}/>
                        </ArrowFocus>
                    </ChannelContentBg>
                </ChannelContentLayout>
                <ChannelBannerLayout>
                    <img style={{width: "432px", height: "1080px", objectFit: "cover"}}
                         src={Controller.path + contentData.banner} alt={""}/>
                </ChannelBannerLayout>
            </ChannelContainer>
            {
                focus ? <div/>:<ChannelDimContainer/>
            }

        </PageContainer>
    )
}

export default VerticalPage