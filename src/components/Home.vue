<!-- 全景看图 -->
<template>
    <div class="PSViewer" ref="origin"></div>
</template>

<script>
import photoSphereViewer from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'

export default {
  data() {
    return {
      img16:require('@/assets/pic/node16.jpg'),
      img17:require('@/assets/pic/node17.jpg'),
      img18:require('@/assets/pic/node18.jpg'),
      img19:require('@/assets/pic/node19.jpg'),
      img20:require('@/assets/pic/node20.jpg'),
      img21:require('@/assets/pic/node21.jpg'),
      img22:require('@/assets/pic/node22.jpg'),
      img23:require('@/assets/pic/node23.jpg'),
      img24:require('@/assets/pic/node24.jpg'),
      img25:require('@/assets/pic/node25.jpg')
    };
  },
  mounted(){
    this.init()
  },
  methods: {
    init(){
      const self =this;
      var PSV = new photoSphereViewer({
        panorama: self.img16, // 图片路径
        container: self.$refs.origin, // 容器
        time_anim: false, //自动播放
        navbar: ["fullscreen","autorotate"], // 下方导航栏
        zoom_level: 100, //缩放界别，默认值为0，范围0-100
        default_fov: 100,
        navbar_style: {
          backgroundColor: "rgba(58,67,77,0.7)"
        },
        anim_speed: "0.6rpm", // 旋转速度
        size: {
          width:"100%",
          height:"800"
        }
      })
    },
    duanmeng(){
      const self =this;
      var PSV = new photoSphereViewer({
        panorama:self.img17, // 图片路径
        container: self.$refs.duanmeng1, // 容器
        time_anim:true, //自动播放
        navbar:["fullscreen","autorotate"], // 下方导航栏
        zoom_level:100, //缩放界别，默认值为0，范围0-100
        default_fov:100,
        navbar_style:{
          backgroundColor:"rgba(58,67,77,0.7)"
        },
        anim_speed:"0.6rpm", // 旋转速度
        size:{
          width:"100%",
          height:"800"
        }
      })
    }
  }
}
</script>
<style scoped>

</style>
