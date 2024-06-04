const setting = {
    initChannelNo: 500,
    initChannelIndex: 0,
    menuShowTime: 5000,
    initAdShowTime: 3000,
    locale: 'KR',
}

const group_titles = [
    "ALL",
    "뉴스",
    "엔터테인먼트",
    "TV",
    "시사/교양",
    "스포츠",
    "음악",
    "AD",
    "어린이",
    "Vertical",
    "RTSP TO DASH"
]
const adList = ['./image/ad_0.jpg', './image/ad_1.png', './image/ad_2.jpg']

const verticals = [
    {
        id: 0,
        title: '신한은행 머니버스',
        desc: '주택금융 등의 장기적 · 안정적 공급을 촉진하여 국민의 복지증진과 국민경제의 발전에 이바지함을 목적으로' +
            '2004. 3. 1일 출범한 준정부기관으로서 보금자리론과 적격대출 공급, ' +
            '주택보증, 유동화증권 발행 등의 업무를 수행함으로써 ' +
            '서민의 주택금융 파트너로서의 역할을 다하고자 합니다.',
        video: 'http://192.168.1.126:18090/live/6.stream/fmp4.noll_master.m3u8',
        banner: '/image/channel/vertical_01-0001.png',
        d: "혼합형’ 제품을 새롭게 출시했다.<br/><br/>\n"
    },
    {
        id: 1,
        title: '케토톱 플라스타',
        desc: '한독(대표이사 김영진, 백진기)의 No.1 붙이는 근육통∙관절염 치료제 ‘케토톱(성분명: 케토프로펜)’이 밴드처럼 감아서 사용할 수 있는 ‘케토톱플라스타 밴드타입\n' +
            '혼합형’ 제품을 새롭게 출시했다.<br/><br/>\n' +
            '이번 신제품은 손가락과 손목 등 굴곡이 있고 가는 부위의 통증에 사용하기 편리한 제품이다.<br/><br/>\n' +
            '근육통, 관절염을 비롯해 건초염에도 효과적이다. 케토톱 밴드 타입 혼합형 1팩에는 10시트(총 40매)가 들어있다. 1시트에는 대형(79mm x 25mm) 1매와\n' +
            '중형(24.3mm x 70mm) 3매, 총 4매로 구성돼 있어 통증 부위에 따라 선택해서 사용할 수 있다. 케토톱 밴드타입 혼합형은 케토톱의 효과는 유지하면서\n' +
            '신축성을 높여 피부에 더욱 밀착할 수 있게 했다. 또, 냄새와 열감이 없고 발수기능을 추가하는 등 사용 편의성을 높였다.',
        video: 'http://192.168.1.126:18090/live/7.stream/fmp4.noll_master.m3u8',
        banner: '/image/channel/vertical_02-0002.png',
        d: "혼합형’ 제품을 새롭게 출시했다.<br/><br/>\n"
    }, {
        id: 2,
        title: '주택금융혜택',
        desc: '주택금융 등의 장기적 · 안정적 공급을 촉진하여 .<br/>\n' +
            '국민의 복지증진과 국민경제의 발전에 이바지함을 목적으로 .<br/>\n' +
            '2004. 3. 1일 출범한 준정부기관으로서 보금자리론과 적격대출 공급, .<br/>\n' +
            '주택보증, 유동화증권 발행 등의 업무를 수행함으로써 .<br/>\n' +
            '서민의 주택금융 파트너로서의 역할을 다하고자 합니다.',
        video: 'http://192.168.1.126:18090/live/8.stream/fmp4.noll_master.m3u8',
        banner: '/image/channel/vertical_03-0003.png',
        d: "혼합형’ 제품을 새롭게 출시했다.<br/><br/>\n"
    },
    {
        id: 3,
        title: '롯데카드 로카 띵',
        desc: '계약체결 전 금융상품설명서와 약관을 확인하시기 바랍니다.<br/>\n' +
            '서비스 제공 업종은 롯데카드에 등록된 가맹점 업종을 기준으로 합니다.<br/>\n' +
            '신용카드 발급이 부적정한 경우(개인신용평점 낮음 등) 카드발급이 제한될 수 있습니다.<br/>\n' +
            '카드이용대금과 이에 수반되는 모든 수수료를 지정된 대금결제일에 상환해야 합니다.<br/>\n' +
            '금융소비자는 금소법 제19조 제1항에 따라 해당상품 또는 서비스에 대하여 설명을 받을 권리가 있으며, 그 설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.',
        video: 'http://192.168.1.126:18090/live/9.stream/fmp4.noll_master.m3u8',
        banner: '/image/channel/vertical_04-0004.png',
        d: "혼합형’ 제품을 새롭게 출시했다.<br/><br/>\n"
    }
]
// http://192.168.1.126:18090/live/1.stream/fmp4.noll_master.m3u8
// http://192.168.1.126:18090/live/2.stream/fmp4.noll_master.m3u8
// http://192.168.1.126:18090/live/3.stream/fmp4.noll_master.m3u8
// http://192.168.1.126:18090/live/4.stream/fmp4.noll_master.m3u8
// http://192.168.1.126:18090/live/5.stream/fmp4.noll_master.m3u8
//
// http://192.168.1.126:18090/live/6.stream/fmp4.noll_master.m3u8
// http://192.168.1.126:18090/live/7.stream/fmp4.noll_master.m3u8
// http://192.168.1.126:18090/live/8.stream/fmp4.noll_master.m3u8
// http://192.168.1.126:18090/live/9.stream/fmp4.noll_master.m3u8
//
// http://192.168.1.126:18090/any_provider/live.mpg/fmp4.ll_master.m3u8

const channels = [
    {
        id: "V4400003SD",
        chlogo: "/image/channel/v_01-0001.jpg",
        chno: 401,
        name: "신한은행 머니버스",
        group: 9,
        url: "",
        type: "vertical",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBC4400003SD",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBC4400003SD_20231114T070142SQUARE.png_20231114070143.png",
        chno: 501,
        name: "KBS 1박2일 시즌1",
        group: 2,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBC4400003SD.m3u8",
        url: "http://192.168.1.126:18090/live/1.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "V2400003SD",
        chlogo: "/image/channel/v_01-0001.jpg",
        chno: 502,
        name: "주택금융혜택",
        group: 9,
        url: "",
        type: "vertical",
        action: "",
        verticalId: 2
    },
    {
        id: "KRBD1400001ED",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBD1400001ED_20230524T004408SQUARE.png_20230524004408.png",
        chno: 503,
        name: "연합뉴스TV",
        group: 1,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBD1400001ED.m3u8",
        url: "http://192.168.1.126:18090/live/2.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "V1400003SD",
        chlogo: "/image/channel/v_01-0001.jpg",
        chno: 504,
        name: "케토톱 플라스타",
        group: 9,
        url: "",
        type: "vertical",
        action: "",
        verticalId: 1
    },
    {
        id: "KRBD2400001XD",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBD2400001XD_20231025T004703SQUARE.png_20231025004705.png",
        chno: 510,
        name: "YTN",
        group: 1,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBD2400001XD.m3u8",
        url: "http://192.168.1.126:18090/live/3.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 1
    },
    {
        id: "KRBD5200003O2",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBD5200003O2_20240313T072623SQUARE.png",
        chno: 514,
        name: "JTBC 밥 잘사주는 예쁜 누나",
        group: 3,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBD5200003O2.m3u8",
        url: "http://192.168.1.126:18090/live/4.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "ADKRBB500006901",
        chlogo: "/image/ad/lg_01.png",
        chno: 515,
        name: "LG SIGNATURE",
        group: 7,
        url: "/ad_videos/lg_01.mp4",
        type: "ad_video",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBC3200029C4",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBC3200029C4_20230823T005038SQUARE.png_20230823005039.png",
        chno: 521,
        name: "tvN 사랑의 불시착",
        group: 3,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBC3200029C4.m3u8",
        url: "http://192.168.1.126:18090/live/5.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "KR7000023Z",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KR7000023Z_20240403T030121SQUARE.png",
        chno: 522,
        name: "KBS 고백부부",
        group: 3,
        // url: "https://i.mjh.nz/SamsungTVPlus/KR7000023Z.m3u8",
        url: "http://192.168.1.126:18090/live/1.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBD5200001G8",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBD5200001G8_20240313T072628SQUARE.png",
        chno: 523,
        name: "JTBC 효리네 민박1",
        group: 3,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBD5200001G8.m3u8",
        url: "http://192.168.1.126:18090/live/2.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBC3200028P2",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBC3200028P2_20231025T004708SQUARE.png_20231025004709.png",
        chno: 524,
        name: "tvN 미스터 션샤인",
        group: 3,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBC3200028P2.m3u8",
        url: "http://192.168.1.126:18090/live/3.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "ADKRBB500006902",
        chlogo: "/image/ad/lg_02.png",
        chno: 525,
        name: "LG 휘센 X 크러쉬의 내심바람",
        group: 7,
        url: "/ad_videos/lg_01.mp4",
        type: "ad_video",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBD2700001QR",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBD2700001QR_20231206T031613SQUARE.png_20231206031615.png",
        chno: 601,
        name: "TV조선 우리 이혼했어요",
        group: 2,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBD2700001QR.m3u8",
        url: "http://192.168.1.126:18090/live/4.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBC320002200",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBC320002200_20240417T022427SQUARE.png",
        chno: 602,
        name: "tvN 환혼: 빛과 그림자",
        group: 3,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBC320002200.m3u8",
        url: "http://192.168.1.126:18090/live/5.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "KR400006MW",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KR400006MW_20240319T050819SQUARE.png",
        chno: 603,
        name: "JTBC 뭉쳐야 찬다1",
        group: 5,
        // url: "https://i.mjh.nz/SamsungTVPlus/KR400006MW.m3u8",
        url: "http://192.168.1.126:18090/live/1.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBC800016YS",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBC800016YS_20240319T050719SQUARE.png",
        chno: 604,
        name: "tvN 대탈출 전 시즌",
        group: 2,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBC800016YS.m3u8",
        url: "http://192.168.1.126:18090/live/2.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "ADKRBB500006903",
        chlogo: "/image/ad/lg_03.png",
        chno: 605,
        name: "PL:AY공식편 | LG MyView",
        group: 7,
        url: "/ad_videos/lg_01.mp4",
        type: "ad_video",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBD4300003MW",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBD4300003MW_20240131T031230SQUARE.png_20240131031230.png",
        chno: 621,
        name: "JTBC 냉장고를 부탁해",
        group: 2,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBD4300003MW.m3u8",
        url: "http://192.168.1.126:18090/live/3.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBC3500020AF",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBC3500020AF_20240417T022349SQUARE.png",
        chno: 622,
        name: "BABY SHARK TV",
        group: 8,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBC3500020AF.m3u8",
        url: "http://192.168.1.126:18090/live/4.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBC3500017PO",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBC3500017PO_20230809T021325SQUARE.png_20230809021327.png",
        chno: 623,
        name: "MBN 나는 자연인이다",
        group: 4,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBC3500017PO.m3u8",
        url: "http://192.168.1.126:18090/live/5.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBD43000023M",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBD43000023M_20240131T031232SQUARE.png_20240131031233.png",
        chno: 624,
        name: "JTBC 아는 형님",
        group: 2,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBD43000023M.m3u8",
        url: "http://192.168.1.126:18090/live/1.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "ADKRBB500006904",
        chlogo: "/image/ad/lg_04.png",
        chno: 625,
        name: "가전도 이제 구독하는 시대 | LG전자 구독",
        group: 7,
        url: "/ad_videos/lg_01.mp4",
        type: "ad_video",
        action: "",
        verticalId: 0
    },
    {
        id: "KR900001U5",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KR900001U5_20240417T022419SQUARE.png",
        chno: 701,
        name: "뽀요TV",
        group: 8,
        // url: "https://i.mjh.nz/SamsungTVPlus/KR900001U5.m3u8",
        url: "http://192.168.1.126:18090/live/2.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBD4300001RQ",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBD4300001RQ_20240214T030820SQUARE.png_20240214030821.png",
        chno: 702,
        name: "essential; by Bugs",
        group: 6,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBD4300001RQ.m3u8",
        url: "http://192.168.1.126:18090/live/3.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBC800015MH",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBC800015MH_20240131T031234SQUARE.png_20240131031235.png",
        chno: 703,
        name: "tvN SPORTS",
        group: 5,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBC800015MH.m3u8",
        url: "http://192.168.1.126:18090/live/4.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBC3200018FU",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBC3200018FU_20240228T040932SQUARE.png_20240228040933.png",
        chno: 704,
        name: "Mnet 퀸덤2",
        group: 2,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBC3200018FU.m3u8",
        url: "http://192.168.1.126:18090/live/5.stream/fmp4.noll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
    {
        id: "ADKRBB500006905",
        chlogo: "/image/ad/lg_05.png",
        chno: 705,
        name: "담대하게 웃으며 뛰어들어 보세요 | Life's Good | LG전자",
        group: 7,
        url: "/ad_videos/lg_01.mp4",
        type: "ad_video",
        action: "",
        verticalId: 0
    },
    {
        id: "KRBC4000002ME",
        chlogo: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/KRBC4000002ME_20230809T021445SQUARE.png_20230809021446.png",
        chno: 781,
        name: "돈쭐내러 왔습니다",
        group: 10,
        // url: "https://i.mjh.nz/SamsungTVPlus/KRBC4000002ME.m3u8",
        url: "http://192.168.1.126:18090/any_provider/live.mpg/fmp4.ll_master.m3u8",
        type: "channel",
        action: "",
        verticalId: 0
    },
]

const categorys = [
    {id: 0, name: 'Recommended', targetId: 0},
    {id: 1, name: 'Movies', targetId: 1},
    {id: 2, name: 'Shorts', targetId: 2},
    {id: 3, name: 'Info', targetId: 3},
    {id: 4, name: 'Around the Hotel', targetId: 4},
    {id: 5, name: 'Shopping', targetId: 5}
]

const videoList = {
    0: [
        {
            name: 'Monthly Top 10', type: 'top10', list: [
                {name: 'Kings Man', date: '3 month', poster: '/image/ad/lg_01.png', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '/image/ad/lg_02.png', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '/image/ad/lg_03.png', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '/image/ad/lg_04.png', rank: 4},
                {name: 'Closer', date: '3 month', poster: '/image/ad/lg_05.png', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '/image/ad/lg_06.png', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '/image/ad/lg_01.png', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '/image/ad/lg_02.png', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '/image/ad/lg_03.png', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '/image/ad/lg_04.png', rank: 10}
            ]
        },
        {
            name: 'Latest', type: 'video', list: [
                {name: 'The Maze Runnenr', date: '1 year', poster: '/image/ad/lg_03.png', rank: 0},
                {name: 'Before We Go', date: '3 month', poster: '/image/ad/lg_04.png', rank: 0},
                {name: 'Big Fish', date: '3 month', poster: '/image/ad/lg_05.png', rank: 0},
                {name: 'Closer', date: '3 month', poster: '/image/ad/lg_06.png', rank: 0},
                {name: 'Man In Black', date: '3 month', poster: '/image/ad/lg_01.png', rank: 0},
                {name: 'Avatar', date: '3 month', poster: '/image/ad/lg_02.png', rank: 0},
                {name: 'Titanic', date: '3 month', poster: '/image/ad/lg_03.png', rank: 0},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '/image/ad/lg_04.png', rank: 0},
                {name: 'Marvels The Avengers', date: '3 month', poster: '/image/ad/lg_05.png', rank: 0},
                {name: 'Kings Man', date: '3 month', poster: '/image/ad/lg_02.png', rank: 0},
            ]
        },
        {
            name: 'Movies', type: 'video', list: [
                {name: 'Before We Go', date: '3 month', poster: '/image/ad/lg_04.png', rank: 0},
                {name: 'Big Fish', date: '3 month', poster: '/image/ad/lg_05.png', rank: 0},
                {name: 'Closer', date: '3 month', poster: '/image/ad/lg_06.png', rank: 0},
                {name: 'Man In Black', date: '3 month', poster: '/image/ad/lg_01.png', rank: 0},
                {name: 'Avatar', date: '3 month', poster: '/image/ad/lg_02.png', rank: 0},
                {name: 'Titanic', date: '3 month', poster: '/image/ad/lg_03.png', rank: 0},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '/image/ad/lg_04.png', rank: 0},
                {name: 'Marvels The Avengers', date: '3 month', poster: '/image/ad/lg_05.png', rank: 0},
                {name: 'Kings Man', date: '3 month', poster: '/image/ad/lg_02.png', rank: 0},
                {name: 'The Maze Runnenr', date: '1 year', poster: '/image/ad/lg_03.png', rank: 0},
            ]
        },
        {
            name: 'News', type: 'video', list: [
                {name: 'Big Fish', date: '3 month', poster: '/image/ad/lg_05.png', rank: 0},
                {name: 'Closer', date: '3 month', poster: '/image/ad/lg_06.png', rank: 0},
                {name: 'Man In Black', date: '3 month', poster: '/image/ad/lg_01.png', rank: 0},
                {name: 'Avatar', date: '3 month', poster: '/image/ad/lg_02.png', rank: 0},
                {name: 'Titanic', date: '3 month', poster: '/image/ad/lg_03.png', rank: 0},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '/image/ad/lg_04.png', rank: 0},
                {name: 'Marvels The Avengers', date: '3 month', poster: '/image/ad/lg_05.png', rank: 0},
                {name: 'Kings Man', date: '3 month', poster: '/image/ad/lg_02.png', rank: 0},
                {name: 'The Maze Runnenr', date: '1 year', poster: '/image/ad/lg_03.png', rank: 0},
                {name: 'Before We Go', date: '3 month', poster: '/image/ad/lg_04.png', rank: 0},
            ]
        },
        {
            name: 'Sports', type: 'video', list: [
                {name: 'Closer', date: '3 month', poster: '/image/ad/lg_06.png', rank: 0},
                {name: 'Man In Black', date: '3 month', poster: '/image/ad/lg_01.png', rank: 0},
                {name: 'Avatar', date: '3 month', poster: '/image/ad/lg_02.png', rank: 0},
                {name: 'Titanic', date: '3 month', poster: '/image/ad/lg_03.png', rank: 0},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '/image/ad/lg_04.png', rank: 0},
                {name: 'Marvels The Avengers', date: '3 month', poster: '/image/ad/lg_05.png', rank: 0},
                {name: 'Kings Man', date: '3 month', poster: '/image/ad/lg_02.png', rank: 0},
                {name: 'The Maze Runnenr', date: '1 year', poster: '/image/ad/lg_03.png', rank: 0},
                {name: 'Before We Go', date: '3 month', poster: '/image/ad/lg_04.png', rank: 0},
                {name: 'Big Fish', date: '3 month', poster: '/image/ad/lg_05.png', rank: 0},
            ]
        }
    ],
    1: [
        {
            name: 'Monthly Top 10', type: 'top10', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Latest', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Movies', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'News', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Sports', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        }
    ],
    2: [
        {
            name: 'Monthly Top 10', type: 'top10', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Latest', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Movies', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'News', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Sports', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        }
    ],
    3: [
        {
            name: 'Monthly Top 10', type: 'top10', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Latest', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Movies', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'News', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Sports', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        }
    ],
    4: [
        {
            name: 'Monthly Top 10', type: 'top10', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Latest', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Movies', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'News', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Sports', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        }
    ],
    5: [
        {
            name: 'Monthly Top 10', type: 'top10', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Latest', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Movies', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'News', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        },
        {
            name: 'Sports', type: 'video', list: [
                {name: 'Kings Man', date: '3 month', poster: '', rank: 1},
                {name: 'The Maze Runnenr', date: '1 year', poster: '', rank: 2},
                {name: 'Before We Go', date: '3 month', poster: '', rank: 3},
                {name: 'Big Fish', date: '3 month', poster: '', rank: 4},
                {name: 'Closer', date: '3 month', poster: '', rank: 5},
                {name: 'Man In Black', date: '3 month', poster: '', rank: 6},
                {name: 'Avatar', date: '3 month', poster: '', rank: 7},
                {name: 'Titanic', date: '3 month', poster: '', rank: 8},
                {name: 'Star Wars: The Force Awakens', date: '3 month', poster: '', rank: 9},
                {name: 'Marvels The Avengers', date: '3 month', poster: '', rank: 10}
            ]
        }
    ]
}

function getVideoList(id) {
    return videoList[id];
}

export default {
    ch: channels,
    gt: group_titles,
    se: setting,
    verticals: verticals,
    ad: adList,
    categoryList: categorys,
    videoList: getVideoList
};