<template>
  <Header :list="list" />

  <router-view :key="$route.fullPath"></router-view>

  <Footer />
</template>

<script>
/**
 * Vue 中使用 router-link 后，URL 变化但是页面不刷新
 * 这是为了节约资源而采用的组件复用
 * 解决方法：在父组件的 router-view 中加一个 key，例如：
 * <router-view :key="$route.fullPath"></router-view>
 */
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { useStore } from "vuex";
import { computed, defineComponent, onMounted } from "vue";
export default defineComponent({
  name: "app",
  components: {
    Footer,
    Header,
  },
  setup() {
    const store = useStore();
    const list = computed(() => store.state.main.data.topList);
    onMounted(() => {
      store.dispatch("getMain");
    });
    return {
      list,
    };
  },
});
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

} */
</style>
