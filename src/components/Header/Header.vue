<!--  -->
<template>
  <header>
    <div class="container">
      <nav class="py-md-4 py-3 d-lg-flex">
        <div id="logo">
          <h1 class="mt-md-0 mt-2">
            <router-link :to="`/area/${title.name}`" v-if="title"
              ><span class="fa fa-map-signs"></span> {{ title.CN_Name }}站
            </router-link>
            <router-link to="/index" v-else
              ><span class="fa fa-map-signs"></span>
              XX旅游
            </router-link>
          </h1>
        </div>
        <label for="drop" class="toggle"
          ><span class="fa fa-bars"></span
        ></label>
        <input type="checkbox" id="drop" />
        <ul class="menu ml-auto mt-1" v-if="isShow">
          <li class="active" v-for="item in list" :key="item.id">
            <router-link v-if="item.name === 'index'" :to="`/${item.name}`">{{
              item.CN_Name
            }}</router-link>
            <router-link v-else :to="`/area/${item.name}`">{{
              item.CN_Name
            }}</router-link>
          </li>
        </ul>
        <ul class="menu ml-auto mt-1" v-else>
          <li class="active">
            <i class="back" @click="$router.back()">返回</i>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {
      newParams: {},
      newList: [],
    };
  },
  computed: {
    isShow() {
      const { country, id } = this.newParams;
      return country && id ? false : true;
    },
    title() {
      const { country } = this.newParams;
      const newList = this;
      if (country && newList.list) {
        let result = newList.list.find((item) => item.name == country);
        return result;
      }
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  watch: {
    "$route.params": function (newV) {
      this.newParams = newV;
    },
    list: function (newV) {
      this.newList = newV;
      // this.newList = Array.from(newV);
    },
  },
};
</script>
<style scoped lang="css" rel="stylesheet/css">
/* @import url(); 引入css类 */
.back {
  cursor: pointer;
  color: #fff;
  font-style: normal;
}
</style>