<!--  -->
<template>
  
    <section class="banner_w3lspvt" id="home">
      <div class="csslider infinity" id="slider1">
        <input type="radio" name="slides" checked="checked" id="slides_1" />
        <input type="radio" name="slides" id="slides_2" />
        <input type="radio" name="slides" id="slides_3" />
        <input type="radio" name="slides" id="slides_4" />
        <ul>
          <li v-for="item in data" :key="item.id">
            <div class="banner-top" :style="{'background-image': `url(${item.top_img})`}">
              <div class="overlay">
                <div class="container">
                  <div class="w3layouts-banner-info">
                    <h3 class="text-wh">{{ item.introduce_title }}</h3>
                    <h4 class="text-wh">{{ item.introduce }}</h4>
                    <div class="buttons mt-4">
                      <router-link :to="`/area/${item.name}`" class="btn mr-2"
                        >了解更多</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="arrows">
          <label for="slides_1"></label>
          <label for="slides_2"></label>
          <label for="slides_3"></label>
          <label for="slides_4"></label>
        </div>
      </div>
    </section>
  
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped lang="css" rel="stylesheet/css">
/* @import url(); 引入css类 */

</style>