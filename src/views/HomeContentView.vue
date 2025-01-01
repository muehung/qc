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
        </section>

        <section class="section-about" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-10">
                        <h3 class="til mt-0">關於我</h3>
                    </div>
                    <div class="col-10 mb-3 about-text">
                        <p>從平面、品牌設計起步，隨著對網頁設計的興趣加深，開始自學並在一家網頁設計公司發展技能。後來，加入 IT 媒體公司，深入了解工程師專業術語，擴展視野。</p>
                        <p class="mb-5">
                            熱衷於前端技術，學習 JavaScript、jQuery 和暴力班切版課程，並修讀 Vue.js 課程。也參加了 UX 讀書會，並將「UX三刀流」的學習實踐於工作，進一步提升我的設計與技術能力。
                        </p>
                    </div>
                    <div class="col-12 col-lg-6">
                        <h4 class="til mt-0">成果</h4>
                        <ul class="ul">
                            <li>巨匠電腦官網，結束10年+老舊官網，改頭換面</li>
                            <li>資安大會網站，建構設計、切版規則與標準</li>
                            <li>webinar、iT plus 影音系統，建構設計、切版規則與標準</li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-5">
                        <h4 class="til mt-0">經歷</h4>
                        <ul class="ul">
                            <li>2023 ~ 至今 : 巨匠電腦</li>
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
            <div class="container">
                <!-- <h4 class="title-sub">Skills</h4> -->
                <div class="row">
                    <div class="col-12 row justify-content-center">
                        <div class="col-12 col-md-2">
                            <h3 class="title mt-0">技能與軟體</h3>
                        </div>
                        <div class="col-12 col-md-3">
                            <ul class="ul">
                                <li>HTML / CSS / SCSS</li>
                                <li>Git</li>
                                <li>Bootstrap 5</li>
                                <li>JavaScript / jQuery</li>
                                <li>Vue 3 / Pinia / Vite</li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-3">
                            <ul class="ul">
                                <li>Figma</li>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                                <li>Wireframe</li>
                                <li>Scrum</li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-3">
                            <ul class="ul">
                                <li>視覺設計</li>
                                <li>設計流程</li>
                                <!-- <li>影片剪接</li> -->
                                <!-- <li>網頁與網路基礎知識</li> -->
                                <!-- <li>插畫設計</li> -->
                            </ul>
                        </div>
                    </div>
                    <!-- <div class="col-12 col-lg-4 row justify-content-center">
                        <div class="col-12">
                            <h3 class="title">學習</h3>
                        </div>
                        <div class="col-12">
                            <ul class="ul">
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