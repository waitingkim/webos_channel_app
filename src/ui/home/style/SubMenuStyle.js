import styled, {keyframes} from "styled-components"

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

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const Page = {
    Container: styled.div`
        width: 2235px;
        height: 1080px;
        flex-grow: 0;
        display: flex;
        background-image: linear-gradient(89deg, rgba(34, 34, 34, 0) 64%, rgba(34, 34, 34, 0.8) 87%, #222 92%),
        linear-gradient(to bottom, #222 93%, rgba(34, 34, 34, 0.38) 86%, rgba(34, 34, 34, 0) 86%),
        linear-gradient(to left, rgba(34, 34, 34, 0) 100%, #222 81%, #222 0%),
        linear-gradient(to bottom, rgba(34, 34, 34, 0.13) 28%, rgba(34, 34, 34, 0.6) 33%, #222 41%);
        //animation: ${animation} 0.5s linear both;
    `,
}

const SubTitle = {
    MenuList: styled.div`
        position: relative;
        width: 435px;
        height: 1080px;
        padding: 0 0 0 60px;
        background-color: rgba(0, 0, 0, 0.3);
    `,

    Menu1depth: styled.div`
        width: 180px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        gap: 20px;
        padding: 60px 20px 60px 80px;
        background-color: rgba(0, 0, 0, 0.3);
    `,

    Menu2depth: styled.div`
        position: absolute;
        width: 390px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        gap: 20px;
        padding: 60px 20px;
        opacity: 1.0;
        //animation: ${fadeOut} 0.5s linear both;
    `,

    Menu2depthClose: styled.div`
        position: absolute;
        width: 390px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        gap: 20px;
        padding: 60px 20px;
        opacity: 0.0;
        //animation: ${fadeIn} 0.5s linear both;
    `,

    Title: styled.div`
        height: 111px;
        align-self: stretch;
        flex-grow: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        padding: 0 20px 30px 0;
        border-bottom: solid 1px #92949b;
    `,

    TitleCloseFocus: styled.div`
        width: 54px;
        height: 54px;
        font-family: Pretendard;
        font-size: 32px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    TitleCloseUnFocus: styled.div`
        width: 54px;
        height: 54px;
        font-family: Pretendard;
        font-size: 32px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #404245;
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    TitleCloseBg: styled.div`
        width: 390px;
        height: 78px;
        flex-grow: 0;
        padding-left: 18px;
        padding-top: 10px;
        text-align: right;
    `,

    EllipseFocus: styled.div`
        width: 54px;
        height: 54px;
        border: solid 5px #fff;
        border-radius: 50%;
        display: inline-block;
        margin-right: 33px;
    `,

    EllipseUnFocus: styled.div`
        width: 54px;
        height: 54px;
        border: solid 5px #404245;
        border-radius: 50%;
        display: inline-block;
        margin-right: 33px;
    `,


    ViDeO: styled.div`
        height: 63px;
        flex-grow: 1;
        font-family: Pretendard;
        font-size: 60px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #fff;
    `,

    SubmenuFocus: styled.div`
        height: 78px;
        align-self: stretch;
        flex-grow: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        //padding: 20px 20px 20px 30px;
        padding-left: 30px;
        border-radius: 60px;
        background-image: linear-gradient(to right, #15d199, #18b4b4);
    `,

    SubmenuUnFocus: styled.div`
        height: 78px;
        align-self: stretch;
        flex-grow: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        //padding: 20px 20px 20px 30px;
        padding-left: 30px;
        border-radius: 60px;
    `,

    MenuTitleUnFocus: styled.div`
        height: 38px;
        flex-grow: 1;
        font-family: Pretendard;
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #92949b;
    `,

    MenuTitleFocus: styled.div`
        height: 38px;
        flex-grow: 1;
        font-family: Pretendard;
        font-size: 32px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #fff;
    `,


    style: styled.div`
    `
}

const SubContent = {
    Container: styled.div`
        width: 1410px;
        height: 1080px;
    `,
    IndicatorLayout: styled.div`
        width: 1410px;
        height: 53px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 10px 60px 10px 0;
    `,
    Indicator: styled.div`
        width: 1410px;
        height: 122px;
        padding-top: 69px;
        padding-right: 60px;
    `,
    IndicatorText: styled.div`
        height: 33px;
        flex-grow: 1;
        font-family: Pretendard;
        font-size: 28px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #92949b;
    `


}


export default {subMenu: {PAGE: Page, Sub: SubTitle, Content: SubContent}}