<!--  -->
<template>
  <BlogBanner :topBanner="topBanner" />
  <section class="about py-5">
    <div class="container py-lg-5 py-sm-4">
      <div class="row" v-if="data">
        <div class="col-lg-6 about-left">
          <h3>
            <strong>{{ data.title }}</strong>
          </h3>
          <p class="mt-3">
            {{ data.text }}
          </p>
        </div>
        <div class="col-lg-6 about-right text-lg-right mt-lg-0 mt-5">
          <img :src="data.img_src" alt="" class="img-fluid abt-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Header from "../components/Header/Header.vue";
import BlogBanner from "../components/BlogBanner/BlogBanner.vue";

export default {
  name: "blog",
  props: {
    country: {
      type: String,
    },
    which: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  components: {
    Header,
    BlogBanner,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      data: (state) => state.blog.data,
      topBanner: (state) => state.area.data.topPic,
    }),
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.$store.dispatch("getBlog", {
      country: this.country,
      which: this.which,
      id: this.id,
    });
    this.$store.dispatch("getCountry", this.country);
  },
};
</script>
<style scoped lang="css" rel="stylesheet/css">
/* @import url(); 引入css类 */
</style>