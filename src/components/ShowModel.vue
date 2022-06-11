<template>
  <div>
    <model-obj src="../../static/model/tree.obj"></model-obj>
  </div>
</template>
<script>
import {
  ModelObj,
  ModelThree,
  ModelFbx,
  ModelCollada,
  ModelStl,
  ModelPly,
  ModelGltf
} from "vue-3d-model";
export default {
  components: {
    ModelObj,
    ModelThree,
    ModelFbx,
    ModelCollada,
    ModelStl,
    ModelPly,
    ModelGltf
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

