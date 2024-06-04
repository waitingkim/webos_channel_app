import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import controller from "../tvguide/controller";
import Style from "./style/SubMenuStyle"
import RailContainer from "./videoRailContainer";
import mock from "../../mock/Mock";
import Mock from "../../mock/Mock";
import Container from "../../controller/Container";

const PageContainer = Style.subMenu.PAGE.Container
const MenuList = Style.subMenu.Sub.MenuList
const Menu1depth = Style.subMenu.Sub.Menu1depth
const Menu2depth = Style.subMenu.Sub.Menu2depth
const Title = Style.subMenu.Sub.Title
const ViDeO = Style.subMenu.Sub.ViDeO
const SubmenuFocus = Style.subMenu.Sub.SubmenuFocus
const MenuTitleFocus = Style.subMenu.Sub.MenuTitleFocus
const SubmenuUnFocus = Style.subMenu.Sub.SubmenuUnFocus
const MenuTitleUnFocus = Style.subMenu.Sub.MenuTitleUnFocus

const ContentContainer = Style.subMenu.Content.Container
const IndicatorLayout = Style.subMenu.Content.IndicatorLayout
const Indicator = Style.subMenu.Content.Indicator
const IndicatorText = Style.subMenu.Content.IndicatorText


const HomePage = () => {
    const navigate = useNavigate();

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

    useEffect(() => {
        window.addEventListener("keydown", keyDown);
        return () => window.removeEventListener("keydown", keyDown);
    }, []);

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

    const keyDown = (event) => {
        const code = event.keyCode;
        console.log('HomePage keyDown : ', code)
        if (code === 27) {
            navigate(-1)
        }
    };

    return (
        <PageContainer>
            <MenuList>
                <Menu2depth>
                    <Title>
                        <div><img style={{width: "80px", height: "80px"}} src={"./image/icon/icon-video.png"}/></div>
                        <ViDeO>ViDeO</ViDeO>
                    </Title>
                    {
                        Mock.categoryList.map((item, i)=>{
                            return(
                                (i ===0) ?
                                <SubmenuFocus><MenuTitleFocus>{item.name}</MenuTitleFocus></SubmenuFocus> :
                                    <SubmenuUnFocus><MenuTitleUnFocus>{item.name}</MenuTitleUnFocus></SubmenuUnFocus>
                            )
                        })
                    }
                    {/*<SubmenuFocus><MenuTitleFocus>Recommended</MenuTitleFocus></SubmenuFocus>*/}
                    {/*<SubmenuUnFocus><MenuTitleUnFocus>Movies</MenuTitleUnFocus></SubmenuUnFocus>*/}
                    {/*<SubmenuUnFocus><MenuTitleUnFocus>Shorts</MenuTitleUnFocus></SubmenuUnFocus>*/}
                    {/*<SubmenuUnFocus><MenuTitleUnFocus>Info</MenuTitleUnFocus></SubmenuUnFocus>*/}
                    {/*<SubmenuUnFocus><MenuTitleUnFocus>Around the Hotel</MenuTitleUnFocus></SubmenuUnFocus>*/}
                    {/*<SubmenuUnFocus><MenuTitleUnFocus>Shopping</MenuTitleUnFocus></SubmenuUnFocus>*/}
                </Menu2depth>
            </MenuList>
            <ContentContainer>
                <IndicatorLayout>
                    <Indicator>
                        <IndicatorText>HOME > ViDeO > Recommended</IndicatorText>
                    </Indicator>
                </IndicatorLayout>

                {/*<ChannelGuideLayout style={{marginTop: top}}>*/}
                <Container><sapn>SPAN</sapn></Container>
                <div>
                    {
                        Mock.videoList(0).map((item, i) => {
                            return(
                                // <div style={{color:"white"}}>{item.name}</div>
                                <RailContainer isActive={false} item={item}></RailContainer>
                            )
                        })

                        // guideList.map((item, i) => {
                        //     return (<RailContainer key={item.groupId} isActive={i === -1} item={item}></RailContainer>)
                        // })
                    }
                </div>
                {/*</ChannelGuideLayout>*/}
            </ContentContainer>
        </PageContainer>
    )
}

export default HomePage