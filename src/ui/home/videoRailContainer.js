import styled from "styled-components"
import ContentContainerLayout from "./videoContainer"
import EmptyContainer from "../tvguide/emptyContainer";
import {useEffect, useState} from "react";
import controller from "../tvguide/controller"

const GuideContainerLayout = styled.div`
    width: 1920px;
    height: 403px;
    flex-grow: 0;
    overflow: hidden;
    background-color: transparent;
    padding-top: 10px;
    //display: flex;
`
const MonthlyTop10 = styled.div`
    //width: 269px;
    height: 61px;
    font-family: Pretendard;
    font-size: 32px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #15d199;
    display: flex;
    align-items: end;
`

const Title = styled.div`
    width: 1920px;
    height: 61px;
    //padding: 0 1453px 0 91px;
    padding-left: 36px;
    margin-left: 44px;
    border: solid 0 #92949b;
    display: flex;
`

const RowDefault = styled.div`
    width: 1920px;
    height: 364px;
    //margin: 61px 0 0;
    background-color: transparent;
    display: flex;
    margin-left: 40px;
    margin-left: -398px;
`

const CountLayout = styled.div`
    //width: 117px;
    height: 43px;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    padding: 0;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.1);
    align-items: end;
    margin-top: 10px;
    margin-left: 40px;
`

const layout = styled.div`

`

const CountText = styled.span`
    height: 37px;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    padding: 0 30px;
    margin-top: 4px; // TV화면에서 가운데 정렬이 안맞음.
`

const Bold = styled.span`
    font-weight: 800;
    color: #15d199;

`

const RailContainer = ({item, railIndex, isActive, initIndex}) => {
    const [contentList, setContentList] = useState([]);
    const [index, setIndex] = useState(-1);
    let curentIndex = initIndex;
    useEffect(() => {
        console.log('RailContainer item: ', item)

        controller.event.on('onKeydown', (data) => {
            // console.log('!!RailContainer railIndex ', railIndex)
            // console.log('!!RailContainer data ', data)
            if (railIndex === data.railIndex) {
                // console.log('////////////key')
                keyDown(data.keyCode)
            }
        })

        controller.event.on('initIndex', (data) => {
            curentIndex = 0;
        })
        setIndex(0)
        console.log(item)
    }, []);

    useEffect(() => {
        setIndex(0)
    }, [item]);


    useEffect(() => {
        if (isActive) {
            controller.event.emit('updateVideoContent', {content: item.list[index]})
        }
    }, [isActive]);

    useEffect(() => {
        if (item.list && index > -1) {
            let showChannels = [];

            showChannels = item.list.filter((item, i) =>
                (i >= index - 1 && i < index + 5)
            ).map((ch) => ch)

            if (index === 0) {
                showChannels.unshift({
                    name: 'empty', date: '', poster: '', rank: ''
                })
            }
            setContentList(showChannels)
            controller.event.emit('updateVideoContent', {content: item.list[index]})
        }
    }, [index, item]);

    const keyDown = (keyCode) => {
        const code = keyCode;
        console.log('RailContainer keyDown : ', code)
        if (code === 38) {
            // UP
        } else if (code === 40) {
            // DOWN
            // setAdIndex(currentIndex)
        } else if (code === 37) {
            // LEFT
            if (curentIndex === 0) {
                // curentIndex = item.list.length - 1;
                controller.event.emit('isMenuOpen', {})
            } else {
                curentIndex--;
            }
            setIndex(curentIndex)
        } else if (code === 39) {
            // RIGHT
            console.log('RailContainer keyDown curentIndex : ', curentIndex)
            if (item.list.length - 1 > curentIndex) {
                curentIndex++;
            } else {
                curentIndex = 0;
            }
            setIndex(curentIndex)
        }
    };


    return (
        <GuideContainerLayout key={item.name}>
            <Title key={item.name}>
                {
                    (isActive) ? <div style={{display: "flex"}}>
                        <MonthlyTop10 style={{alignItems: "center", marginTop: "0px", opacity: "1.0"}} key={item.name}>
                            {item.name}
                        </MonthlyTop10>
                        <CountLayout>
                            <CountText><Bold style={{display: "contents"}}>{index + 1}</Bold> / {item.list.length}
                            </CountText>
                        </CountLayout>
                    </div> : <div>
                        <MonthlyTop10 key={item.name} style={{opacity: "0.5"}}>
                            {item.name}
                        </MonthlyTop10>
                    </div>
                }

            </Title>
            <RowDefault key={item.id}>
                {
                    contentList.map((content, i) => {
                        return (
                            (content.name === 'empty') ? <EmptyContainer/> :
                            <ContentContainerLayout key={item.id} type={item.type} content={content}
                                                    isFocus={i === 1} isActive={isActive}/>
                        )
                    })
                }
            </RowDefault>
        </GuideContainerLayout>
    );
}

export default RailContainer