<template>
  <div>
    <!-- banner -->
    <TopBanner :data="data" />
    <!-- about -->
    <section class="about py-5">
      <div class="container py-lg-5 py-sm-4">
        <div class="row">
          <div class="col-lg-6 about-left">
            <h3 class="mt-lg-3">
              旅行，就应该只是单纯地出去走走。去哪里，并不重要。<strong
                >心宽，便是远方。</strong
              >
            </h3>
            <p class="mt-4">
              去旅行每个人都有自己的定义，不愿被困在笼中，迷恋在路上的感觉，远方有着让人难以抵挡的诱惑，所以，我们旅行！
            </p>
            <p class="mt-3">
              不去旅行的借口更是不同，没有多余的精力和时间，旅行的费用不足，林林总总。旅行也是不断学习的过程，让自己活得更自由。旅行，自由。没有繁琐的计划，没有沉重的负担，只有最纯粹的态度。
            </p>
          </div>
          <div class="col-lg-6 about-right text-lg-right mt-lg-0 mt-5">
            <img src="images/index.jpg" alt="" class="img-fluid abt-image" />
          </div>
        </div>
      </div>
    </section>
    <!-- destinations -->
    <section class="destinations py-5" id="destinations">
      <div class="container py-xl-5 py-lg-3">
        <h3 class="heading text-capitalize text-center">热门旅行地</h3>
        <p class="text mt-2 mb-5 text-center">
          说走就走是人生最美的奢华，也是最灿烂的自由，以身外身做梦中梦
        </p>
        <div class="row inner-sec-w3layouts-w3pvt-lauinfo">
          <div
            class="col-md-3 col-sm-6 col-6 destinations-grids text-center"
            v-for="item in data"
            :key="item.id"
          >
            <div class="image-position position-relative">
              <img :src="item.img" class="img-fluid" alt="" />
            </div>
            <div class="destinations-info">
              <div class="caption mb-lg-3">
                <h4>{{ item.CN_Name }}</h4>
                <router-link :to="`/area/${item.name}`">more</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// import {createApp} from 'vue'
// import { Button, Table } from "view-design";
// createApp().component("Button", Button);
// createApp().component("Table", Table);
import { mapState } from "vuex";
import TopBanner from "@/components/TopBanner/TopBanner";
import Header from "@/components/Header/Header";

export default {
  components: {
    TopBanner,
    Header,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      data: (state) => state.main.data.countryList,
      list: (state) => state.main.data.topList,
    }),
  },
  mounted() {
   
    this.$store.dispatch("getMain");
    window.addEventListener("unload", () => {
      //将最新的shopData存入sessionStorage
      sessionStorage.setItem("list", JSON.stringify(this.list));
    });
  },

  beforeUnmount() {
    sessionStorage.setItem("list", JSON.stringify(this.list));
  },
};
</script>
