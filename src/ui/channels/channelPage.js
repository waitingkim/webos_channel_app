import styled from "styled-components"
import React, {useEffect} from "react";
import Controller from "../tvguide/controller";

const ChannelListContainer = styled.div`
    height: 1080px;
    width: 1425px;
    //background-color: beige;
    overflow: hidden;
    background-color: transparent;
    display: flex;
`

const ChannelList = styled.div`
    margin-top: -95px;
    width: 355px;
    height: 1080px;
    //background-color: aquamarine;
`

const Channel = styled.div`
    width: 290px;
    height: 163px;
    margin: auto auto 15px;
    position: relative;
    border-radius: 4px
`

const ChannelDim = styled.div`
    width: 290px;
    height: 163px;
    margin: auto auto 15px;
    position: absolute;
    top: 0px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.02) 48.14%, rgba(0, 0, 0, 0.7) 84.14%);
    border-radius: 4px
`

const CurrentChannel = styled.div`
    width: 355px;
    height: 200px;
    background-color: #15D199;
    margin: 15px auto;
    position: relative;
    border-radius: 4px
`

const CurrentChannelInfo = styled.div`
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const CurrentChannelNumber = styled.div`
    font-family: Inter;
    font-size: 60px;
    font-weight: 800;
    line-height: 72.61px;
    text-align: center;
    color: #FFFFFF;

`

const ChannelInfo = styled.div`
    position: absolute;
    display: flex;
    top: 120px;
    left: 15px;
`
const ChannelNumber = styled.div`
    font-family: Inter;
    font-size: 26px;
    font-weight: 700;
    line-height: 31.47px;
    text-align: left;
    color: #BBBBBB;
    margin-right: 15px;
`
const ChannelName = styled.div`
    font-family: Inter;
    font-size: 26px;
    font-weight: 700;
    line-height: 31.47px;
    text-align: left;
    color: #BBBBBB;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 200px;
`

const ChannelDetailLayout = styled.div`
    width: 1062px;
    height: 128px;
    background-color: transparent;
    margin: auto;
`
const ChannelDetailName = styled.div`
    font-family: Inter;
    font-size: 60px;
    font-weight: 700;
    line-height: 72.61px;
    text-align: left;
    color: #FFFFFF;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const ChannelDetailState = styled.div`
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
    text-align: left;
    color: rgba(21, 209, 153, 1);

`

const ChannelPage = ({channelList, channelIndex, groupTitleList}) => {

    return (
        <ChannelListContainer>
            <ChannelList>
                {
                    channelList.map((ch, index) => {
                        if (index === channelIndex) {
                            return (
                                <CurrentChannel key={ch.id}>
                                    <CurrentChannelInfo>
                                        <div style={{marginTop: "10px"}}>
                                            <img style={{margin: "auto", width: "48px", height: "48px"}}
                                                 src={Controller.path + '/image/icon/icon_arrow_up.png'} alt={""}/>
                                        </div>
                                        <CurrentChannelNumber>{(ch.type === 'channel') ? ch.chno : groupTitleList[ch.group]}</CurrentChannelNumber>
                                        <div style={{marginBottom: "10px"}}>
                                            <img style={{margin: "auto", width: "48px", height: "48px"}}
                                                 src={Controller.path + '/image/icon/icon_arrow_down.png'} alt={""}/>

                                        </div>
                                    </CurrentChannelInfo>
                                </CurrentChannel>
                            )
                        } else {
                            return (
                                (ch.chlogo !== '') ?
                                    <Channel key={ch.id}>
                                        <img style={{width: "290px", height: "163px", borderRadius: "4px"}}
                                             src={(ch.type === 'channel') ? ch.chlogo : Controller.path + ch.chlogo}
                                             alt={""}/>
                                        <ChannelDim/>
                                        <ChannelInfo>
                                            <ChannelNumber>{(ch.type === 'ad_video') ? 'AD' : ch.chno}</ChannelNumber>
                                            <ChannelName>{(ch.type === 'ad_video') ? '' : ch.name}</ChannelName>
                                        </ChannelInfo>
                                    </Channel>
                                    : <Channel key={ch.id}></Channel>
                            )
                        }
                    })
                }
            </ChannelList>
            <ChannelDetailLayout>
                <div style={{marginLeft: "20px"}}>
                    {
                        (channelList.length > 0) ? <div style={{display: "flex"}}>
                            <ChannelDetailName
                                style={(channelList[channelIndex].type === 'channel') ? {marginRight: "50px"} : {marginRight: "0px"}}> {
                                (channelList[channelIndex].type === 'channel') ?
                                    groupTitleList[channelList[channelIndex].group] : ''
                            } </ChannelDetailName>
                            <ChannelDetailName>{channelList[channelIndex].name}</ChannelDetailName>
                        </div> : <div></div>
                    }

                </div>
                <div style={{marginLeft: "20px", marginTop: "10px"}}>
                    <ChannelDetailState>Now Playing</ChannelDetailState>
                </div>
            </ChannelDetailLayout>
        </ChannelListContainer>
    )
}

export default ChannelPage