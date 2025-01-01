<script setup>
import { gjunLogoPath, pcschoolTop, pcschoolMd, pcschoolBottom, itplusFigmaWork, itplusComponent } from '../helper/assets';
import { onMounted, ref, provide } from 'vue';

 onMounted(()=>{
    const imgSrc = ref(null);
    const imgTitle = ref(null);
    const imgId = ref(null);

    provide("currentImage" , {imgSrc, imgTitle, imgId});


 })
</script>
<template>
    <section class="section-file kv pcschool">
        <div class="bg"></div>
        <div class="file-kv-content">
            <div class="container">
                <div class="row">
                    <div class="col-8 col-md-2">
                        <div class="imgbox file-pic">
                            <!-- <img src="../assets/img/corp/gjun.png" alt="" class="img logo"> -->
                            <img :src="gjunLogoPath" alt="" class="img logo">
                        </div>
                    </div>
                    <div class="col-12 col-md-9 offset-md-1 file-intro">
                        <ul class="intro-list row">
                            <li class="col-12 col-md-6 intro-li">
                                <span>專案名稱</span>
                                巨匠電腦官網改版
                            </li>
                            <li class="col-12 col-md-6 intro-li">
                                <span>負責角色</span>
                                網頁設計
                            </li>
                            <li class="col-12 col-md-6 intro-li">
                                <span>類型</span>
                                形象網站
                            </li>
                            <li class="col-12 col-md-6 intro-li">
                                <span>經歷時間</span>
                                2023 - 2025
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
                            <!-- <a class="nav-link active" data-bs-toggle="tab" href="#tabSitemap" role="tab"
                                aria-controls="tabSitemap" aria-selected="false">說明 & sitemap</a> -->
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link" data-bs-toggle="tab" href="#tabWorking" role="tab"
                                aria-controls="tabWorking" aria-selected="false">Figma 工作現場示意圖 ＆ 元件示意圖</a> -->
                        </li>
                        <li class="nav-item">
                            <!-- <a href="event/itplus/index-static.html" class="nav-link" target="_blank">切版 <i class="fas fa-external-link-alt"></i></a> -->
                        </li>
                        <li class="nav-item">
                            <a href="https://www.pcschool.com.tw/" class="nav-link" target="_blank">上線版 <i class="fas fa-external-link-alt"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-8">
                    <div class="row tab-row">
                        <div class="col-2 tabLabel">時間</div>
                        <div class="col-10 tabAnswer">
                            2023/11 - 2024/9 第一階段上線
                        </div>
                    </div>
                    <div class="row tab-row">
                        <div class="col-2 tabLabel">團隊成員</div>
                        <div class="col-10 tabAnswer">網站企劃、設計師、工程師團隊</div>
                    </div>
                    <div class="row tab-row">
                        <div class="col-2 tabLabel">專案背景</div>
                        <div class="col-10 tabAnswer">
                            10多年老舊官網，不同頁面不同時間小範圍修改，分別使用bootstrap3或4版，文案、課程錯誤、設計過時，現代多使用手機觀看網站。官網因應各部門需求資訊、分類凌亂。</div>
                    </div>
                    <div class="row tab-row">
                        <div class="col-2 tabLabel">目標</div>
                        <div class="col-10 tabAnswer">
                            <ol>
                                <li>以年輕潛在用戶為使用者，手機優先規劃。
                                </li>
                                <li>更正錯誤文案與課程</li>
                                <li>增加易用性操作</li>
                                <li>全面更新成bootstrap5</li>
                            </ol>
                        </div>
                    </div>
                    <div class="row tab-row">
                        <div class="col-2 tabLabel">挑戰</div>
                        <div class="col-10 tabAnswer">
                            <ul class="ul">
                                <li>sitemap全貌未知，css互相串連</li>
                                <li>無法接觸套版後的程式頁面</li>
                                <li>跨部門、事業群、場地溝通</li>
                                <li>每個人非專職，專案製作時間不易掌控</li>
                                <li>沒有文件只能用溝通、詢問來了解相關細節</li>
                                <li>過去切版資訊以修改時間排序</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="row tab-row">
                        <div class="col-2 tabLabel">問題解法</div>
                        <div class="col-10 tabAnswer"> 
                            <ol>
                                <li>開啟關係人會議</li>
                                <li>共同創建跨部群資料夾、line群組</li>
                                <li>分階段上線</li>
                                <li>使用git版本控制</li>
                                <li>有空就整理、寫文件、放快捷路徑</li>
                            </ol>
                        </div>
                    </div>

                    <div class="row tab-row">
                        <div class="col-2 tabLabel">總結</div>
                        <div class="col-10 tabAnswer"> 
                            <p>了解到跨部門、跨事業群的專案不容易。因為有資深企劃、資深工程師才知道歷史遺跡的成因，若能用專案分類、寫好文件就不用口耳相傳的方式。</p>
                        </div>
                    </div>

                    <div class="file-imgbox">
                        
                        <img :src="pcschoolTop" class="img-fluid" />
                        <img :src="pcschoolMd" class="img-fluid" />
                        <img :src="pcschoolBottom" class="img-fluid" />

                        <p class="text-note mt-3">2025.1.1 updated</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>