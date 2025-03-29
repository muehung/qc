<script setup>
import { pcschoolOthersPages } from '../helper/assets';
import { onMounted, ref, provide, onUnmounted } from 'vue';
import pcschoolImage from '@/assets/img/files/pcschool.png';
import pcschoolOldWireImage from '@/assets/img/files/pcschool-old-wire.png';

const pcschoolOthersLocal = ref(pcschoolOthersPages);
const heroImgboxRef = ref(null);
// 延遲函數，返回一個 Promise
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

 onMounted(()=>{
    const imgSrc = ref(null);
    const imgTitle = ref(null);
    const imgId = ref(null);
   
    provide("currentImage" , {imgSrc, imgTitle, imgId});

 });
</script>
<template>
    <div class="case-study-container">
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 pb-4">
                        <div class="hero-content">
                            <h1 class="hero-title">全新改版<br />巨匠電腦官網</h1>
                            <p class="hero-subtitle">設計一致簡潔、凸顯資訊清晰明確，輕鬆找到所需課程。</p>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <!-- <div class="hero-imgbg"> -->
                            <figure class="hero-imgbox"ref="heroImgboxRef">
                                <!-- <img :src="laptopImage" alt="laptopImage" class="laptop-img img-fluid" /> -->
                                <img :src="pcschoolImage" alt="巨匠電腦官網" class="hero-img img-fluid" />
                            </figure>
                            <p class="ps-1 text-center text-gray">
                              <span class="badge bg-secondary">
                                <i class="fas fa-arrows-alt-v"></i>
                              可上下滑動
                              </span>
                            </p>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </section>
    
        <!-- Project Info Section -->
        <section class="project-info-section">
            <div class="container">
                <div class="info-container">
                    <div class="info-item">
                    <h3 class="info-title">Role</h3>
                    <p class="info-content">Web designer</p>
                    </div>
                    <div class="info-item">
                    <h3 class="info-title">Tools</h3>
                    <p class="info-content">Figma, PS, AI, VSCode, Github, Bootstrap5</p>
                    </div>
                    <div class="info-item">
                    <h3 class="info-title">Team</h3>
                    <p class="info-content">1 product Planner, 1 web designers, 2 developers</p>
                    </div>
                    <div class="info-item">
                    <h3 class="info-title">Timeline</h3>
                    <p class="info-content">Mar - Sep 2024 (6 weeks)</p>
                    </div>
                </div>
            </div>
        </section>
    
        <!-- Timeline Section -->
        <section class="timeline-section">
            <!-- <div class="container"> -->
                <div class="timeline-container">
                    <div class="timeline-item">
                    <div class="timeline-number">1</div>
                    <div class="timeline-content">
                        <p class="timeline-text">Overview</p>
                    </div>
                    </div>
                    <div class="timeline-item">
                    <div class="timeline-number">2</div>
                    <div class="timeline-content">
                        <p class="timeline-text">資訊架構、wireframe</p>
                    </div>
                    </div>
                    <div class="timeline-item">
                    <div class="timeline-number">3</div>
                    <div class="timeline-content">
                        <p class="timeline-text">mockup</p>
                    </div>
                    </div>
                    <div class="timeline-item">
                    <div class="timeline-number">4</div>
                    <div class="timeline-content">
                        <p class="timeline-text">切版、定義UI、前端規範</p>
                    </div>
                    </div>
                </div>
            <!-- </div> -->
        </section>
    
        <!-- Overview Section -->
        <section class="section-overview">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-10 overview">
                        <h2 class="section-title">概述 Overview</h2>
                        <div class="section-content">
                            <p>
                              巨匠電腦，身為老牌技職課程品牌，全台41間分校。其官方網站，歷史包袱繁多、網頁資訊凌亂錯誤，長年使用者多為內部同仁。
                            </p>
                            <!-- <p>從2023年底，籌備跨部門團隊，2024年9月，第一版上線後持續迭代更新。</p> -->
                        </div>
                    </div>
                    <div class="col-12 col-md-10 reason">
                        <h2 class="section-title">改版原因 Problem Statement</h2>
                        <div class="section-content">
                          <ol class="ol section-text">
                            <li>過去為了業務部門、分校同仁方便，造就錯綜復雜的網站資訊，導致新用戶，想要找到預期的課程資訊相當困難與混亂。</li>
                            <li>為了增加潛在學員更好的使用體驗，除了基本資訊分類與正確性，也提升品牌形象、行銷成效，決定進行全新改版。</li>
                            <li>同業競爭、資訊AI演進，以及線上課程搶攻市場，不斷面臨轉型上的挑戰。</li>
                          </ol>
                        </div>
                    </div>
                    <!-- <div class="overview-img">
                      <img src="@/assets/img/files/pcschool-" alt="Competitor wireframe" class="wireframe-image" />
                    </div> -->
                </div>
            </div>
        </section>
    
        <!-- Design Strategy Section -->
        <section class="section-strategy">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 strategy">
                    <h2 class="section-title">設計、前端策略</h2>
                    <div class="section-content">
                        <ul class="strategy-list">
                            <li class="strategy-item">簡化首頁功能表和首頁內容</li>
                            <li class="strategy-item">微調版型修飾整體視覺</li>
                            <li class="strategy-item">重新設計課程查詢頁面,採用頁籤式分類</li>
                            <li class="strategy-item">全面檢視並優化師資頁面的呈現</li>
                            <li class="strategy-item">整合補助說明與委辦課程於同一頁面</li>
                            <li class="strategy-item">採用 Bootstrap 作為切版基礎</li>
                            <li class="strategy-item">表單使用 iframe,因為程式需求(一頁抓一次表單欄位)</li>
                            <li class="strategy-item">定義設計UI、前端UI規範、色彩計畫:課程標籤、文字顏色、連結色、巨匠標準色、裝飾色、背景色</li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-md-6 wireframe">
                  <p class="section-text">將舊官網資訊架構單純化成wireframe。</p>
                  <div class="hero-imgbox">
                      <!-- <img :src="laptopImage" alt="laptopImage" class="laptop-img img-fluid" /> -->
                      <img :src="pcschoolOldWireImage" alt="old wireframe" class="hero-img img-fluid" />
                  </div>
                </div>
            </div>
        </div>
        </section>
    
        <!-- Wireframe Section -->
        <!-- <section class="section-wireframe">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        
                    </div>
                    <div class="col-12 col-md-6">
                        
                    </div>
                </div>
            </div>
        </section> -->

        <section class="section-goals">
          <div class="container">
            <div class="row">
                <div class="col-12 col-md-10 goals">
                  <h2 class="section-title">設計目標 Goal</h2>
                  <div class="section-content">
                  <p class="section-text">
                      調整首頁、選單為首,帶動其他頁面調整,資訊架構重新整理,以宣傳品牌特色、定位為主,提升新學員使用者體驗和行銷效果。
                  </p>
                  <p class="section-text">具體目標包括:</p>
                  <p class="section-text">
                      顯著提升網站的帶客點擊率、改善行銷和使用者動線、修正資訊錯誤、建立直覺易懂的導航系統、清晰區隔課程種類、減少干擾元素、優化課程頁資訊架構、提升SEO表現、提供完善的補助資訊和QA頁面,並恢復活動頁功能。
                  </p>
                  <p class="section-text">
                      設計視覺集中且具有引導性的頁面、建立一致且舒適的視覺風格、最終打造一個高效且現代化的學習品牌網站。
                  </p>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section-wireframe2">
            <div class="container-fliud">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img src="@/assets/img/files/pcschool-step2-wireframe.png" alt="Competitor wireframe" class="wireframe-image" />
                    </div>
                    <div class="col-12 col-md-6 py-4">
                        <div class="wireframe2-subtext">
                            <h3 class="subsection-title">同業Wireframe</h3>
                            <p class="section-text">搭配同業官網分析討論，提案3種資訊架構，透過企劃溝通確認。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <!-- Mockup Section -->
        <section class="mockup-section">
        
            <h2 class="section-title text-center">Mockup</h2>
            <div class="mockup-container">
                <div class="row justify-content-center mockup-row mockup-row-main">
                    <div class="col-11 col-md-9 col-lg-8">
                        <div class="mockup-item">
                            <img src="@/assets/img/files/pcschool-step3-mockup.png" alt="Website mockup 1" class="mockup-image" />
                        </div>
                    </div>
                </div>
                <div class="mockup-row">
                    <div class="mockup-grid">
                        <div class="mockup-grid-item" v-for="n in pcschoolOthersLocal" :key="n">
                            <img :src="n" alt="Website mockup grid" class="mockup-grid-image" />
                        </div>
                    </div>
                </div>
                <div class="mockup-caption">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <h3 class="section-title">
                                    與網站企劃配合
                                </h3>    
                                <p>
                                    他依據後台數據比重、以及對人、課程資訊等經驗,所畫出的草圖。
                                    我再設計規劃與討論。依據公司推動業務重要性與順序,重新翻新整體頁面。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
    
        <!-- Learnings Section -->
        <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 learnings">
                    <h2 class="section-title">學習到 Learnings</h2>
                    <div class="section-content">
                    <p class="section-text">
                        透過該專案從頭到現在持續進行中,學習到溝通成本 : 部門溝通、內部組織溝通,需要人品默契、SEO知識、資訊等等,客製化的使用設計流程工具。
                    </p>
                    </div>
                </div>
                <div class="col-12 col-md-6 next-steps">
                    <h2 class="section-title">下一步 Next Steps</h2>
                    <div class="section-content">
                    <p class="section-text">
                        現階段最重要的首頁、課程頁、政府補助、分校、老師等資訊頁面已完成。但還需要更多更直接的使用者回饋，多方不同部門的意見整合。
                    </p>
                    <p>
                      資訊團隊應該引入版本控管、更多自動化、釋出更多權限，讓網站能更有效率的迭代。
                    </p>
                    <a type="button" href="https://www.pcschool.com.tw/" target="_blank" class="btn btn-default">前往網站</a>
                    </div>
                </div>
            </div>
            
        </div>
        </section>
    </div>
      
</template>
<style scoped>
      .section-content, .section-content p {
        font-size: 20px;
      }
      .case-study-container {
        font-family: 'Noto Sans TC', sans-serif;
        color: #333;
        line-height: 1.6;
      }
      
      /* Hero Section */
      .hero-section {
        display: flex;
        flex-direction: column;
        padding: 2rem 2rem;
        background: linear-gradient(to bottom, #ffffff, #fff1f1);
        position: relative;
      }

      .hero-content {
        flex: 1;
      }
      
      @media (min-width: 768px) {
        .hero-section {
          flex-direction: row;
          align-items: center;
          padding: 4rem 2rem;
          justify-content: space-between;
        }
        .hero-content {
            margin-top: 20%;
          }
      }
      
      .hero-title {
        font-size: 3.5rem;
        font-weight: 500;
        color: #b55b5b;
        margin-bottom: 1rem;
        line-height: 1.2;
      }
      
      .hero-subtitle {
        font-size: 1.2rem;
        color: #555;
        max-width: 600px;
      }
      
      .hero-image {
        flex: 1;
        margin-top: 2rem;
      }
      
      @media (min-width: 768px) {
        .hero-image {
          margin-top: 0;
        }
      }
      .hero-imgbg {
        position: relative;
        width: 100%;
        max-width: 600px;
        padding-top: 32px;
      }
      .hero-imgbg::after {
        content: none;
      }
      .laptop-img {
        position: absolute;
      }
      .hero-imgbox {
        position: relative;
        margin: auto;
        border-radius: 10px;
        border: 5px solid #000;
        aspect-ratio: 16 / 10;
        width: 100%;
        overflow: scroll;
        z-index: 1;
      }
      
      .hero-img {
        width: 100%;
        height: auto;
        border-radius: 4px;
      }
      @media (min-width: 992px) {
        .hero-imgbg {
            position: relative;
            width: 725px;
            aspect-ratio: 10/7;
            padding-top: 32px;
          }
          .hero-imgbg::after {
            content: '';
            background: url('../assets/img/laptop.png') no-repeat center center/100%;
            position: absolute;
            top: 0;
            left: 50%;
            right: 0;
            bottom: 0;
            width: 102%;
            height: 100%;
            transform: translate(-50%, 4%);
          }
          .laptop-img {
            position: absolute;
          }
          .hero-imgbox {
            position: relative;
            margin: auto;
            border-radius: 10px;
            border: 5px solid #000;
            aspect-ratio: 16 / 10;
            width: 585px;
            overflow: scroll;
            z-index: 1;
          }
          
          .hero-img {}
      }
      
      /* Project Info Section */
      .project-info-section {
        padding: 3rem 2rem;
        background-color: #fff;
      }
      
      .info-container {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .info-item {
        flex: 1;
        min-width: 200px;
      }
      
      .info-title {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      
      .info-content {
        color: #555;
      }
      
      /* Timeline Section */
      .timeline-section {
        padding: 3rem 2rem;
        background-color: #343434;
        color: #fff;
      }
      
      .timeline-container {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      
      @media (min-width: 768px) {
        .timeline-container {
          flex-direction: row;
          justify-content: space-between;
        }
        .timeline-container::before {
          content: '';
          display: block;
          height: 2px;
          width: 100%;
          background-color: #7b7b7b;
          position: absolute;
          left: 0%;
          top: 50%;
        }
      }
      
      .timeline-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        position: relative;
        background-color: #343434;
        padding: 0 1.2rem;
      }
      
      .timeline-number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        background-color: #7b7b7b;
        border-radius: 50%;
        font-weight: 600;
        color: #343434;
      }
      
      .timeline-content {
        flex: 1;
      }
      
      .timeline-text {
      }
      
      /* Section Styles */
      .section-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      
      .section-title {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        position: relative;
      }
      
      .section-content {
        margin-bottom: 2rem;
      }
      
      .section-text {
        margin-bottom: 1rem;
        color: #555;
      }
      
      /* Overview Section */
      .section-overview {
        padding: 4rem  0;
        background-color: #fff;
      }

      .section-overview .reason {}

      .overview .section-content p{
        font-size: 20px;
      }

      .overview-img {}

      
      /* Strategy Section */
      .strategy-section {
        padding: 4rem 2rem;
        background-color: #fff;
      }
      
      .strategy-list {
        list-style-type: disc;
        padding-left: 1.5rem;
      }
      
      .strategy-item {
        margin-bottom: 0.5rem;
        color: #555;
      }
      
      /* Goals Section */
      .section-goals {
        padding: 4rem 2rem;
        background-color: #f5f5f5;
      }
      
      /* Wireframe Section */
      .section-wireframe {
        padding: 4rem 2rem;
        background-color: #fff;
      }

      .section-wireframe2 {
        padding: 0;
      }

      .wireframe2-subtext {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      
      .wireframe-container {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
      
      @media (min-width: 768px) {
        .wireframe-container {
          flex-direction: row;
          flex-wrap: wrap;
        }
      }
      
      .wireframe-item {
        flex: 1;
        min-width: 300px;
      }
      
      .wireframe-image-container {
        margin-bottom: 1rem;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
      
      .wireframe-image {
        width: 100%;
        height: auto;
        display: block;
      }
      
      .wireframe-caption {
        font-size: 0.9rem;
        color: #666;
      }
      
      .subsection-title {
        font-size: 1.4rem;
        font-weight: 600;
        margin: 2rem 0 1rem;
      }

      .pcscool-wireframe-img {
        overflow-y: scroll;
      }
      .scrollable-wireframe {
        overflow-y: auto;
        scrollbar-width: none;
      }
      .pcscool-wireframe-img img {}
      
      /* Mockup Section */
      .mockup-section {
        padding: 6rem 0rem 0rem;
        background-color: #f5f5f5;
      }
      
      .mockup-container {
        margin-top: 2rem;
      }
      
      .mockup-row {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 2rem;
        padding: 1rem 3rem;
      }
      
      @media (min-width: 768px) {
        .mockup-row {
          flex-direction: row;
          flex-wrap: wrap;
        }
      }
      
      .mockup-row-main {
        position: relative;
      }
      .mockup-row-main::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #f5f5f5 70%);
        position: absolute;
        bottom: -20px;
        left: 0;
      }

      .mockup-item {
        flex: 1;
        min-width: 300px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        overflow: hidden;
      }
      
      .mockup-image {
        width: 100%;
        height: auto;
        display: block;
      }
      
      .mockup-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem 2rem;
        max-width: 100%;
        margin-top: -8%;
      }
      
      @media (min-width: 768px) {
        .mockup-grid {
        gap: 3rem;
          grid-template-columns: repeat(4, 1fr);
          margin-top: -12%;
        }
      }
      
      .mockup-grid-item {
        border: 3px solid #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        display: block;
        aspect-ratio: 16/10;
        overflow: scroll;
        transform: rotate(-20deg);
        -webkit-transform: rotate(-20deg);
        -ms-transform: rotate(-20deg);
      }

      @media (min-width: 768px) {
        .mockup-grid-item {
            border: 3px solid #fff;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            
        }
      }
      
      .mockup-grid-image {
        width: 100%;
        height: auto;
        display: block;
      }
      
      .mockup-caption {
        padding: 3rem 0;
      }
      .mockup-caption .section-title {}
      
      /* Learnings Section */
      .learnings-section {
        padding: 4rem 2rem;
        background-color: #fff;
      }
      
      /* Next Steps Section */
      .next-steps-section {
        padding: 4rem 2rem;
        background-color: #f5f5f5;
      }
      
      /* Footer */
      .footer-section {
        padding: 3rem 2rem;
        background-color: #333;
        color: #fff;
      }
      
      .footer-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .footer-content {
        text-align: center;
      }
      
      .footer-title {
        font-size: 1.4rem;
        margin-bottom: 1rem;
      }
      
      .footer-link {
        color: #fff;
        text-decoration: underline;
        transition: opacity 0.2s;
      }
      
      .footer-link:hover {
        opacity: 0.8;
      }
      </style>