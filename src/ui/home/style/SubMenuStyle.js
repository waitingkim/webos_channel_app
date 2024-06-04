import styled from "styled-components"

const Page = {
    Container: styled.div`
        width: 1920px;
        height: 1080px;
        flex-grow: 0;
        display: flex;
        background-image: linear-gradient(89deg, rgba(34, 34, 34, 0) 64%, rgba(34, 34, 34, 0.8) 87%, #222 92%),
        linear-gradient(to bottom, #222 93%, rgba(34, 34, 34, 0.38) 86%, rgba(34, 34, 34, 0) 86%),
        linear-gradient(to left, rgba(34, 34, 34, 0) 100%, #222 81%, #222 0%),
        linear-gradient(to bottom, rgba(34, 34, 34, 0.13) 28%, rgba(34, 34, 34, 0.6) 33%, #222 41%);
    `
}

const SubTitle = {
    MenuList: styled.div`
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
        width: 390px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        gap: 20px;
        padding: 60px 20px;
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
        align-self: stretch ;
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

export default {subMenu: {PAGE: Page, Sub: SubTitle, Content:SubContent}}