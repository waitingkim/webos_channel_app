import styled from "styled-components"
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import ServiceInfoContainer from "./serviceInfoContainer";
import ChannelManagerContainer from "./channelManagerContainer";
import MaintenanceContainer from "./maintenanceContainer";
import SetContainer from "./settingContainer";

const SettingContainer = styled.div`
    height: 1080px;
    width: 1920px;
    //background-color: beige;
    overflow: hidden;
    background-color: transparent;
    display: flex;
`

const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 15px;
    color: white;
    background-color: black;

    &.active {
        background-color: chocolate;
    }

    &:focus {
        background-color: chocolate;
    }
`

const Title = styled.div`
    font-family: Inter;
    font-size: 60px;
    font-weight: 700;
    line-height: 31.47px;
    text-align: left;
    color: #BBBBBB;
    width: 100%;
    height: 80px;
    margin-top: 30px;
    margin-left: 20px;
`

const GroupTitle = styled.div`
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: 31.47px;
    color: #000000;
    width: 180px;
    height: 50px;
    margin-right: 10px;
    margin-left: 20px;
    background-color: aquamarine;
    align-content: center;
    text-align: center;

    &.active {
        background-color: darkgrey;
    }

    &:hover {
        background-color: cadetblue;
    }
`

const ChannelContainer = styled.div`
    width: 500px;
    height: 900px;
    margin-left: 20px;
    background-color: transparent;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    margin-top: 20px;
`

const ChannelLayout = styled.div`
    width: 400px;
    height: 87px;
    margin-left: 0px;
    display: flex;
    background-color: yellow;
    margin-bottom: 10px;
    align-items: center;
`

const ChannelTitleLayout = styled.div`
    //display: flex;
    font-size: 20px;
    font-weight: 700;
    line-height: 31.47px;
`


const ChannelTitle = styled.div`
    display: flex;
    font-size: 60px;
    font-weight: 700;
    line-height: 31.47px;
    color: #FFFFFF;
`

const ChannelCheckLayout = styled.div`
    display: grid;
    height: 50px;
    width: 100px;
    background-color: transparent;
    align-items: center;
    text-align: center;
`

const DetailChannelLayout = styled.div`
    width: 100%;
    height: 900px;
    margin-left: 20px;
    background-color: transparent;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: hidden;
    margin-top: 20px;
`
const Label = styled.div`
    display: flex;
    font-size: 40px;
    font-weight: 700;
    line-height: 31.47px;
    color: #FFFFFF;
    margin-top: 20px;
    margin-bottom: 30px;
    width: 600px;
`

const SettingPage = ({mock, updateChannel, onExit}) => {

    const [selectIndex, setSelectIndex] = useState(0)
    const [chList, setChList] = useState([])
    const [groupListData, setGroupListData] = useState([])

    let keyState = 'menu'
    const menuRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
    let menuIndex = 0;
    const [selectMenu, setSelectMenu] = useState(0)

    const [selectItem, setSelectItem] = useState({
        id: Math.random(),
        chlogo: "",
        chno: -1,
        name: "",
        group: "",
        url: "",
        type: "empty",
        action: ""
    })

    useEffect(() => {
        console.log('SettingPage : ', mock)

        document.onkeydown = function (event) {
            var keyCode = event.keyCode;
            console.log('SettingPage onkeydown: ' + keyCode, keyState)

            switch (keyState) {
                case 'menu':
                    switch (keyCode) {
                        case 13:
                            onChaneMenu();
                            break;
                        case 37:
                            onExitMenu();
                            break;
                        case 38:
                            if (menuIndex === 0) {
                                menuIndex = menuRefs.length - 1;
                            } else {
                                menuIndex--;
                            }
                            menuFocus(menuIndex)
                            break;
                        case 40:
                            if (menuIndex < menuRefs.length - 1) {
                                menuIndex++;
                            } else {
                                menuIndex = 0
                            }
                            menuFocus(menuIndex)
                            break;
                    }
                    break;
            }

        }

        let groupList = {}
        groupList['0'] = []
        mock.ch.forEach((ch) => {
            groupList['0'].push(ch)
            if (groupList.hasOwnProperty(ch.group)) {
                groupList[ch.group].push(ch)
            } else {
                groupList[ch.group] = []
                groupList[ch.group].push(ch)
            }
        })

        console.log('groupList', groupList)
        setGroupListData(groupList)

        setSelectItem(mock.ch[selectIndex])
        menuFocus(menuIndex)
    }, []);

    function onChaneMenu() {
        setSelectMenu(menuIndex)
    }

    function onExitMenu() {
        onExit()
    }

    function menuFocus(index) {
        console.log('menuFocus', index)
        menuRefs.forEach(menu => {
            menu.current.classList.remove('active')
        })
        menuRefs[index].current.classList.add('active')
    }

    function onClickGroupBtn(e, e1, e2) {
        console.log(e)
        console.log(menuRefs[0].current)
        // menuRefs[0].current.classList.add('active')
    }

    function onFocus(e) {
        console.log(e)
    }


    return (
        <SettingContainer>
            {/*<div style={{backgroundColor:"darkgray", opacity:"0.1", width:"1920px", height:"1080px", position:"absolute"}}/>*/}
            <div style={{width: "150px", textAlign: "center", zIndex: "1", backgroundColor: "darkgray"}}>
                <Circle ref={menuRefs[0]}
                        style={{display: "flex", marginBottom: "20px", marginTop: "20px", opacity: "1"}}>
                    <div style={{margin: "auto"}}>Service Info</div>
                </Circle>
                <Circle ref={menuRefs[1]} style={{display: "flex", marginBottom: "20px"}}>
                    <div style={{margin: "auto"}}>Settings</div>
                </Circle>
                <Circle ref={menuRefs[2]} style={{display: "flex", marginBottom: "20px"}}>
                    <div style={{margin: "auto"}}>Channels</div>
                </Circle>
                <Circle ref={menuRefs[3]} style={{display: "flex", marginBottom: "20px"}}>
                    <div style={{margin: "auto"}}>Maintenance</div>
                </Circle>
            </div>
            <div style={{backgroundColor: "transparent", width: "100%", height: "100%"}}>
                <Title style={{display: "flex"}}>

                    {
                        selectMenu === 0 ? <ServiceInfoContainer/> : selectMenu === 1 ?
                            <SetContainer/> : selectMenu === 2 ? <ChannelManagerContainer/> : <MaintenanceContainer/>
                    }

                </Title>
                <div style={{display: "flex", marginBottom: "20px"}}>
                    {
                        Object.keys(groupListData).map((key) => {
                            return (
                                <GroupTitle key={key} className={'active'} onFocus={onFocus} onClick={onClickGroupBtn}
                                            id={'group_' + key}>{mock.gt[key]}({groupListData[key].length} )</GroupTitle>)
                        })
                    }

                </div>
                <hr/>
                <div style={{display: "flex"}}>
                    <ChannelContainer>
                        {
                            mock.ch.map((ch, index) => {
                                return (<ChannelLayout key={ch.id}>
                                    <ChannelCheckLayout><input type="checkbox"/></ChannelCheckLayout>
                                    <ChannelTitleLayout>
                                        <div>{ch.id}</div>
                                        <div>{ch.name}</div>
                                    </ChannelTitleLayout>
                                </ChannelLayout>)
                            })
                        }

                    </ChannelContainer>
                    <DetailChannelLayout>
                        <div style={{display: "flex", height: "200px"}}>
                            <div style={{height: "163px", width: "290px", marginTop: "20px", marginLeft: "20px"}}>
                                <img style={{
                                    margin: "auto",
                                    width: "290px",
                                    height: "163px",
                                    border: "1px outset white"
                                }}
                                     src={selectItem.chlogo} alt={""}/>
                            </div>
                            <div style={{marginLeft: "20px", marginTop: "40px", width: "700px"}}>
                                <ChannelTitle>{selectItem.name}</ChannelTitle>
                                <div style={{height: "70px"}}></div>
                                <div style={{color: "#FFFFFF"}}>Startup Ch enable/disable</div>
                            </div>
                            <div>SAVE, DELETE</div>
                        </div>
                        <hr/>
                        <div style={{display: "flex"}}>
                            <div>
                                {/*<Label>CH INDEX : <input style={{marginLeft:"10px"}} readOnly={true} disabled={true} type="text" name="st_index" value={selectIndex}/></Label>*/}
                                <Label>CH TYPE : <input style={{marginLeft: "10px"}} readOnly={true} disabled={true}
                                                        type="text" name="st_name" value={selectItem.type}/></Label>
                                <Label>CH NUMBER : <input style={{marginLeft: "10px"}} readOnly={true} disabled={true}
                                                          type="text" name="st_number" value={selectItem.chno}/></Label>
                                <Label>CH Name : <input style={{marginLeft: "10px"}} readOnly={true} disabled={true}
                                                        type="text" name="st_name" value={selectItem.name}/></Label>
                                <Label>CH Category : <input style={{marginLeft: "10px"}} readOnly={true} disabled={true}
                                                            type="text" name="st_name"
                                                            value={selectItem.group}/></Label>
                            </div>
                            <div>
                                <Label>Logo : <input style={{marginLeft: "10px"}} readOnly={true} disabled={true}
                                                     type="text" name="st_name" value={selectItem.chlogo}/></Label>
                                <Label>Service ID : <input style={{marginLeft: "10px"}} readOnly={true} disabled={true}
                                                           type="text" name="st_id" value={selectItem.id}/></Label>
                                <Label>IP Port : <input style={{marginLeft: "10px"}} readOnly={true} disabled={true}
                                                        type="text" name="st_ip" value={''}/></Label>
                                <Label>Origin URL : <input style={{marginLeft: "10px"}} readOnly={true} disabled={true}
                                                           type="text" name="st_url" value={selectItem.url}/></Label>

                            </div>
                        </div>

                    </DetailChannelLayout>
                </div>
            </div>

        </SettingContainer>
    )
}

export default SettingPage