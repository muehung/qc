<script setup>
import { onBeforeMount, onMounted, provide, ref } from 'vue';
import modal from './Modal.vue';
import { ithomeLogoPath, itplusSitemap, itplusFigmaWork, itplusComponent } from '../helper/assets';
// const images = import.meta.glob("@/assets/img/**/*", { eager: true });

// import mwImg from "@/assets/img/cover/mw2021.jpg";
 onMounted(()=>{
    const imgSrc = ref(null);
    const imgTitle = ref(null);
    const imgId = ref(null);

    provide("currentImage" , {imgSrc, imgTitle, imgId});


 })
</script>
<template>
    <section class="section-file kv itplus">
        <div class="bg"></div>
        <div class="file-kv-content">
            <div class="container">
                <div class="row">
                    <div class="col-8 col-md-2">
                        <div class="imgbox file-pic">
                            <!-- <img src="../assets/img/corp/ithome.png" alt="" class="img logo"> -->
                             <img :src="ithomeLogoPath" alt="" class="img logo">
                        </div>
                    </div>
                    <div class="col-12 col-md-9 offset-md-1 file-intro">
                        <ul class="intro-list row">
                            <li class="col-12 col-md-6 intro-li">
                                <span>專案名稱</span>
                                iT +
                            </li>
                            <li class="col-12 col-md-6 intro-li">
                                <span>負責角色</span>
                                設計師
                            </li>
                            <li class="col-12 col-md-6 intro-li">
                                <span>類型</span>
                                IT 相關影片系統網站
                            </li>
                            <li class="col-12 col-md-6 intro-li">
                                <span>經歷時間</span>
                                2022 - 2023
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section-file list">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <ul class="nav justify-content-center nav-pills  nav-tabs year-tabbox" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#tabSitemap" role="tab"
                                aria-controls="tabSitemap" aria-selected="false">說明 & sitemap</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#tabWorking" role="tab"
                                aria-controls="tabWorking" aria-selected="false">Figma 工作現場示意圖 ＆ 元件示意圖</a>
                        </li>
                        <li class="nav-item">
                            <a href="event/itplus/index-static.html" class="nav-link" target="_blank">切版 <i class="fas fa-external-link-alt"></i></a>
                        </li>
                        <li class="nav-item">
                            <a href="https://itplus.ithome.com.tw/ " class="nav-link" target="_blank">上線版 <i class="fas fa-external-link-alt"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-8 tab-content-outer">
                    <div class="tab-content file-tab-content">
                        <div class="tab-pane content2021 fade show active" id="tabSitemap" role="tabpanel"
                            aria-labelledby="tabSitemap">
                            
                            <div class="row tab-row">
                                <div class="col-2 tabLabel">時間</div>
                                <div class="col-10 tabAnswer">
                                    2021/9 - 2021/11
                                </div>
                            </div>
                            <div class="row tab-row">
                                <div class="col-2 tabLabel">團隊成員</div>
                                <div class="col-10 tabAnswer">主管、企劃、設計師、前端工程師、後端工程師</div>
                            </div>
                            <div class="row tab-row">
                                <div class="col-2 tabLabel">專案背景</div>
                                <div class="col-10 tabAnswer">
                                    隨著公司與廣告商合作的影片不斷增加，以及活動影片希望可以回顧，也期望結合社群平台，互相整合應用，進一步建立影音平台的商業模式。需挑戰是在3個月內，主視覺尚未定案，需提前製作畫面。為解決此問題，提出了製作模板與網頁元件化的方案。
                                    先前已有直播影音系統的經驗。</div>
                            </div>
                            <div class="row tab-row">
                                <div class="col-2 tabLabel">目標</div>
                                <div class="col-10 tabAnswer">
                                    建立全新的影音平台服務，給廠商也給研討會受眾。需有研討會影片、隨選影片，分別可歸屬在頻道、主題、系列底下，串iT幫幫忙登入。
                                </div>
                            </div>
                            <div class="row tab-row">
                                <div class="col-2 tabLabel">挑戰</div>
                                <div class="col-10 tabAnswer">
                                    <ul class="ul">
                                        <li>尚未有 logo 風格</li>
                                        <li>尚有未知、時間趕、頁面功能複雜</li>
                                        <li>第一次做前台系統的設計與切版</li>
                                        <li>wireframe, 流程圖已由企劃生成，需與企劃確認可行性</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="row tab-row">
                                <div class="col-2 tabLabel">團隊解法</div>
                                <div class="col-10 tabAnswer"> 
                                    <ol>
                                        <li>企劃規劃網站架構，與前後端溝通。</li>
                                        <li>設計師微調版面與流程，與 企劃商量。</li>
                                        <li>設計師切版，微調。</li>
                                        <li>前端、後端工程師同時進行。</li>
                                        <li>滾動式更新版面。</li>
                                    </ol>
                                </div>
                            </div>

                            <div class="row tab-row">
                                <div class="col-2 tabLabel">總結</div>
                                <div class="col-10 tabAnswer"> 
                                    <p>這次時間很趕，在還不知道許多細節像是logo、首頁要放什麼，只能無中生有的先提供首頁，切版用元件的方式套入網站，滾動式調整。</p>
                                </div>
                            </div>

                            <h2 class="year">Sitemap
                            </h2>
                            <div class="file-imgbox">
                                
                                <modal :img-src="itplusSitemap" img-title="itplus" img-id="itplus" class="img-fluid" />

                                <p class="text-note mt-3">2023.8.12 updated</p>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="tabWorking" role="tabpanel" aria-labelledby="tabWorking">
                            <h2 class="year">
                                Figma 工作現場示意圖 ＆ 元件示意圖
                            </h2>

                            <a class="text-light" href="event/itplus/ui_system.html" target="_blank">
                                元件頁
                            </a>
                            <div class="file-imgbox">
                                <!-- <a href="../assets/img/files/itplus-figmaworking.png" target="_blank">
                                    <img src="../assets/img/files/itplus-figmaworking.png" alt="" class="img"loading="lazy"style="border:2px solid #aaa;">
                                </a> -->
                                <modal :img-src="itplusFigmaWork" img-title="itplus Frigma" img-id="itplus02" class="img-fluid" />

                                <p class="text-note mt-3">2023.8.12 updated</p>

                                <!-- <a href="../assets/img/files/itplus-component.png" target="_blank">
                                    <img src="../assets/img/files/itplus-component.png" alt="" class="img"loading="lazy" style="border:2px solid #aaa;">
                                </a> -->
                                <modal :img-src="itplusComponent" img-title="itplus component" img-id="itplus03" class="img-fluid" />

                                <p class="text-note mt-3">2023.8.12 updated</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>