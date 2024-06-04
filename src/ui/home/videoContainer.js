import styled from "styled-components"
import React from "react";
import Controller from "../tvguide/controller";

const ContentContainerLayout = styled.div`
    width: 467px;
    height: 363px;
    border-radius: 10px;
    background-color: transparent;
    position: relative;
`

const ContentContainerUnLayout = styled.div`
    width: 442px;
    height: 363px;
    border-radius: 10px;
    background-color: transparent;
    position: relative;
`

const ContentFocus = styled.div`
    width: 436px;
    height: 255px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin: 10px auto auto;
    padding: 0;
    border: 8px solid transparent;
    border-radius: 10px;
    background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #15d199, #18b4b4);
    background-origin: border-box;
    background-clip: content-box, border-box;
`

const ContentUnFocus = styled.div`
    width: 390px;
    height: 219px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin: 25px auto auto;
    padding: 0;
    border-radius: 10px;
    background-color: yellow;
`

const ImgLayout = styled.img`
    width: 436px;
    height: 255px;
    position: absolute;
`

const VideoLayout = styled.video`
    width: 436px;
    height: 255px;
    position: absolute;
    object-fit: cover;
    display: none;
`

const TitleLayout = styled.div`
    height: 43px;
    align-self: stretch;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 36px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    margin-left: 10px;
`

const TitleFocus = styled.span`
    font-size: 36px;
    color: #fff;
`

const TitleUnFocus = styled.span`
    font-size: 32px;
    color: #92949b;
`

const YearLayout = styled.div`
    height: 43px;
    align-self: stretch;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    margin-left: 10px;
    line-height: 20px;
`

const YearFocus = styled.span`
    font-weight: 600;
    font-weight: bold;
    color: #fff;
`

const YearUnFocus = styled.div`
    font-weight: 600;
    font-weight: normal;
    color: #92949b;
`

const Rank = styled.span`
    width: 87px;
    height: 85px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    -webkit-text-stroke: 3px #fff;
    font-family: Rubik-BoldItalic;
    font-size: 60px;
    font-weight: bold;
    font-stretch: normal;
    font-style: italic;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
    margin-left: 320px;
    margin-top: 130px;
    align-items: center;
    display: flex;
    position: absolute;
`

const VideoContainer = ({isFocus, groupId, content, rank, isActive}) => {
    console.log(content)
    return (
        <div>
            {
                (isFocus && isActive) ?
                    <ContentContainerLayout>
                        <ContentFocus>
                            <ImgLayout
                                src={content.poster}/>
                            {/*<VideoLayout autoPlay muted>*/}
                            {/*    <source src={"/ad_videos/vertical_02.mp4"} type="video/mp4"/>*/}
                            {/*</VideoLayout>*/}
                            {
                                (groupId === 1000) ?
                                    <Rank style={{top: "30px", left: "40px"}}>
                                        {rank}
                                    </Rank> : <div/>
                            }
                        </ContentFocus>
                        <TitleLayout>
                            <TitleFocus>{content.title}</TitleFocus>
                        </TitleLayout>
                        <YearLayout>
                            <YearFocus>{content.open}</YearFocus>
                        </YearLayout>
                    </ContentContainerLayout> :
                    <ContentContainerUnLayout>
                        <ContentUnFocus>
                            <img style={{width: "390px", height: "219px", borderRadius: "10px"}}
                                 src={content.poster}/>
                            {
                                (groupId === 1000) ?
                                    <Rank>
                                        {rank}
                                    </Rank> : <div/>
                            }
                        </ContentUnFocus>
                        <TitleLayout>
                            <TitleUnFocus style={{marginLeft: "20px"}}>{content.name}</TitleUnFocus>
                        </TitleLayout>
                        <YearLayout>
                            <YearUnFocus style={{marginLeft: "20px"}}>{content.date}</YearUnFocus>
                        </YearLayout>
                    </ContentContainerUnLayout>
            }
        </div>
    );
}

export default VideoContainer