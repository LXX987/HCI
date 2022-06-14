<template>
  <div>
    <!-- <model-obj
      :backgroundAlpha="0"
        @on-load="onLoad" 
    src="../../static/model/lion/file.obj"
    mtl="../../static/model/lion/file.mtl"></model-obj> -->
      <!-- <model-obj
      :backgroundAlpha="0"
        @on-load="onLoad" 
    src="../../static/model/buffle/buffle.obj"
    mtl="../../static/model/buffle/buffle.mtl"></model-obj> -->
        <model-obj
      :backgroundAlpha="0"
        @on-load="onLoad" 
    src="../../static/model/shishizi/shishizi.obj"
    mtl="../../static/model/shishizi/shishizi.mtl"></model-obj>
  </div>
</template>
<script>
import {
  ModelObj,
} from "vue-3d-model";
export default {
  components: {
    ModelObj,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
  }
};
</script>

<style scoped>
</style>

