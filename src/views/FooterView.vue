<script setup></script>
<template>
    <div class="footer-go-top">
        <!-- <a href="#goTop">
            回上面 <i class="fas fa-1x fa-angle-up"></i>
        </a> -->
        <RouterLink :to="{ hash: '#goTop' }" class="nav-li-a">
            回上面 <i class="fas fa-1x fa-angle-up"></i>
        </RouterLink>
    </div>
    <footer>
        Cheryl's, copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2025
   </footer>
</template>