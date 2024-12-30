<script setup>
// import { defineProps } from 'vue';
const props = defineProps({
    id: Number,
    enName: String,
    coverImg: String,
    logo: String,
    webType: String,
    tag: Array,
    head: String,
    infoDate: String,
})


</script>
<template>
    <div class="file-item">
        <!-- <a :href="props.enName" class="file-link"> -->
        <RouterLink :to="props.enName">
            <div class="file-cover">
                <img :src="props.coverImg" loading="lazy" class="img">
            </div>
            <div class="file-info">
                <div class="info-corp">
                    <span class="imgbox">
                        <img :src="props.logo" alt="" class="img">
                    </span>
                    <span class="info-type">{{ props.webType }}</span>
                </div>
                
                <div class="tagbox">
                    <template v-for="tag in props.tag">
                        <span>{{ tag }}</span>
                    </template>
                </div>
                <h4 class="head">{{ props.head }}</h4>
                
                <div class="info-date">{{ props.infoDate }}</div>
            </div>
        </RouterLink>
    </div>
</template>