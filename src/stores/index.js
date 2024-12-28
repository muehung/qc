import { defineStore } from "pinia";
import { ref } from "vue";

// new URL("/src/assets/img/cover/cyber2022.jpg", import.meta.url).href,
import cyberImg from "@/assets/img/cover/cyber2022.jpg";
import mwImg from "@/assets/img/cover/mw2021.jpg";
import ironmanImg from "@/assets/img/cover/ironman2021.jpg";
import itplusImg from "@/assets/img/cover/itplus.jpg";
import ithomeLogo from "@/assets/img/corp/ithome.png";


const caseList = [
  {
    id: "01",
    enName: "cybersec",
    coverImg: cyberImg,
    logo: ithomeLogo,
    webType: "資訊型活動網站",
    tag: ["設計", "切版"],
    head: "各年度資安大會官網",
    infoDate: "2018 - 2022",
  },
  {
    id: "02",
    enName: "mw",
    coverImg: mwImg,
    logo: ithomeLogo,
    webType: "活動網頁",
    tag: ["設計", "插畫", "切版"],
    head: "Modern Web",
    infoDate: "2018 - 2021",
  },
  {
    id: "03",
    enName: "ironman",
    coverImg: ironmanImg,
    logo: ithomeLogo,
    webType: "社群網站內的活動網頁",
    tag: ["設計", "切版"],
    head: "IT 幫幫忙鐵人賽",
    infoDate: "2018 - 2022",
  },
  {
    id: "04",
    enName: "itplus",
    coverImg: itplusImg,
    logo: ithomeLogo,
    webType: "影片平台",
    tag: ["設計", "流程", "切版"],
    head: "iT+ 平台",
    infoDate: "2023",
  },
];


export const useStore = defineStore('store', () => {
    const portfolio = ref(caseList);
    // const currentImage = ref(null);
    // const showLightbox = function(imagePath) {
    //       currentImage = imagePath; // 設定當前的圖片為傳入的圖片路徑
    //     };
    return {
        portfolio,
        // currentImage,
        // showLightbox,
    }
});