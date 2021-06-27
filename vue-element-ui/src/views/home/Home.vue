<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
import Index from "views/home/childCom/Index.vue";
export default {
  components: {
    Index
  }
};
</script>

<style scoped></style>
