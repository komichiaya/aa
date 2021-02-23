<!--  -->
<template>
  <BlogBanner :topBanner="data.topPic" />
  <div id="h_project">
    <div class="cw1200" v-if="newArr">
      <div class="con">
        <ul>
          <li v-for="item in newArr[watchCurrent - 1]" :key="item.id">
            <router-link
              title=""
              :to="{
                name: 'Blog',
                params: { country, id: item.id, which },
              }"
            >
              <img alt="" class="scale-effect" :src="item.img_src" />
              <p>{{ item.title }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-if="data[which]" class="my-div">
    <a-pagination
      v-model:current="current"
      :total="data[which].length"
      :pageSize="pageSize"
      @change="a"
      show-less-items
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BlogBanner from "../components/BlogBanner/BlogBanner.vue";

import { GET_COUNTRYINFO } from "@/store/types";

import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const pageSize = ref(6);
    const current = ref(1);

    const onShowSizeChange = (current, pageSize) => {
      alert(current);
    };

    watch(pageSize, () => {
      console.log("pageSize", pageSize.value);
    });
    watch(current, () => {
      console.log("current..", current.value);
    });
    return {
      pageSize,
      current,
      onShowSizeChange,
    };
  },
  props: {
    country: {
      type: String,
    },
    which: {
      type: String,
    },
  },
  components: {
    BlogBanner,
  },
  data() {
    return {
      watchCurrent: 1,
    };
  },
  computed: {
    ...mapState({
      data: (state) => state.area.data,
    }),
    newArr() {
      if (this.data[this.which]) {
        let arr = this.data[this.which];
        let newArr = [];
        let newArr1 = [];
        arr.forEach((element) => {
          newArr1.push(element);
        });
        console.log("this.", newArr1.length);
        for (let i = 0; (i = Math.ceil(newArr1.length / 6)); i++) {
          newArr.push(newArr1.splice(0, 6));
        }
        return newArr;
      }
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  async mounted() {
    let result = JSON.parse(sessionStorage.getItem("which"));
    console.log("result", result);
    if (result && result.name == this.country) {
      this.$store.commit(GET_COUNTRYINFO, result);
    } else {
      await this.$store.dispatch("getCountry", this.country);
    }
    window.addEventListener("unload", () => {
      //将最新的shopData存入sessionStorage
      sessionStorage.setItem("which", JSON.stringify(this.newArr));
    });
  },
  watch: {
    "$route.params.which": {
      deep: true,
      handler: function (item) {
        console.log("item", item);
      },
    },  
    current(newValue) {
      this.watchCurrent = newValue;
    },
  },
 
  // beforeRouteEnter(to, from, next) {
  //   console.log("to", to.params.which);
  //   next();
  // },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同

  beforeUnmount() {
    sessionStorage.setItem("which", JSON.stringify(this.newArr));
  },
});
</script>
<style scoped lang="css" rel="stylesheet/css">
/* @import url(); 引入css类 */
.my-div {
  position: relative;
  margin-bottom: 100px;
  text-align: center;
}
#h_projec {
  height: 1200px;
}
#h_project .con li:first-child {
  width: 390px;
}
</style>