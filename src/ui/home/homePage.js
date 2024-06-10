import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Style from "./style/SubMenuStyle"
import RailContainer from "./videoRailContainer";
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

    const [list, setList] = useState([]);
    const [index, setIndex] = useState(0);
    const [top, setTop] = useState(0);
    const [content, setContent] = useState({});
    const [hlsUrl, setHlsUrl] = useState("");

    let categoryIndex = 0;

    let currentIndex = 0;

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
        } else if (code === 39) {
            // RIGHT
        } else if (code === 27) {
            // PRE
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
                        Mock.categoryList.map((item, i) => {
                            return (
                                (i === index) ?
                                    <SubmenuFocus><MenuTitleFocus>{item.name}</MenuTitleFocus></SubmenuFocus> :
                                    <SubmenuUnFocus><MenuTitleUnFocus>{item.name}</MenuTitleUnFocus></SubmenuUnFocus>
                            )
                        })
                    }
                </Menu2depth>
            </MenuList>
            <ContentContainer>
                <IndicatorLayout>
                    <Indicator>
                        <IndicatorText>HOME > ViDeO > Recommended</IndicatorText>
                    </Indicator>
                </IndicatorLayout>

                {/*<ChannelGuideLayout style={{marginTop: top}}>*/}
                <Container>
                    <sapn>SPAN</sapn>
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