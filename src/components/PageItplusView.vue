<script setup>
import { onBeforeMount, onMounted, provide, ref } from 'vue';
import modal from './Modal.vue';
import { ithomeLogoPath, itplusSitemap, itplusFigmaWork, itplusComponent } 
from '../helper/assets';
import itplusVod from '@/assets/img/files/itplus-vod.jpg';
import itplusWebinar from '@/assets/img/files/itplus-webinar.jpg';
import itplusSeries from '@/assets/img/files/itplus-series.jpg';
import itplusRewind from '@/assets/img/files/itplis-rewind.jpg';

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
                    <!-- <div class="col-8 col-md-2">
                        <div class="imgbox file-pic">
                             <img :src="ithomeLogoPath" alt="" class="img logo">
                        </div>
                    </div> -->
                    <div class="col-12 col-md-9 offset-md-1 file-intro">
                        <ul class="intro-list row">
                            <li class="col-12 col-md-6 intro-li">
                                <span>專案名稱</span>
                                iT +
                            </li>
                            <li class="col-12 col-md-6 intro-li">
                                <span>負責角色</span>
                                前端設計師
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
        <div class="container-fluid bg-dark text-white">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 py-5">
                    <h1 class="page-title">面對未知需求，利用元件模組化，達成彈性拆裝，建構像積木般的影音平台</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
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
                                <div class="col-10 tabAnswer">主管、企劃、前端設計師、前端工程師、後端工程師</div>
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
                                        <li>沒有 logo、風格，只知道大概方向</li>
                                        <li>還有許多未知資訊、時間趕、頁面功能複雜</li>
                                        <li>第一次做前台系統的設計與切版</li>
                                        <li>wireframe, 流程圖已由企劃生成（需與企劃確認可行性）</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="row tab-row">
                                <div class="col-2 tabLabel">我的解法</div>
                                <div class="col-10 tabAnswer"> 
                                    <ol>
                                        <li>與企劃討論，確認版面與流程。</li>
                                        <li>設計、切版、前端、後端工程師同時進行。</li>
                                        <li>滾動式更新版面。</li>
                                    </ol>
                                </div>
                            </div>

                            <div class="row tab-row">
                                <div class="col-2 tabLabel">學習</div>
                                <div class="col-10 tabAnswer"> 
                                    <p>面對時間緊急，不知道logo、首頁要放什麼，只能無中生有的先提供首頁，切版用元件的方式套入網站，滾動式調整。</p>
                                </div>
                            </div>

                            <h2 class="year">Sitemap
                            </h2>
                            <div class="file-imgbox">
                                <modal :img-src="itplusSitemap" img-title="itplus" img-id="itplus" class="img-fluid" />
        
                                <!-- <p class="text-note mt-3">2023.8.12 updated</p> -->
                            </div>
                            
                        </div>
                        <!-- <div class="tab-pane fade" id="tabWorking" role="tabpanel" aria-labelledby="tabWorking">
                            
                        </div> -->
                        
                    </div>

                </div>

                <div class="col-12 py-5">
                    <div class="file-imgbox">
                        <h2>針對 4種不同影片，列出所有狀態</h2>
                        <div class="row">
                            <div class="col-12 col-md-3">
                                <modal :img-src="itplusVod" img-title="itplus" img-id="itplus04" class="img-fluid" />
                            </div>
                            <div class="col-12 col-md-3">
                                <modal :img-src="itplusWebinar" img-title="itplus" img-id="itplus05" class="img-fluid" />
                            </div>
                            <div class="col-12 col-md-3">
                                <modal :img-src="itplusSeries" img-title="itplus" img-id="itplus06" class="img-fluid" />
                            </div>
                            <div class="col-12 col-md-3">
                                <modal :img-src="itplusRewind" img-title="itplus" img-id="itplus07" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <h2 class="year">
                        元件
                    </h2>
                    <div class="file-imgbox">
                        <modal :img-src="itplusComponent" img-title="itplus component" img-id="itplus03" class="img-fluid" />
                        <a class="btn btn-default" href="event/itplus/ui_system.html" target="_blank">
                            元件頁
                        </a>
                        <!-- <p class="text-note mt-3">2023.8.12 updated</p> -->
                    </div>
                </div>

                <div class="col-12">
                    <ul class="nav justify-content-center nav-pills  nav-tabs year-tabbox" role="tablist">
                        <!-- <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#tabSitemap" role="tab"
                                aria-controls="tabSitemap" aria-selected="false">說明 & sitemap</a>
                        </li> -->
                        <!-- <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#tabWorking" role="tab"
                                aria-controls="tabWorking" aria-selected="false">元件示意圖</a>
                        </li> -->
                        <li class="nav-item">
                            <a href="event/itplus/index-static.html" class="nav-link" target="_blank">切版 <i class="fas fa-external-link-alt"></i></a>
                        </li>
                        <li class="nav-item">
                            <a href="https://itplus.ithome.com.tw/ " class="nav-link" target="_blank">上線版 <i class="fas fa-external-link-alt"></i></a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </section>
</template>