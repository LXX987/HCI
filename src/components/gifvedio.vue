<template>
    <div class="demogif" v-if="isDrawing"><img :src="animationUrl.url" alt="" ></div>
</template>
<style scoped>
.demogif {
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}
.demogif img {
    width: 100%;
}
</style>
<script>
export default {
    name:'gifvedio',
    data() {
        return {
      isDrawing:true,
      animationUrl: {url: require('../assets/demo.gif')},
        }
    },
    methods: {
    demo() {
      clearTimeout(this.timer);  //清除延迟执行 
  this.timer = setTimeout(()=>{   //设置延迟执行
    console.log('ok');
    this.isDrawing = false;
    this.$router.push('/view3D');
  },8000);
    }
  },
  mounted() {
      this.demo();
  }
}
</script>
<style scoped>

</style>
