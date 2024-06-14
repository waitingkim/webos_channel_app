import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Style from "./style/SubMenuStyle"
import RailContainer from "./videoRailContainer";
import Mock from "../../mock/Mock";
import Container from "../../controller/Container";
import styled, {keyframes} from "styled-components";
import '../../style/style.css'

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


const animation = keyframes`
    0% {
        transform: translate(0px, 0px);
        animation-timing-function: ease-in-out
    }
    50% {
        animation-timing-function: ease-in-out
    }
    100% {
        transform: translate(-315px, 0px);
        animation-timing-function: ease-in-out
    }
`;

const ModalOpen = styled`
    animation: ${animation} 0.5s linear both;
`

const ModalClosed = styled`
    animation: closeModal 0.4s ease-out forwards;
`

const HomePage = () => {
    const navigate = useNavigate();

    const [list, setList] = useState([]);
    const [index, setIndex] = useState(0);
    const [top, setTop] = useState(0);
    const [content, setContent] = useState({});
    const [wrapperRef, setWrapperRef] = useState(React.createRef());

    let categoryIndex = 0;
    let currentIndex = 0;

    useEffect((props) => {
        console.log('Container', props)
        // wrapperRef = React.createRef()
        console.log(wrapperRef)
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", keyDown);
        return () => window.removeEventListener("keydown", keyDown);
    }, []);

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

        // controller.event.on('updateContent', (data) => {
        //     console.log('updateContent', data)
        //     if (data.content !== undefined) {
        //         setHlsUrl(data.content.url)
        //         setContent(data.content)
        //         cotent = data.content;
        //     }
        // })
        // console.log('GuidePage init 1', location.state)

    }, []);

    const keyDown = (event) => {
        const code = event.keyCode;
        console.log('HomePage keyDown : ', code)
        console.log('HomePage index : ', index)
        if (code === 40) {
            //DOWN
            if ((Mock.categoryList.length - 1) > categoryIndex) {
                categoryIndex++
            } else {
                categoryIndex = 0;
            }
            setIndex(categoryIndex)
        } else if (code === 38) {
            // UP
            if (categoryIndex === 0) {
                categoryIndex = Mock.categoryList.length - 1;
            } else {
                categoryIndex--;
            }
            setIndex(categoryIndex)
        } else if (code === 37) {
            // LEFT
            // 레이어 펴기
            wrapperRef.current.classList.remove('menu-close')
            wrapperRef.current.classList.add('menu-open')
        } else if (code === 39) {
            // RIGHT
            // 레이어 접기
            console.log('wrapper: ', wrapperRef.current)
            console.log('wrapper: ', wrapperRef.current.classList)
            wrapperRef.current.classList.remove('menu-open')
            wrapperRef.current.classList.add('menu-close')

        } else if (code === 27) {
            // PRE
            navigate(-1)
        }
    };

    return (
        <PageContainer ref={wrapperRef}>
            <MenuList>
                <Menu2depth>
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
                <Menu2depthClose>
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
                <IndicatorLayout>
                    <Indicator>
                        <IndicatorText>HOME > ViDeO > Recommended</IndicatorText>
                    </Indicator>
                </IndicatorLayout>

                {/*<ChannelGuideLayout style={{marginTop: top}}>*/}
                <Container>
                </Container>
                <div>
                    {
                        list.map((item, i) => {
                            return (
                                // <div style={{color:"white"}}>{item.name}</div>
                                <RailContainer isActive={false} item={item}></RailContainer>
                            )
                        })
                    }
                </div>
                {/*</ChannelGuideLayout>*/}
            </ContentContainer>
        </PageContainer>
    )
}

export default HomePage