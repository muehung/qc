<script setup>
import { ref } from 'vue';
import { useStore } from '../stores';
import Header from './../components/HeaderView.vue'
import Card from './../components/Card.vue'

const store = useStore();
const list = ref(store.portfolio);

</script>
<template>
    <div>
        <Header />
        <section class="section-files main" id="portfolio">
            <div class="container">
                <h2 class="title">專案</h2>

                <div class="row justify-content-center item-group">
                    <template v-for="n in list" :key="n.id" >
                        <div class="col-10 col-sm-6">
                            <Card v-bind="n" />
                        </div>
                    </template>
                </div>
            </div>
             <div class="container">
                <h2 class="title">社群圖</h2>
                <div class="row justify-content-center item-group">
                    <div class="col-10 col-sm-8 col-lg-5">
                        <div class="banner-container">
                            <iframe src="https://www.behance.net/embed/project/223304511?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-about" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-10">
                        <h3 class="til mt-0">關於我</h3>
                    </div>
                    <div class="col-10 mb-3 about-text">
                        <p>從平面、品牌設計起步，隨著對網頁設計的興趣加深，開始自學並在一家網頁設計公司發展技能。後來，加入 IT 媒體公司，深入了解工程師專業術語，擴展視野，目前在教育品牌公司，協助官方網站改版迭代。</p>
                        <p class="mb-5">
                            對新知的渴望驅使我持續學習設計知識、前端技術，如 JavaScript、jQuery、切版與 Vue.js，也積極參與 UX課程，並逐步將 AI 工具應用於設計流程，讓我的設計與技術能力不斷精進。
                        </p>
                    </div>
                    <div class="col-12 col-lg-6">
                        <h4 class="til mt-0">成果</h4>
                        <ul class="ul">
                            <li>巨匠電腦官網改版設計與切版，翻新十年以上的舊網站</li>
                            <li>規劃並設計資安大會網站，建立切版規範與設計標準</li>
                            <li>打造 webinar 與 iT plus 影音系統，制定設計與切版流程</li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-5">
                        <h4 class="til mt-0">經歷</h4>
                        <ul class="ul">
                            <li>2023 ~ 至今 : <a href="https://www.pcschool.com.tw/" target="_blank">巨匠電腦</a></li>
                            <li>
                                2018 ~ 2023 : 網站視覺設計 / <a href="https://www.ithome.com.tw/" target="_blank">iThome</a></li>
                            <li>2014 ~ 2017 : 網站設計 / <a href="https://www.kyart.com.tw" target="_blank">光沅數位創意</a></li>
                            <li>2014 ~ 2010 : 視覺設計、平面設計、餐飲設計</li>
                        </ul>
    
                        <!-- <a class="btn btn-default btn-theme d-block ml-auto mr-auto" href="https://cargocollective.com/murielhung2017" target_blank="">過往設計作品  <i class="fas fa-external-link-alt fa-xs ml-2"></i></a> -->
                    </div>
                </div>
            </div>
        </section>
    
        <section class="section-skills" id="skills">
            <div class="container-fluid">
                <!-- <h4 class="title-sub">Skills</h4> -->
                <div class="row">
                    <div class="col-12 row justify-content-center">
                        <!-- <div class="col-12 col-md-2">
                            <h3 class="title mt-0">技能與軟體</h3>
                        </div> -->
                        <div class="col-12 col-md-6 col-lg-3">
                            <ul class="ul skill-list">
                                <p class="head">設計技能</p>
                                <li>UI/UX 設計</li>
                                <li>色彩配置、版面設計、一致性</li>
                                <li>設計流程 - 從需求分析到設計交付</li>
                                <li>Wireframe - 資訊架構與原型設計</li>
                                <li>專業圖庫搜尋與版權素材應用</li>
                            </ul>
                        </div>
                        
                        <div class="col-12 col-md-6 col-lg-3">
                            <ul class="ul skill-list">
                                <p class="head">設計工具</p>
                                <li>Figma - 介面設計、團隊協作</li>
                                <li>Adobe 系列軟體應用</li>
                            </ul>
                            <ul class="ul mt-5 skill-list">
                                <p class="head">AI工具應用</p>
                                    <li>文字生成圖像</li>
                                    <li>圖片生成影片</li>
                                    <li>vibe coding 生成應用</li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <ul class="ul skill-list">
                                <p class="head">團隊協作</p>
                                <li>Scrum - 敏捷開發流程參與經驗</li>
                                <li>Git - 版本控制與團隊協作工具</li>
                            </ul>
                            <ul class="ul mt-5 skill-list">
                                <p class="head">前端技術（加分項）</p>
                                <li>HTML / CSS / SCSS</li>
                                <li>JavaScript / jQuery - 互動功能</li>
                                <li>響應式網頁框架基礎</li>
                                <!-- <li>Vue 3 / Pinia / Vite - 現代前端框架開發</li> -->
                            </ul>
                        </div>
                    </div>
                    <!-- <div class="col-12 col-lg-4 row justify-content-center">
                        <div class="col-12">
                            <h3 class="title">學習</h3>
                        </div>
                        <div class="col-12">
                            <ul class="ul skill-list">
                                <li>產品設計實戰：用 Figma 打造絕佳 UI/UX</li>
                                <li>JavaScript / jQuery 前端開發入門實戰</li>
                                <li>插畫設計</li>
                            </ul>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>
        
    </div>
</template>