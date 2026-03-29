<script setup>
import jQuery from 'jquery';
import { onMounted } from 'vue';
const $ = jQuery;
import kvDecoJSON from './../assets/kv-deco.json';
import kvWaveJSON from './../assets/kv-wave.json'
import { Vue3Lottie } from 'vue3-lottie';

onMounted(()=>{
        // Navbar
        $(function() {
        // 下拉選單
        $('#navDown').click(function(e) {
            e.preventDefault();
            $(this).next('.down-menu').toggleClass('downOpen');
            $(this).toggleClass('rotateIcon');
            return false;
        });

        // 小版選單
        $('.hamburger').on('click',function(){
            $(this).toggleClass('burgerCross');
            $('#nav-xs').toggleClass('burgerOpen');
        });
    });
});
</script>
<template>
    <header class="main">
        <!-- <Vue3Lottie animation-link="kvWave.json" class="lottie-wave"/> -->
        <!-- <Vue3Lottie :animationData="kvWaveJSON" :height="2000" :width="300" :class="lottie-kv-deco" /> -->
        <Vue3Lottie :animationData="kvWaveJSON" class="lottie-wave"/>
        <div class="kv-wrapper" :class="lottie-kv-deco">
            <div class="row justify-content-center align-items-center">
                <div class="col-10 col-sm-8 col-md-4 kv-col-intro">
                    <!-- <h1 class="main-title">
                        Hello World
                    </h1> -->
                    <!-- <h2>Cheryl Hung</h2> -->
                    <!-- <h2 class="main-subtitle">專注於<span class="light">網頁設計</span>、<span class="light">網頁前端</span>，瞭解<span class="">使用者經驗</span>、<span class="">手機介面</span></h2>
                    <p class="main-txtbox">將美感與技術相結合，解決問題與挑戰，打造直觀且吸引人的數位介面，致力於創造出兼具美感與實用性的作品。</p> -->
                    
                    <h1 class="main-subtitle">
                        My name is 
                        <div class="name">CHERYL</div>
                    </h1>
                    <p class="main-txtbox">
                        Frontend Designer & Developer.
                    </p>
                </div>
                <div class="col-10 col-sm-6 col-md-5 kv-col-slogan">
                    <!-- <Vue3Lottie animation-link="src/assets/kv-deco.json" class="lottie-kv-deco"/> -->
                    <!-- <Vue3Lottie :animationData="kvDecoJSON" class="lottie-kv-deco" /> -->
                     <div class="main-slogan">
                        設計出發 程式為翼
                        <p class="main-stemp">萱容</p>
                     </div>
                </div>
            </div>
        </div>

        <!-- <div class="social">
            <ul class="social-list">
                <li>
                    <a href="mailto:hung.co24@gmail.com" target="_blank">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                         E-mail 聯絡
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Cherylhung" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://hahow.in/@muriel000" target="_blank">
                        hahow
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        codepen
                    </a>
                </li>
                
                <li>
                    <a href="" target="_blank">
                        facebook
                    </a>
                </li>
                
            </ul>
            
        </div> -->
    </header>
</template>