<!--  -->
<template>
  <!-- banner -->
  <section class="banner_w3lspvt" id="home">
    <div class="csslider infinity" id="slider1">
      <ul>
        <li>
          <div
            class="banner-top"
            :style="{ 'background-image': `url(${data.topPic})` }"
          >
            <div class="overlay"></div>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!------------------景点-------------------->
  <div id="h_project">
    <div class="cw1200" v-if="scenic">
      <div class="title">
        <img alt="" src="./images/title1.jpg" />
      </div>
      <div class="con">
        <ul>
          <li v-for="item in newScenic" :key="item.id">
            <router-link
              title=""
              :to="{
                name: 'Blog',
                params: { country, id: item.id, which: 'scenic' },
              }"
            >
              <img alt="" class="scale-effect" :src="item.img_src" />
              <p>{{ item.title }}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <router-link
        :to="{ name: 'More', params: { country, which: 'scenic' } }"
        v-if="scenic.length > 5"
        class="btn my"
        >more</router-link
      >
    </div>
  </div>
  <!------------------美食-------------------->
  <div id="h_food">
    <div class="cw1200" v-if="cate">
      <div class="title"><img src="./images/title2.jpg" /></div>
      <div class="con">
        <div class="box lr" style="display: inline-block">
          <div class="big" v-if="leftCateArr[0]">
            <div class="pic">
              <router-link
                title=""
                :to="{
                  name: 'Blog',
                  params: { country, id: leftCateArr[0].id, which: 'cate' },
                }"
                ><img alt="" class="scale-effect" :src="leftCateArr[0].img_src"
              /></router-link>
            </div>
            <p>{{ leftCateArr[0].title }}</p>
          </div>
          <div class="list">
            <ul>
              <li v-for="(item, index) in leftCateArr" :key="index">
                <router-link
                  title=""
                  :to="{
                    name: 'Blog',
                    params: {
                      country,
                      id: leftCateArr[index + 1].id,
                      which: 'cate',
                    },
                  }"
                  v-if="leftCateArr[index + 1]"
                >
                  <div class="pic">
                    <img
                      alt=""
                      class="scale-effect"
                      :src="leftCateArr[index + 1].img_src"
                    />
                  </div>
                  <p>{{ leftCateArr[index + 1].title }}</p>
                </router-link>
              </li>
              <div class="clear"></div>
            </ul>
          </div>
        </div>
        <div class="box fr">
          <div class="big" v-if="rightCateArr[0]">
            <div class="pic">
              <router-link
                title=""
                :to="{
                  name: 'Blog',
                  params: { country, id: rightCateArr[0].id, which: 'cate' },
                }"
                ><img
                  alt=""
                  class="scale-effect"
                  :src="rightCateArr[0].img_src"
              /></router-link>
            </div>
            <p>{{ rightCateArr[0].title }}</p>
          </div>
          <div class="list">
            <ul>
              <li v-for="(item, index) in rightCateArr" :key="index">
                <router-link
                  title=""
                  :to="{
                    name: 'Blog',
                    params: {
                      country,
                      id: rightCateArr[index + 1].id,
                      which: 'cate',
                    },
                  }"
                  v-if="rightCateArr[index + 1]"
                >
                  <div class="pic">
                    <img
                      alt=""
                      class="scale-effect"
                      :src="rightCateArr[index + 1].img_src"
                    />
                  </div>
                  <p>{{ rightCateArr[index + 1].title }}</p>
                </router-link>
              </li>
              <div class="clear"></div>
            </ul>
          </div>
        </div>
      </div>
      <router-link
        :to="{ name: 'More', params: { country, which: 'cate' } }"
        v-if="cate.length > 8"
        class="btn my"
        >more</router-link
      >
    </div>
  </div>
  <!------------------资讯-------------------->
  <div id="h_note">
    <div class="cw1200" v-if="information">
      <div class="title">
        <img alt="" src="./images/title3.jpg" />
      </div>
      <div class="con">
        <ul>
          <li v-for="(item, index) in newInforMation" :key="index">
            <div class="box">
              <div class="pic" v-if="data">
                <router-link
                  :to="{
                    name: 'Blog',
                    params: { country, id: item.id, which: 'information' },
                  }"
                  title=""
                  ><img alt="" class="scale-effect" :src="item.img_src"
                /></router-link>
              </div>
              <div class="cont">
                <a
                  title=""
                  @click="$router.push(`/area/${country}/information`)"
                >
                  <h3>
                    {{ item.title }}
                  </h3>
                </a>
                <p>{{ item.date }}</p>
              </div>
            </div>
          </li>
          <div class="clear"></div>
        </ul>
      </div>

      <router-link
        :to="{ name: 'More', params: { country, which: 'information' } }"
        v-if="information.length > 4"
        class="btn my"
        >more</router-link
      >
    </div>
  </div>
  <div></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["country"],

  // props: {
  //   country: {
  //     type: String,
  //   },
  // },
  data() {
    return {
      newCountry: "",
    };
  },
  computed: {
    ...mapState({
      data: (state) => state.area.data,
      cate: (state) => state.area.data.cate,
      scenic: (state) => state.area.data.scenic,
      information: (state) => state.area.data.information,
    }),
    newScenic() {
      let newScenic = [];
      const { scenic } = this;
      if (scenic.length > 5) {
        newScenic = scenic.slice(0, 5);
        return newScenic;
      } else {
        return scenic;
      }
    },
    leftCateArr() {
      let leftCateArr = [];
      const { cate } = this;
      if (cate) {
        leftCateArr = cate.slice(0, 4);
        return leftCateArr;
      }
    },
    rightCateArr() {
      let rightCateArr = [];
      const { cate } = this;
      if (cate) {
        rightCateArr = cate.slice(4, 8);
      }
      return rightCateArr;
    },
    newInforMation() {
      let newInforMation = [];
      const { information } = this;
      if (information.length > 4) {
        newInforMation = information.slice(0, 4);
        return newInforMation;
      }
      return information;
    },
    newData() {
      let { data } = this;
      return data;
    },
  },
  watch: {
    country: function (newValue) {
      if (newValue) {
        this.newCountry = this.country;
      }
    },
  },
  methods: {
    test() {
      this.a++;
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.$store.dispatch("getCountry", this.country);
    console.log("this.", this.country);
  },
};
</script>
<style>
p {
  margin-bottom: 0;
}
.btn {
  border: 1px solid;
}
.my {
  position: relative;
  left: 47%;
}
</style>
