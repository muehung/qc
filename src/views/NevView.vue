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
                <a href="/#about" class="nav-li-a">
                    關於我 
                    <!-- <i class="fas fa-angle-down"></i> -->
                </a>
            </li>
            <li class="nav-li">
                <a href="/#portfolio" class="nav-li-a">
                    專案 
                    <!-- <i class="fas fa-angle-down"></i> -->
                </a>
            </li>
            <li class="nav-li">
                <a href="/#skills" class="nav-li-a">
                    技能 
                    <!-- <i class="fas fa-angle-down"></i> -->
                </a>
            </li>
        </ul>
    </nav>
</template>
<style scoped></style>