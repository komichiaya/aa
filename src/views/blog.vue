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
          <img
            :src="
              data.img_src
                ? data.img_src
                : 'https://cfan.cc/tc/static/img/file.png'
            "
            alt=""
            class="img-fluid abt-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import Header from "../components/Header/Header.vue";
import BlogBanner from "../components/BlogBanner/BlogBanner.vue";
import { defineComponent, reactive, computed, onMounted, toRefs } from "vue";

export default defineComponent({
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
  setup(props) {
    const { country, which, id } = toRefs(props);
    const store = useStore();
    const data = computed(() => store.state.blog.data);
    const topBanner = computed(() => store.state.area.data.topPic);
    onMounted(() => {
      store.dispatch("getBlog", {
        country: country.value,
        which: which.value,
        id: id.value,
      });
      store.dispatch("getCountry", country.value);
    });
    return reactive({ data, topBanner });
  },
});
</script>
<style scoped lang="css" rel="stylesheet/css">
/* @import url(); 引入css类 */
</style>