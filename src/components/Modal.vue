<script setup>
import { onMounted, ref } from 'vue';
// const logoPath = new URL('@/assets/img/corp/ithome.png', import.meta.url).href;
const modalImgSrc = ref(null);
const props = defineProps({
  imgSrc: {
      type: String,
      // required: true,
  },
  imgTitle: {
    type: String,
  },
  imgId: {
    type: String,
  }
})
// const props = {
//     imgSrc: {
//       type: String,
//       required: true,
//     },
//   },

onMounted(()=>{
  modalImgSrc.value = props.imgSrc;
})

</script>
<template>
    <!-- <img
    :src="modalImgSrc"
    class="img-thumbnail"
    style="cursor: pointer;"
    data-bs-toggle="modal"
    data-bs-target="#modalTemp"
    /> -->
    <img :src="imgSrc"
     :alt="imgTitle"
    class="img-thumbnail"
    style="cursor: pointer;"
    data-bs-toggle="modal"
    :data-bs-target="`#modalTemp${imgId}`">
    

      <!-- Modal -->
      <div class="modal fade" :id="`modalTemp${imgId}`" tabindex="-1" aria-labelledby="modalTempLabel" aria-hidden="false">
        <div class="modal-dialog modal-fullscreen-xxl-down p-3">
          <!-- <div class="modal-content"> -->
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <img :src="imgSrc" :alt="imgTitle" class="img" loading="lazy">
          <!-- </div> -->
        </div>
      </div>
      <!--  -->

      <!-- <div class="modal fade" id="customModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">圖片檢視</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img :src="imageSrc" class="img-fluid" alt="Selected" />
            </div>
          </div>
        </div>
      </div> -->
</template>
<style scoped>

</style>