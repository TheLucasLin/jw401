import type { EventCard, NavLink, QuarterSection } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "嘉威人教室", href: "#" },
  { label: "嘉威人報報", href: "#" },
  { label: "服務項目", href: "#" },
  { label: "關於嘉威", href: "#", hasDropdown: true },
  { label: "嘉威人大百科", href: "#", hasDropdown: true },
  { label: "最新消息", href: "#" },
  { label: "嘉威40", href: "#" },
];

export const HOT_EVENTS: EventCard[] = [
  {
    id: "1",
    title: "高爾夫感謝盃-北部場",
    date: "04/05",
    location: "北部場",
    image: "https://picsum.photos/seed/golf1/400/300",
    type: "north",
  },
  {
    id: "2",
    title: "高爾夫感謝盃-中部場",
    date: "04/05",
    location: "中部場",
    image: "https://picsum.photos/seed/golf2/400/300",
    type: "central",
  },
  {
    id: "3",
    title: "高爾夫感謝盃-南部場",
    date: "04/05",
    location: "南部場",
    image: "https://picsum.photos/seed/golf3/400/300",
    type: "south",
  },
];

export const QUARTERS_DATA: QuarterSection[] = [
  {
    id: "q1",
    label: "Q1 第一季度",
    isOpen: true,
    events: [
      {
        id: "e1",
        title: "感恩", // 第一段title
        titleSecond: "故事展", // 第二段title (最多兩段)
        dateRange: "03/01-12/31", // 活動日期區間
        image: "https://picsum.photos/seed/g1/800/300", // 活動圖
        buttonLabel: "了解更多", // 展開活動的按鈕文字
        expanded: false, // 是否展開活動內容
        description: "", // 活動描述
        haveData: false, // 是否有活動內容
        images: [],
      },
      {
        id: "e2",
        title: "嘉Bar - ",
        titleSecond: "愛你就要餵飽你",
        dateRange: "03/01-12/31",
        image: "https://picsum.photos/seed/g9/800/300",
        buttonLabel: "了解更多",
        expanded: true,
        description:
          "四十年的歷程，像一場長遠的比賽，講究的是穩定、策略與信任。今年，我們邀請一路相伴的夥伴，共同參與一場別具意義的高爾夫盛會 ——「揮桿同行・40 週年感恩高爾夫日」。活動將於清晨開球，在綠意盎然的球道間展開一整天的友誼競賽。無論是老朋友重逢，或新夥伴初識，我們都希望透過輕鬆愉快的揮桿時光，延續四十年的信任與合作精神。現場將設有品牌主題打卡區、精緻午宴與頒獎典禮，特別準備「感謝之桿」紀念禮，致敬每一位陪伴我們走過風雨的貴賓。",
        haveData: false,
        images: [
          "https://picsum.photos/seed/g1/400/300",
          "https://picsum.photos/seed/g2/400/300",
          "https://picsum.photos/seed/g3/400/300",
        ],
      },
    ],
  },
  {
    id: "q2",
    label: "Q2 第二季度",
    isOpen: false,
    events: [
      {
        id: "e3",
        title: "感恩",
        titleSecond: "故事展",
        dateRange: "03/01-12/31",
        image: "https://picsum.photos/seed/blueballoon2/800/300",
        buttonLabel: "敬請期待",
        expanded: false,
        description:
          "四十年的歷程，像一場長遠的比賽，講究的是穩定、策略與信任。今年，我們邀請一路相伴的夥伴，共同參與一場別具意義的高爾夫盛會 ——「揮桿同行・40 週年感恩高爾夫日」。活動將於清晨開球，在綠意盎然的球道間展開一整天的友誼競賽。無論是老朋友重逢，或新夥伴初識，我們都希望透過輕鬆愉快的揮桿時光，延續四十年的信任與合作精神。現場將設有品牌主題打卡區、精緻午宴與頒獎典禮，特別準備「感謝之桿」紀念禮，致敬每一位陪伴我們走過風雨的貴賓。",
        haveData: false,
      },
    ],
  },
  {
    id: "q3",
    label: "Q3 第三季度",
    isOpen: false,
    events: [],
  },
  {
    id: "q4",
    label: "Q4 第四季度",
    isOpen: false,
    events: [],
  },
];

export const GALLERY_IMAGES = [
  "https://picsum.photos/seed/g1/300/200",
  "https://picsum.photos/seed/g2/300/200",
  "https://picsum.photos/seed/g3/300/200",
  "https://picsum.photos/seed/g4/300/200",
  "https://picsum.photos/seed/g5/300/200",
  "https://picsum.photos/seed/g6/300/200",
];
