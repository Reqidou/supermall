<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }   
  },
  methods: {
    imgLoad() {
      if(!this.isLoad)  {
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style>

</style>