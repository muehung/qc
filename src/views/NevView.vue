<script setup>
</script>

<template>
    <div id="goTop" class=""></div>
    <nav class="nav-main tw-p-5">
        <div class="nav-logo">
            <RouterLink to="/">
                <img src="./../assets/img/logo.png" alt="Cheryl's">
            </RouterLink>
        </div>
        <a type="button" class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </a>
        <ul class="nav-list" id="nav-xs">
            <li class="nav-li">
                <RouterLink :to="{ path: '/', hash: '#about' }" class="nav-li-a">關於我 </RouterLink>
            </li>
            <li class="nav-li">
                <!-- <a href="#portfolio" class="nav-li-a">
                    專案 
                </a> -->
                <RouterLink :to="{ path: '/', hash: '#portfolio' }" class="nav-li-a">專案 </RouterLink>
            </li>
            <li class="nav-li">
                <!-- <a href="#skills" class="nav-li-a">
                    技能 
                </a> -->
                <RouterLink :to="{ path: '/', hash: '#skills' }" class="nav-li-a">技能 </RouterLink>
            </li>
        </ul>
    </nav>
</template>
<style scoped></style>