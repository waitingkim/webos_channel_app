import './App.css';
import {useEffect, useState} from "react";
import HomePage from "./ui/home/homePage";
import styled from "styled-components"
import GuidePage from "./ui/tvguide/tvguidePage";
import AdPage from "./ui/ad/adPage";
import MainPage from "./ui/main/mainPage"
import {Route, Routes, useLocation} from "react-router-dom";
import OtherPage from "./ui/other/otherContainer";
import Controller from "./ui/tvguide/controller";
import Mock from "./mock/Mock";

const AppContainer = styled.div`
    background: linear-gradient(180deg, rgba(23, 23, 23, 0.1) 0%, rgba(23, 23, 23, 0.75) 37.51%, rgba(23, 23, 23, 0.75) 64.01%, rgba(0, 0, 0, 0.1) 100%);
    display: flex;
    position: absolute;
    overflow: hidden;
`

const AppInfo = styled.div`
    width: 1920px;
    height: 80px;
    top: 0;
    float: right;
    position: absolute;
    color: white;
    font-size: 20px;
    font-weight: 800;
    text-align: right;
    opacity: 0.3;
`

function App() {
    const location = useLocation();
    const [defaultPath, setDefaultPath] = useState('')

    useEffect(() => {
        console.log('LOCATION: ', location)
        // ex) "/media/developer/apps/usr/palm/applications/com.lg.app.signage.dev/index.html"
        Controller.path = location.pathname.split('index.html')[0];
        console.log('Controller.path : ', Controller.path)
    }, []);

    function addKeyItem() {
        console.log("addKeyItem");

        var successCb = function () {
            console.log("Successfully add key item");
            // Do something
        };

        var failureCb = function (cbObject) {
            var errorCode = cbObject.errorCode;
            var errorText = cbObject.errorText;
            console.log(" Error Code [" + errorCode + "]: " + errorText);
        };

        // var signage = new Signage();

        var options2 = {
            policy: {
                // remoteKeyOperationMode: Signage.KeyOperationMode.ALLOW_ALL,
                // localKeyOperationMode: Signage.KeyOperationMode.ALLOW_ALL,
            }
        };

        // signage.setUsagePermission(successCb, failureCb, options2);

        // signage.addKeyItem (successCb, failureCb, {
        //     keyCode : 0x12345678,
        //     virtualKeyCode : 216,
        //     attribute : 2
        // });
        // signage.addKeyItem (successCb, failureCb, {
        //     keyCode : 0x12345678,
        //     virtualKeyCode : 415,
        //     attribute : 2
        // });
        // signage.addKeyItem (successCb, failureCb, {
        //     keyCode : 0x12345679,
        //     virtualKeyCode : 217,
        //     attribute : 2
        // });

    }

    return (
        <div className='App'>
            <Routes>

                <Route path={Controller.path + '*'} element={<HomePage/>}></Route>

                {/*<Route path={Controller.path + '*'} element={<AdPage adList={Mock.ad}></AdPage>}></Route>*/}
                {/*<Route path={Controller.path + 'main/*'} element={<MainPage/>}></Route>*/}
                {/*<Route path={Controller.path + 'home/*'} element={<HomePage/>}></Route>*/}
                {/*<Route path={Controller.path + 'tvguide/*'} element={<GuidePage/>}></Route>*/}

                {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
                <Route path="*" element={<OtherPage/>}></Route>
            </Routes>
            <AppInfo>
                v0.0.8
            </AppInfo>
        </div>
    );
}

export default App;
