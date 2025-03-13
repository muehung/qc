<script setup>
import jQuery from 'jquery';
import { onMounted } from 'vue';
const $ = jQuery;


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
        <Vue3Lottie animation-link="src/assets/kv-wave.json" class="lottie-wave"/>
        <div class="kv-wrapper">
            <div class="row justify-content-center align-items-center">
                <div class="col-10 col-sm-8 col-md-6">
                    <Vue3Lottie animation-link="src/assets/kv-deco.json" class="lottie-kv-deco"/>
                </div>
                <div class="col-10 col-sm-8 col-md-6">
                    <h1 class="main-title">I'm Cheryl.</h1>
                    <!-- <h2>Cheryl Hung</h2> -->
                    <!-- <h2 class="main-subtitle">專注於<span class="light">網頁設計</span>、<span class="light">網頁前端</span>，瞭解<span class="">使用者經驗</span>、<span class="">手機介面</span></h2>
                    <p class="main-txtbox">將美感與技術相結合，解決問題與挑戰，打造直觀且吸引人的數位介面，致力於創造出兼具美感與實用性的作品。</p> -->
                    
                    <h2 class="main-subtitle">A Web Designer.</h2>
                    <p class="main-txtbox">
                        Where design meets dev in harmony.
                    </p>
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