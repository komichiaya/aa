<!--  -->
<template>
  <section
    class="banner_inner"
    id="home"
    :style="{ 'background-image': `url(${topBanner})` }"
  >
    <div class="banner_inner_overlay"></div>
  </section>
</template>

<script>
export default {
  props: {
    topBanner: {
      type: String,
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