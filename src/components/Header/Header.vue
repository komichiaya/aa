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
import { computed, defineComponent, watch, toRefs, reactive, ref } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  props: {
    list: {
      type: Array,
    },
  },
  setup(props) {
    const route = useRoute();
    const { list } = toRefs(props);
    const newParams = ref({});
    const newList = ref([]);

    const isShow = computed(() => {
      const { country, id } = newParams.value;
      return country && id ? false : true;
    });
    watch(
      () => route.params,
      (newValue) => {
        newParams.value = newValue;
      }
    );
    watch(list, (newV) => {
      newList.value = newV.value;
    });
    const title = computed(() => {
      const { country } = newParams.value;
      if (country && newList.list) {
        let result = newList.list.find((item) => item.name == country);
        return result;
      }
    });

    return reactive({
      newParams,
      newList,
      isShow,
      title,
    });
  },
});
</script>
<style scoped lang="css" rel="stylesheet/css">
/* @import url(); 引入css类 */
.back {
  cursor: pointer;
  color: #fff;
  font-style: normal;
}
</style>