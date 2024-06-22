import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Style from "./style/SubMenuStyle"
import RailContainer from "./videoRailContainer";
import Mock from "../../mock/Mock";
import Container from "../../controller/Container";
import styled, {keyframes} from "styled-components";
import '../../style/style.css'
import ReactHlsPlayer from "react-hls-player";
import controller from "../tvguide/controller";

const PageContainer = Style.subMenu.PAGE.Container
const AnimationPageContainerClose = Style.subMenu.PAGE.Animation
const MenuList = Style.subMenu.Sub.MenuList
const Menu1depth = Style.subMenu.Sub.Menu1depth
const Menu2depth = Style.subMenu.Sub.Menu2depth
const Menu2depthClose = Style.subMenu.Sub.Menu2depthClose
const Title = Style.subMenu.Sub.Title
const ViDeO = Style.subMenu.Sub.ViDeO
const SubmenuFocus = Style.subMenu.Sub.SubmenuFocus
const MenuTitleFocus = Style.subMenu.Sub.MenuTitleFocus
const SubmenuUnFocus = Style.subMenu.Sub.SubmenuUnFocus
const MenuTitleUnFocus = Style.subMenu.Sub.MenuTitleUnFocus

const TitleCloseBg = Style.subMenu.Sub.TitleCloseBg
const TitleCloseFocus = Style.subMenu.Sub.TitleCloseFocus
const TitleCloseUnFocus = Style.subMenu.Sub.TitleCloseUnFocus
const EllipseFocus = Style.subMenu.Sub.EllipseFocus
const EllipseUnFocus = Style.subMenu.Sub.EllipseUnFocus

const ContentContainer = Style.subMenu.Content.Container
const IndicatorLayout = Style.subMenu.Content.IndicatorLayout
const Indicator = Style.subMenu.Content.Indicator
const IndicatorText = Style.subMenu.Content.IndicatorText


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

const Menu2depth2 = styled.div`
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

const Title2 = styled.div`
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
    margin: 0 60px 0 0;
    background-color: transparent;
    object-fit: cover;
`

const PipSampleShadow = styled.div`
    position: absolute;
    width: 777px;
    height: 436px;
    margin: 0 60px 0 0;
    background-image: linear-gradient(to bottom, #222 0%, rgba(34, 34, 34, 0) 20%, rgba(34, 34, 34, 0) 98%),
    linear-gradient(to top, #222 0%, rgba(34, 34, 34, 0) 20%, rgba(34, 34, 34, 0) 98%),
    linear-gradient(to right, rgba(34, 34, 34, 0) 0%, rgba(34, 34, 34, 0) 79%, #222 98%),
    linear-gradient(to left, rgba(34, 34, 34, 0) 0%, rgba(34, 34, 34, 0) 79%, #222 98%)
`

const HomePage = () => {
    const navigate = useNavigate();

    const [list, setList] = useState([]);
    const [index, setIndex] = useState(0);
    const [rail, setRail] = useState(0);
    const [top, setTop] = useState(0);
    const [content, setContent] = useState({});
    const [wrapperRef, setWrapperRef] = useState(React.createRef());
    const [openMenuRef, setOpenMenuRef] = useState(React.createRef());
    const [closeMenuRef, setCloseMenuRef] = useState(React.createRef());


    const [menuState, setMenuState] = useState({
        open: true
    });

    const [topContent, setTopContent] = useState({});

    let categoryIndex = 0;
    let railIndex = 0;
    let isMenuOpen = true;

    useEffect((props) => {
        console.log('Container', props)
        // wrapperRef = React.createRef()
        console.log(wrapperRef)

        setTopContent({
            categoryName: Mock.categoryList[0].name,
            name: 'Kings Man C',
            desc: 'desc',
            poster: '',
            videoUrl: '/ad_videos/lg_01.mp4'
        })

        controller.event.on('isMenuOpen', (data) => {
            console.log('isMenuOpen', data)
            isMenuOpen = true;
            console.log('wrapperRef', wrapperRef)
            if(wrapperRef.current != null) {
                wrapperRef.current.classList.remove('menu-close')
                wrapperRef.current.classList.add('menu-open')
            }

            if(closeMenuRef.current != null) {
                closeMenuRef.current.classList.remove('menu-fade-in')
                closeMenuRef.current.classList.add('menu-fade-out')
            }
            if(openMenuRef.current != null) {
                openMenuRef.current.classList.remove('menu-fade-out')
                openMenuRef.current.classList.add('menu-fade-in')
            }
            setMenuState({open: isMenuOpen})
        })

    }, []);

    useEffect(() => {
        window.addEventListener("keydown", keyDown);
        return () => window.removeEventListener("keydown", keyDown);
    }, []);

    useEffect(() => {
        console.log('menuState', menuState)
    }, [menuState]);

    useEffect(() => {
        console.log('index : ', index)
        console.log('Mock.categoryList[index].id : ', Mock.categoryList[index].id)

        setList(Mock.videoList(Mock.categoryList[index].id));
    }, [index]);

    useEffect(() => {
        // console.log('===============mock.ch', mock.ch)
        // let result = Object.values(mock.ch.reduce((acc, item) => {
        //     const {group} = item
        //     acc[group] = acc[group] ? [...acc[group], item] : [item]
        //     return acc
        // }, {}))

        // let tempList = result.map((item) => {
        //     return {
        //         groupId: item[0].group,
        //         groupName: mock.gt[item[0].group],
        //         list: item
        //     }
        // })

        // tempList.unshift({
        //     groupId: 1000,
        //     groupName: 'Monthly Top 10',
        //     list: Top10
        // })

        // setGuideList(tempList)
        // list = tempList;
        // currentContent = list[0];
        // setIndex(currentIndex);
        // console.log('========!!', list)

        controller.event.on('updateVideoContent', (data) => {
            console.log('updateVideoContent', data)
            // if (data.content !== undefined) {
            //     setHlsUrl(data.content.url)
            //     setContent(data.content)
            //     cotent = data.content;
            // }

            setTopContent({
                categoryName: Mock.categoryList[categoryIndex].name,
                name: data.content.name,
                desc: 'desc',
                poster: data.content.poster,
                videoUrl: ''
            })
        })
        // console.log('GuidePage init 1', location.state)

    }, []);

    const keyDown = (event) => {
        const code = event.keyCode;
        console.log('HomePage keyDown : ', code)
        console.log('HomePage index : ', index)
        if (code === 40) {
            //DOWN
            if (isMenuOpen) {
                if ((Mock.categoryList.length - 1) > categoryIndex) {
                    categoryIndex++
                } else {
                    categoryIndex = 0;
                }
                setIndex(categoryIndex)
                railIndex = 0;
                setRail(railIndex)
                setTop(0)
                controller.event.emit('initIndex', {})
            } else {
                // 레일
                if ((Mock.videoList(Mock.categoryList[categoryIndex].id).length - 1) > railIndex) {
                    railIndex++;
                } else {
                    railIndex = 0;
                }
                setRail(railIndex)
                controller.event.emit('onKeydown', {keyCode: code, railIndex: railIndex})
                setTop((railIndex * 412) * -1)
            }
        } else if (code === 38) {
            // UP
            if (isMenuOpen) {
                if (categoryIndex === 0) {
                    categoryIndex = Mock.categoryList.length - 1;
                } else {
                    categoryIndex--;
                }
                setIndex(categoryIndex)
                railIndex = 0;
                setRail(railIndex)
                setTop(0)
                controller.event.emit('initIndex', {})
            } else {
                if (railIndex === 0) {
                    railIndex = Mock.videoList(Mock.categoryList[categoryIndex].id).length - 1;
                } else {
                    railIndex--;
                }
                setRail(railIndex)
                controller.event.emit('onKeydown', {keyCode: code, railIndex: railIndex})
                setTop((railIndex * 412) * -1)
            }
        } else if (code === 37) {
            // LEFT
            // 레이어 펴기
            if (!isMenuOpen) {
                // isMenuOpen = true;
                // wrapperRef.current.classList.remove('menu-close')
                // wrapperRef.current.classList.add('menu-open')
                //
                // closeMenuRef.current.classList.remove('menu-fade-in')
                // closeMenuRef.current.classList.add('menu-fade-out')
                //
                // openMenuRef.current.classList.remove('menu-fade-out')
                // openMenuRef.current.classList.add('menu-fade-in')
                // setMenuState({open: isMenuOpen})
                controller.event.emit('onKeydown', {keyCode: code, railIndex: railIndex})
            } else {

            }
        } else if (code === 39) {
            // RIGHT
            // 레이어 접기
            if (isMenuOpen) {
                isMenuOpen = false;
                wrapperRef.current.classList.remove('menu-open')
                wrapperRef.current.classList.add('menu-close')

                openMenuRef.current.classList.remove('menu-fade-in')
                openMenuRef.current.classList.add('menu-fade-out')

                closeMenuRef.current.classList.remove('menu-fade-out')
                closeMenuRef.current.classList.add('menu-fade-in')
                setMenuState({open: isMenuOpen})

            } else {
                controller.event.emit('onKeydown', {keyCode: code, railIndex: railIndex})
            }
        } else if (code === 27) {
            // PRE
            navigate(-1)
        }
    };

    return (
        <PageContainer ref={wrapperRef}>
            <MenuList>
                <Menu2depth ref={openMenuRef}>
                    <Title>
                        <div><img style={{width: "80px", height: "80px"}} src={"./image/icon/icon-video.png"}/></div>
                        <ViDeO>ViDeO</ViDeO>
                    </Title>
                    {
                        Mock.categoryList.map((item, i) => {
                            return (
                                (i === index) ?
                                    <SubmenuFocus><MenuTitleFocus>{item.name}</MenuTitleFocus></SubmenuFocus> :
                                    <SubmenuUnFocus><MenuTitleUnFocus>{item.name}</MenuTitleUnFocus></SubmenuUnFocus>
                            )
                        })
                    }
                </Menu2depth>
                <Menu2depthClose ref={closeMenuRef}>
                    <div style={{width: "390px"}}>
                        <Title style={{
                            width: "80px",
                            paddingLeft: "12px",
                            paddingRight: "6px",
                            paddingBottom: "30px",
                            textAlign: "right",
                            float: "right"
                        }}>
                            <div style={{paddingLeft: "3px", paddingRight: "16px"}}><img
                                src={"./image/icon/icon-video.png"} style={{width: "80px", height: "80px"}}/></div>
                        </Title>
                    </div>

                    {
                        Mock.categoryList.map((item, i) => {
                            return (
                                (i === index) ?
                                    <TitleCloseBg><EllipseFocus><TitleCloseFocus>{item.name.at(0)}</TitleCloseFocus></EllipseFocus></TitleCloseBg> :
                                    <TitleCloseBg><EllipseUnFocus><TitleCloseUnFocus>{item.name.at(0)}</TitleCloseUnFocus></EllipseUnFocus></TitleCloseBg>
                            )
                        })
                    }

                </Menu2depthClose>
            </MenuList>
            <ContentContainer>
                <IndicatorLayout style={{display: (menuState.open) ? "block" : "none"}}>
                    <Indicator>
                        <IndicatorText>HOME > ViDeO > {topContent.categoryName}</IndicatorText>
                    </Indicator>
                </IndicatorLayout>

                <div style={{display: (menuState.open) ? "none" : "flex", marginTop: "20px"}}>
                    <ChannelDescriptionLayout>
                        <Menu2depth2>
                            <ChannelGuide>
                                <Title2>{topContent.categoryName}</Title2>
                                {/*<NationalGeographic>{(content !== undefined) ? content.name : '_'}</NationalGeographic>*/}
                                <NationalGeographic>{topContent.name}</NationalGeographic>
                                <Desc>{topContent.desc}</Desc>
                            </ChannelGuide>
                        </Menu2depth2>
                    </ChannelDescriptionLayout>
                    <ChannelThumbnailLayout>
                        {
                            (topContent.videoUrl !== undefined && topContent.videoUrl !== '') ? <div>
                                {

                                    topContent.videoUrl.indexOf('m3u8') >= 0 ?
                                        <ReactHlsPlayer
                                            style={{marginLeft: "0px"}}
                                            src={topContent.videoUrl}
                                            autoPlay={true}
                                            controls={true}
                                            width="777px"
                                            height="436px"
                                        /> : <PipSample muted autoPlay loop controls>
                                            <source src={topContent.videoUrl} type="video/mp4"/>
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
                <div style={{overflow: "hidden"}}>
                    <div style={{marginTop: top}}>
                        {
                            list.map((item, i) => {
                                return (
                                    <RailContainer key={'id'+ i} isActive={i === rail && !menuState.open} railIndex={i}
                                                   item={item} initIndex={0}></RailContainer>
                                )
                            })
                        }
                    </div>
                </div>
            </ContentContainer>
        </PageContainer>
    )
}

export default HomePage