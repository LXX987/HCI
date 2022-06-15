<template>
<div class="body">
  <div class="backbutton" @click="back">返回</div>
  <div class="show3Dmodel">
    <div class="model">
<model-obj style="width:100%;height:100%;" src="../../static/model/buffle.obj"></model-obj>
  </div>
  </div>
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
  mounted() {
    
  },
      beforeRouteLeave(to,from,next){
      to.meta.keepAlive = true
      next(0)
    },

  methods: {
    back() {
      this.$router.push('/view3D');
    }
  }
};
</script>

<style scoped>
.backbutton {
  background: url('../assets/prebcak.png') no-repeat;
  background-size: 100% 100%;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 170px;
  top: 80px;
  z-index: 999;
  font-family: cursive;
}
.backbutton:hover {
  background: url('../assets/afterback.png') no-repeat;
  background-size: 100% 100%;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 170px;
  top: 80px;
  z-index: 999;
  font-family: cursive;
}
.body {
  background: url('../assets/jumpbackground.png') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 609px;
}
.model {
  width:39%;
  height: 39%;
  margin-left: 50px;
  margin-top: 170px;
  z-index: 998;
}
.show3Dmodel {
  position: absolute;
  top: 40px;
  left: 10%;
  width: 80%;
  height: 500px;
  z-index: 998;
  background: url('../assets/lionIntro.jpg') no-repeat;
  background-size: 100% 100%;
}
</style>

