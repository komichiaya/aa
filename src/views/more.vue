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
      show-less-items
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import BlogBanner from "../components/BlogBanner/BlogBanner.vue";

import { GET_COUNTRYINFO } from "@/store/types";

import {
  defineComponent,
  ref,
  reactive,
  computed,
  onMounted,
  watch,
  onBeforeUnmount,
  toRefs,
} from "vue";

export default defineComponent({
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
  setup(props) {
    const store = useStore();
    const { country, which } = toRefs(props);
    const watchCurrent = ref(1);
    const pageSize = ref(6);
    const current = ref(1);
    const data = computed(() => store.state.area.data);
    const newArr = computed(() => {
      if (data.value[which.value]) {
        let arr = data.value[which.value];
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
    });
    watch(current, (newValue) => {
      watchCurrent.value = newValue;
    });
    onMounted(async () => {
      let result = JSON.parse(sessionStorage.getItem("which"));
      console.log("result", result);
      if (result && result.name == country.value) {
        store.commit(GET_COUNTRYINFO, result);
      } else {
        await store.dispatch("getCountry", country.value);
      }
      window.addEventListener("unload", () => {
        //将最新的shopData存入sessionStorage
        sessionStorage.setItem("which", JSON.stringify(newArr.value));
      });
    });
    onBeforeUnmount(() => {
      sessionStorage.setItem("which", JSON.stringify(newArr.value));
    });
    return reactive({
      pageSize,
      current,
      watchCurrent,
      data,
      newArr,
    });
  },
});
</script>
<style scoped lang="css" rel="stylesheet/css">
/* @import url(); 引入css类 */
p {
  margin-bottom: 0;
}
ul li img {
  object-fit: cover;
}
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