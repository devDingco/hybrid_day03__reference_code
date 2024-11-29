import { IMAGES } from "@/commons/constants/images";
import { graphql, HttpResponse } from "msw";

const solplaceLogs = [
  {
    id: "1",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저A",
    title: "오션뷰 카페",
    contents: "해변이 보이는 아름다운 카페",
    addressCity: "부산",
    addressTown: "해운대구",
    address: "부산 해운대구 우동 1408-5",
    lat: 35.1587,
    lng: 129.1604,
  },
  {
    id: "2",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저B",
    title: "힐링 가든",
    contents: "자연 속에서 즐기는 커피 한 잔",
    addressCity: "서울",
    addressTown: "성동구",
    address: "서울 성동구 성수동1가 685-697",
    lat: 37.5446,
    lng: 127.0551,
  },
  {
    id: "3",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저C",
    title: "빈티지 블루",
    contents: "빈티지한 인테리어와 음악이 있는 카페",
    addressCity: "서울",
    addressTown: "강남구",
    address: "서울 강남구 신사동 535-12",
    lat: 37.5244,
    lng: 127.0223,
  },
  {
    id: "4",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저D",
    title: "어반 포레스트",
    contents: "도심 속 작은 숲 같은 공간",
    addressCity: "서울",
    addressTown: "중구",
    address: "서울 중구 명동2가 88-1",
    lat: 37.5637,
    lng: 126.9827,
  },
  {
    id: "5",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저E",
    title: "모닝 브리즈",
    contents: "신선한 아침 공기와 함께 즐기는 커피",
    addressCity: "인천",
    addressTown: "연수구",
    address: "인천 연수구 송도동 168-2",
    lat: 37.3834,
    lng: 126.6572,
  },
  {
    id: "6",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저F",
    title: "스타트업 허브",
    contents: "젊은 창업가들이 모이는 공간",
    addressCity: "서울",
    addressTown: "서초구",
    address: "서울 서초구 서초동 1316-8",
    lat: 37.4935,
    lng: 127.0074,
  },
  {
    id: "7",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저G",
    title: "책 향기",
    contents: "조용한 독서 공간을 제공하는 카페",
    addressCity: "서울",
    addressTown: "관악구",
    address: "서울 관악구 봉천동 863-19",
    lat: 37.4822,
    lng: 126.9527,
  },
  {
    id: "8",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저H",
    title: "루프탑 뷰",
    contents: "도심이 한눈에 보이는 루프탑 카페",
    addressCity: "서울",
    addressTown: "종로구",
    address: "서울 종로구 삼청동 35-171",
    lat: 37.5826,
    lng: 126.9813,
  },
  {
    id: "9",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저I",
    title: "아트리움",
    contents: "다양한 예술 작품을 감상할 수 있는 카페",
    addressCity: "서울",
    addressTown: "용산구",
    address: "서울 용산구 이태원동 112-3",
    lat: 37.5342,
    lng: 126.9936,
  },
  {
    id: "10",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저J",
    title: "플라워 카페",
    contents: "꽃과 함께하는 아늑한 카페",
    addressCity: "서울",
    addressTown: "마포구",
    address: "서울 마포구 합정동 392-19",
    lat: 37.5484,
    lng: 126.9132,
  },
  {
    id: "11",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저K",
    title: "트래블 카페",
    contents: "여행자들을 위한 편안한 공간",
    addressCity: "서울",
    addressTown: "종로구",
    address: "서울 종로구 관철동 15-1",
    lat: 37.5704,
    lng: 126.9862,
  },
  {
    id: "12",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저L",
    title: "브런치 하우스",
    contents: "브런치와 함께하는 아늑한 공간",
    addressCity: "서울",
    addressTown: "광진구",
    address: "서울 광진구 구의동 251-3",
    lat: 37.5383,
    lng: 127.0829,
  },
  {
    id: "13",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저M",
    title: "라운드 코너",
    contents: "도심 속 모던한 카페",
    addressCity: "서울",
    addressTown: "용산구",
    address: "서울 용산구 한남동 729-74",
    lat: 37.5365,
    lng: 127.0005,
  },
  {
    id: "14",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저N",
    title: "글로우 카페",
    contents: "따뜻한 분위기의 조명과 함께하는 카페",
    addressCity: "서울",
    addressTown: "은평구",
    address: "서울 은평구 불광동 260-5",
    lat: 37.6174,
    lng: 126.9231,
  },
  {
    id: "15",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저O",
    title: "프레쉬 모닝",
    contents: "아침을 여는 신선한 카페",
    addressCity: "서울",
    addressTown: "노원구",
    address: "서울 노원구 공릉동 461-2",
    lat: 37.6227,
    lng: 127.0727,
  },
  {
    id: "16",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저P",
    title: "그레이 하우스",
    contents: "모던하고 차분한 공간",
    addressCity: "서울",
    addressTown: "서대문구",
    address: "서울 서대문구 창천동 58-9",
    lat: 37.5588,
    lng: 126.9369,
  },
  {
    id: "17",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저Q",
    title: "블랙 마운틴",
    contents: "산속의 고요한 카페",
    addressCity: "서울",
    addressTown: "성북구",
    address: "서울 성북구 정릉동 210-1",
    lat: 37.6038,
    lng: 127.0166,
  },
  {
    id: "18",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저R",
    title: "푸드 라운지",
    contents: "다양한 음식을 즐길 수 있는 공간",
    addressCity: "서울",
    addressTown: "중랑구",
    address: "서울 중랑구 망우동 492-1",
    lat: 37.6004,
    lng: 127.0928,
  },
  {
    id: "19",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저S",
    title: "푸른 하늘",
    contents: "푸른 하늘 아래 즐기는 커피",
    addressCity: "서울",
    addressTown: "강동구",
    address: "서울 강동구 명일동 327-5",
    lat: 37.5505,
    lng: 127.1437,
  },
  {
    id: "20",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저T",
    title: "그린 테라스",
    contents: "야외 테라스에서 즐기는 커피",
    addressCity: "서울",
    addressTown: "동대문구",
    address: "서울 동대문구 이문동 287-12",
    lat: 37.5931,
    lng: 127.0619,
  },
  {
    id: "21",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저U",
    title: "카페 노스",
    contents: "북유럽풍 인테리어가 돋보이는 카페",
    addressCity: "서울",
    addressTown: "도봉구",
    address: "서울 도봉구 방학동 662-17",
    lat: 37.6675,
    lng: 127.0439,
  },
  {
    id: "22",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저V",
    title: "선셋 라운지",
    contents: "일몰을 감상할 수 있는 카페",
    addressCity: "서울",
    addressTown: "강서구",
    address: "서울 강서구 마곡동 797-3",
    lat: 37.5622,
    lng: 126.8229,
  },
  {
    id: "23",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저W",
    title: "힐링 포레스트",
    contents: "숲 속에서 즐기는 차 한 잔",
    addressCity: "서울",
    addressTown: "양천구",
    address: "서울 양천구 신정동 1280-5",
    lat: 37.5168,
    lng: 126.8666,
  },
  {
    id: "24",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저X",
    title: "클래식 하우스",
    contents: "클래식 음악과 함께하는 카페",
    addressCity: "서울",
    addressTown: "영등포구",
    address: "서울 영등포구 여의도동 20-3",
    lat: 37.5234,
    lng: 126.9266,
  },
  {
    id: "25",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저Y",
    title: "모닝 가든",
    contents: "아침 햇살과 함께하는 정원 카페",
    addressCity: "서울",
    addressTown: "금천구",
    address: "서울 금천구 독산동 292-1",
    lat: 37.4563,
    lng: 126.8969,
  },
  {
    id: "26",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저Z",
    title: "인더스트리얼 라운지",
    contents: "산업적 분위기의 인테리어 카페",
    addressCity: "서울",
    addressTown: "구로구",
    address: "서울 구로구 고척동 103-4",
    lat: 37.5039,
    lng: 126.8608,
  },
  {
    id: "27",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저AA",
    title: "스카이 라운지",
    contents: "하늘과 가까운 전망을 제공하는 카페",
    addressCity: "서울",
    addressTown: "관악구",
    address: "서울 관악구 봉천동 1547-23",
    lat: 37.4821,
    lng: 126.9526,
  },
  {
    id: "28",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저AB",
    title: "어반 플라워",
    contents: "도심 속 화사한 꽃이 가득한 공간",
    addressCity: "서울",
    addressTown: "마포구",
    address: "서울 마포구 서교동 447-12",
    lat: 37.5506,
    lng: 126.9189,
  },
  {
    id: "29",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저AC",
    title: "소프트 포레스트",
    contents: "부드러운 분위기의 힐링 공간",
    addressCity: "서울",
    addressTown: "중랑구",
    address: "서울 중랑구 면목동 10-8",
    lat: 37.5986,
    lng: 127.0936,
  },
  {
    id: "30",
    images: [
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
      `${IMAGES.detailDefaultImage.src}`,
    ],
    userId: "유저AD",
    title: "서머 가든",
    contents: "여름을 닮은 카페",
    addressCity: "서울",
    addressTown: "서초구",
    address: "서울 서초구 반포동 23-17",
    lat: 37.5104,
    lng: 127.0122,
  },
];

export const handlers = [
  graphql.query("fetchsolplaceLogs", ({ variables }) => {
    const page = variables.page || 1;

    return HttpResponse.json({
      data: {
        fetchSolplaceLogs: solplaceLogs.filter((_, index) => {
          if ((page - 1) * 10 <= index && index < page * 10) return true;
        }),
      },
    });
  }),
  graphql.query("fetchsolplaceLog", (req) => {
    const id = req.variables.solplaceLogId;

    const solplaceLog = solplaceLogs.find((solplaceLog) => solplaceLog.id === id);

    return HttpResponse.json({
      data: {
        fetchSolplaceLog: solplaceLog,
      },
    });
  }),
];
