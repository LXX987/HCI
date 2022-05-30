<template>
<div>
  <div id="viewer"></div>
  <div id="taihe" v-show="showTaihe"><!-- 在node25会显示，node26会隐藏 -->
    <el-button  @click="handleTaihe" type="primary" class="drawerButton" >
      太和门
    </el-button>
    <taihe :taiheVisible="taiheVisible" @changeDrawer="changeTaihe"/>
    
    <!-- <test :drawer_="drawer_" :direction="direction"></test> -->
    <!-- <el-drawer title="我是标题" :visible.sync="drawer_" :with-header="false"><span>我来啦!</span></el-drawer> -->
  </div>
  <div id="test2" v-show="showtest2"><!-- 在node25会显示，node26会隐藏 -->
    <el-button  @click="handle" type="primary" class="drawerButton" >
      太和殿
      
    </el-button>
    <Child :childVisible="childVisible" @changeDrawer="changeDrawer" />
    <!-- <test :drawer_="drawer_" :direction="direction"></test> -->
    <!-- <el-drawer title="我是标题" :visible.sync="drawer_" :with-header="false"><span>我来啦!</span></el-drawer> -->
  </div>
  <div id="zhonghedian" v-show="showZhonghe" >
  <el-button type="primary" class="drawerButton" @click="handleZhonghe">
      中和殿
  </el-button>
   <zhonghedian :zhongheVisible="zhongheVisible"  @changeDrawer="changeZhonghe"/> 

  </div>
  <div id="baohedian" v-show="showBaohe" >
  <el-button type="primary" class="drawerButton" @click="handleBaohe">
    保和殿
 </el-button>
  <baohedian :baoheVisible="baoheVisible" @changeDrawer="changeBaohe"/><!--调用保和殿子组件-->
  </div>
  <div id="qianqingmen" v-show="showQianqingmen" >
  <el-button type="primary" class="drawerButton" @click="handleQianqingmen">
    乾清门
</el-button>
<qianqingmen :qianqingmenVisible="qianqingmenVisible" @changeDrawer="changeQianqingmen" />
<!-- <zhonghedian :zhongheVisible="zhongheVisible"  @changeDrawer="changeZhonghe"/>  -->
  </div>
  <div id="qianqinggong" v-show="showQianqinggong" >
  <el-button type="primary" class="drawerButton" @click="handleQianqinggong">
    乾清宫
</el-button>
<qianqinggong :qianqinggongVisible="qianqinggongVisible" @changeDrawer="changeQianqinggong"/>
  </div>
  
  <div id="jiaotai" v-show="showJiaotai" >
  <el-button type="primary" class="drawerButton" @click="handleJiaotai">
    交泰殿
</el-button>
<jiaotai :jiaotaiVisible="jiaotaiVisible" @changeDrawer="changeJiaotai"/>
  </div>
<div id="kunninggong" v-show="showKunninggong" >
  <el-button type="primary" class="drawerButton" @click="handleKunninggong">
    坤宁宫
</el-button>
<kunninggong :kunninggongVisible="kunninggongVisible" @changeDrawer="changeKunninggong"/>
  </div>
  <div id="kunningmen" v-show="showKunningmen" >
  <el-button type="primary" class="drawerButton" @click="handleKunningmen">
    坤宁门
</el-button>
<kunningmen :kunningmenVisible="kunningmenVisible" @changeDrawer="changeKunningmen"/>
  </div>
  <div id="huayuan" v-show="showHuayuan" >
  <el-button type="primary" class="drawerButton" @click="handleHuayuan">
    御花园
</el-button>
<huayuan :huayuanVisible="huayuanVisible" @changeDrawer="changeHuayuan"/>
  </div>
  
  <!-- <div id="test" v-show="showtest">
    <Test></Test>这种是引入组件的方式，引入test组件，然后在node25会显示，node26会自动隐藏
  </div> -->
</div>
</template>
<style scoped>
.drawerButton {
  position: absolute;
  left: 200px;
  height: 200px;
  top: 100px;
  z-index: 999;
}
#test {
    position: absolute;
    left: 200px;
    height: 200px;
    top: 100px;
}
#test2 {
    position: absolute;
    left: 200px;
    height: 200px;
    top: 100px;
}
</style>
<script>
import {Viewer} from "photo-sphere-viewer";
import {MarkersPlugin} from "photo-sphere-viewer/dist/plugins/markers"; //Markers插件
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import "photo-sphere-viewer/dist/plugins/markers.css"; //Markers插件
import Test from './test.vue';
import Child from './child.vue';
import zhonghedian from'./zhonghedian.vue';
import baohedian from'./baohedian.vue';
import qianqingmen from'./qianqingmen.vue';
import qianqinggong from'./qianqinggong.vue';
import jiaotai from'./jiaotai.vue';
import kunninggong from'./kunninggong.vue';
import kunningmen from'./kunningmen.vue';
import huayuan from'./huayuan.vue';
import taihe from'./taihe.vue';
export default {
  name:'view3D',
    components:{ 
        Test,
        Child,
        zhonghedian,
        baohedian,
        qianqingmen,
        qianqinggong,
        jiaotai,
        kunninggong,
        kunningmen,
        huayuan,
        taihe,
        
    },
  data() {
    return {
      childVisible: false, //是否展示抽屉
      zhongheVisible:false,//是否展示抽屉
      baoheVisible:false,
      qianqingmenVisible:false,
      qianqinggongVisible:false,
      jiaotaiVisible: false,
      kunninggongVisible:false,
      kunningmenVisible:false,
      huayuanVisible:false,
      taiheVisible:false,
      showtest: 0,
      showtest2:0,
      showZhonghe:0,
      showBaohe:0,
      showQianqingmen:0,
      showQianqinggong:0,
      showJiaotai:0,
      showKunninggong:0,
      showKunningmen:0,
      showHuayuan:0,
      showTaihe:0,
      viewer: "",
      imgurl1: require("@/assets/pic/node1.jpg"),
      imgurl2: require("@/assets/pic/node2.jpg"),
      imgurl3: require("@/assets/pic/node3.jpg"),
      imgurl4: require("@/assets/pic/node4.jpg"),
      imgurl5: require("@/assets/pic/node5.jpg"),
      imgurl6: require("@/assets/pic/node6.jpg"),
      imgurl7: require("@/assets/pic/node7.jpg"),
      imgurl8: require("@/assets/pic/node8.jpg"),
      imgurl9: require("@/assets/pic/node9.jpg"),
      imgurl10: require("@/assets/pic/node10.jpg"),
      imgurl11: require("@/assets/pic/node11.jpg"),
      imgurl12: require("@/assets/pic/node12.jpg"),
      imgurl13: require("@/assets/pic/node13.jpg"),
      imgurl14: require("@/assets/pic/node14.jpg"),
      imgurl15: require("@/assets/pic/node15.jpg"),
      imgurl16: require("@/assets/pic/node16.jpg"),
      imgurl17: require("@/assets/pic/node17.jpg"),
      imgurl18: require("@/assets/pic/node18.jpg"),
      imgurl19: require("@/assets/pic/node19.jpg"),
      imgurl20: require("@/assets/pic/node20.jpg"),
      imgurl21: require("@/assets/pic/node21.jpg"),
      imgurl22: require("@/assets/pic/node22.jpg"),
      imgurl23: require("@/assets/pic/node23.jpg"),
      imgurl24: require("@/assets/pic/node24.jpg"),
      imgurl25: require("@/assets/pic/node25.jpg"),
      imgurl26: require("@/assets/pic/node26.jpg"),
      imgurl27: require("@/assets/pic/node27.jpg"),
      imgurl28: require("@/assets/pic/node28.jpg"),
      imgurl29: require("@/assets/pic/node29.jpg"),
      imgurl30: require("@/assets/pic/node30.jpg"),
      imgurl31: require("@/assets/pic/node31.jpg"),
      imgurl32: require("@/assets/pic/node32.jpg"),
      imgurl33: require("@/assets/pic/node33.jpg"),
      imgurl34: require("@/assets/pic/node34.jpg"),
      imgurl35: require("@/assets/pic/node35.jpg"),
      imgurl36: require("@/assets/pic/node36.jpg"),
      imgurl37: require("@/assets/pic/node37.jpg"),
      imgurl38: require("@/assets/pic/node38.jpg"),
      imgurl39: require("@/assets/pic/node39.jpg"),
      imgurl40: require("@/assets/pic/node40.jpg"),
      imgurl41: require("@/assets/pic/node41.jpg"),
      imgurl42: require("@/assets/pic/node42.jpg"),
      imgurl43: require("@/assets/pic/node43.jpg"),
      imgurl44: require("@/assets/pic/node44.jpg"),
      imgurl45: require("@/assets/pic/node45.jpg"),
      imgurl46: require("@/assets/pic/node46.jpg"),
      imgurl47: require("@/assets/pic/node47.jpg"),
      imgurl48: require("@/assets/pic/node48.jpg"),
      imgurl49: require("@/assets/pic/node49.jpg"),
      imgurl50: require("@/assets/pic/node50.jpg"),
      imgurl51: require("@/assets/pic/node51.jpg"),
      imgurl52: require("@/assets/pic/node52.jpg"),
      imgurl53: require("@/assets/pic/node53.jpg"),
      imgurl54: require("@/assets/pic/node54.jpg"),
      imgurl55: require("@/assets/pic/node55.jpg"),
      imgurl56: require("@/assets/pic/node56.jpg"),
      imgurl57: require("@/assets/pic/node57.jpg"),
      imgurl58: require("@/assets/pic/node58.jpg"),
      imgurl59: require("@/assets/pic/node59.jpg"),
      imgurl60: require("@/assets/pic/node60.jpg"),
      imgurl61: require("@/assets/pic/node61.jpg"),
      imgurl62: require("@/assets/pic/node62.jpg"),
      imgurl63: require("@/assets/pic/node63.jpg"),
      imgurl64: require("@/assets/pic/node64.jpg"),
      imgurl65: require("@/assets/pic/node65.jpg"),
      imgurl66: require("@/assets/pic/node66.jpg"),
      imgurl67: require("@/assets/pic/node67.jpg"),
      imgurl68: require("@/assets/pic/node68.jpg"),  
      imgurl69: require("@/assets/pic/node69.jpg"),  
      imgurl70: require("@/assets/pic/node70.jpg"),  
      imgurl71: require("@/assets/pic/node71.jpg"),    
    };
  },
  methods: {
    changeDrawer(v) {
      this.childVisible = v
    },
     handle() {
      this.childVisible = true
    },
    handleZhonghe(){
      this.zhongheVisible =true

    },
    changeZhonghe(z){
      this.zhongheVisible =z

    },
    handleTaihe(){//太和门介绍
      this.taiheVisible =true

    },
    changeTaihe(z){
      this.taiheVisible =z

    },
    handleKunningmen(){//坤宁门介绍
      this.kunningmenVisible =true

    },
    changeKunningmen(z){
      this.kunningmenVisible =z

    },
     handleHuayuan(){//御花园介绍
      this.huayuanVisible =true

    },
    changeHuayuan(z){
      this.huayuanVisible =z

    },
    handleKunninggong(){//坤宁宫介绍
      this.kunninggongVisible =true

    },
    changeKunninggong(z){
      this.kunninggongVisible =z

    },
    handleJiaotai(){//交泰殿介绍
      this.jiaotaiVisible =true

    },
    changeJiaotai(z){
      this.jiaotaiVisible =z

    },
    handleQianqinggong(){//乾清宫介绍
      this.qianqinggongVisible =true

    },
    changeQianqinggong(z){
      this.qianqinggongVisible =z

    },
    handleQianqingmen(){//乾清门介绍
      this.qianqingmenVisible=true
    },
    changeQianqingmen(z){
      this.qianqingmenVisible=z
    },
    handleBaohe(){//保和殿介绍
      this.baoheVisible=true
    },
    changeBaohe(b){
      this.baoheVisible=b
    },
  },
  mounted() {
    // this.demo();
    this.viewer = new Viewer({
      container: document.querySelector("#viewer"),
      panorama: this.imgurl63,
      size: {
        width: "100vw",
        height: "100vh",
      },
      autorotateLat: 0,//
      autorotateSpeed:0.20943951023931962,//自转速度
      navbar:[
        "fullscreen",
        "autorotate",
        "move",
        "download",
        "description",
        "caption"
      ], // 下方导航栏
      defaultZoomLvl: 0,//默认缩放
      defaultLong: 0.00,//经度
      defaultLat: 0.0,//维度
      //autorotateDelay:1,//1毫秒后启动自动旋转
      plugins: [
        [
          MarkersPlugin,
          {
            markers: [
              {
                id: "circle63",
                tooltip: "出门",//太和殿内出去
                longitude: -7.8, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle64",
                tooltip: "太和殿内",//太和殿内
                longitude: 0.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
              },
              {
                id: "circle64(1)",
                tooltip: "太和殿大厅",//太和殿内
                longitude: -16.2, //位置
                latitude: -0.40, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle65",
                tooltip: "前进",//太和殿内上皇上的椅子
                longitude: 7.8, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle66",
                tooltip: "左侧进入",//太和殿内上皇上的椅子
                longitude: -1.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                // visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle67",
                tooltip: "右层进入",//太和殿内上皇上的椅子
                longitude: 0.95, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                // visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle68",
                tooltip: "前进",//太和殿内上皇上的椅子
                longitude: -1.3, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle68(1)",
                tooltip: "前进",//太和殿内上皇上的椅子
                longitude: 1.3, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle69",
                tooltip: "前进",//太和殿内上皇上的椅子
                longitude: 0.95, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle16",
                tooltip: "午门",
                longitude: 1.6, //位置
                latitude: 0.06, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              // {
              //   id: "circle16", //标记的唯一标识符
              //   tooltip: "午门", //提示的内容
              //   circle: 15, //直径
              //   svgStyle: {
              //     fill: "rgba(255,255,0,0.3)",
              //     stroke: "#ccc",
              //     strokeWidth: "2px", //边框
              //   },
              //   visible: true, //标记的初始可见性。默认true
              //   longitude: 1.6, //位置
              //   latitude: 0.06, //位置
              //   anchor: "center right",
              //   // content: "9999999999", //点击标记后侧边列表框显示的内容
              //   // image: 'assets/aim.png',
              //   // defaultZoomLvl:-30
              // },
              {
                id: "circle17", //标记的唯一标识符
                tooltip: "17", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.3, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle18", //标记的唯一标识符
                tooltip: "circle18", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
                // id: "circle3",
                // tooltip: "circle3", //提示的内容
                // longitude: -1.9, //位置
                // latitude: -0.28, //位置
                // rect: { width: 100, height: 100 }, //矩形宽高
                // svgStyle: {
                //   fill: "rgba(194,29,18,1)",
                //   cursor: "help",
                // },
                // visible: false,
              },
              {
                id: "circle19", //标记的唯一标识符
                tooltip: "circle19", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
                // id: "circle4",
                // tooltip: "circle4", //提示的内容
                // x: 2058,
                // y: 1069,
                // html: "HTML <b>marker</b> &hearts;",
                // anchor: "bottom right",
                // scale: [0.5, 1.5],
                // style: {
                //   maxWidth: "100px",
                //   color: "white",
                //   fontSize: "20px",
                //   fontFamily: "Helvetica, sans-serif",
                //   textAlign: "center",
                // },
                // visible: false,
              },
              {
                id: "circle20", //标记的唯一标识符
                tooltip: "circle20", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle25", //标记的唯一标识符
                tooltip: "前进", //提示的内容
                longitude: -2.2, //位置
                latitude: 0.00, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle26", //标记的唯一标识符
                tooltip: "进门", //提示的内容
                longitude: 0.2, //位置
                latitude: 0.00, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle27", //标记的唯一标识符
                tooltip: "太和门", //提示的内容
                longitude: 1.9, //位置
                latitude: 0.0, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle28", //标记的唯一标识符
                tooltip: "circle28", //提示的内容
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle29", //标记的唯一标识符
                tooltip: "向左", //提示的内容
                longitude: 2.00, //位置
                latitude: 0.0, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle30", //标记的唯一标识符
                tooltip: "武英殿", //提示的内容
                longitude: -1.6, //位置
                latitude: 0.20, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle31", //标记的唯一标识符
                tooltip: "circle31", //提示的内容
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle32", //标记的唯一标识符
                tooltip: "circle32", //提示的内容
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle33", //标记的唯一标识符
                tooltip: "circle33", //提示的内容
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle34", //标记的唯一标识符
                tooltip: "circle34", //提示的内容
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle35", //标记的唯一标识符
                tooltip: "circle35", //提示的内容
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle36", //标记的唯一标识符
                tooltip: "前进", //提示的内容
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle37", //标记的唯一标识符
                tooltip: "前进", //提示的内容
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle38", //标记的唯一标识符
                tooltip: "进门", //提示的内容
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle39", //标记的唯一标识符
                tooltip: "circle39", //提示的内容
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle40", //标记的唯一标识符
                tooltip: "circle40", //提示的内容
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle41", //标记的唯一标识符
                tooltip: "circle41", //提示的内容
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle42", //标记的唯一标识符
                tooltip: "circle42", //提示的内容
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle43", //标记的唯一标识符
                tooltip: "circle43", //提示的内容
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
            ],
          },
        ],
      ],
    });
    // 初始化之后，可以使用getPlugin方法获得插件实例，从而允许在插件上调用方法并订阅事件
    const markersPlugin = this.viewer.getPlugin(MarkersPlugin);
    // 点击事件监听
    // this.viewer.on('click', (e, data) => {
    //   console.log(`${data.rightclick ? 'right clicked' : 'clicked'} at longitude: ${data.longitude} latitude: ${data.latitude}`);
    // });
    // 监听放大缩小
    // this.viewer.on('zoom-updated', (e,level) => {
    //   console.log(level);
    // });
    // 启用/禁用自动旋转时触发
    this.viewer.on('autorotate', (e,enabled) => {
      // enabled:false没有旋转   true：旋转
      // console.log(enabled);
      // console.log(999);
      if(!enabled){
        setTimeout(() => {
          this.viewer.toggleAutorotate();//开启自动旋转/不旋转 
        }, 5000);
      }
    });
    // 当所有当前动画停止时触发
    // this.viewer.on('stop-all', (e) => {
      // enabled:false没有旋转   true：旋转
      // console.log(enabled);
      // alert(1)
    // });
    // 当视图经度和/或纬度发生变化时触发。
    this.viewer.on('position-updated', (e, position) => {
      // 可以获取到当前的经纬度，可以用于测试时获取经纬度
      // console.log(`new position is longitude: ${position.longitude} latitude: ${position.latitude}`);
    });
    // 监听点击marker
    markersPlugin.on("select-marker", (e, marker) => {
      console.log(marker.id);
      const markerid = marker.id;
 
      this.viewer
      // 动画
        .animate({
          longitude: marker.config.longitude,
          latitude: marker.config.latitude,
          // zoom: 50,
          speed: "5rpm",
        })
        // .then(() =>
        //   this.viewer.setPanorama(this.imgurl2).then(
        //     () =>
        //       markersPlugin.updateMarker({
        //         id: marker.id,
        //         longitude: -1.8,
        //         latitude: -0.28,
        //       }),
 
        //     this.viewer
        //       .animate({
        //         zoom: 50,
        //         speed: "2rpm",
        //       })
        //       .then(
        //         () => (this.imgurl2 = this.imgurl3),
        //         console.log("继续操作")
        //       )
        //   )
        // );
 
        .then(() => {
          // markersPlugin.clearMarkers()//移除所有markers
          // this.viewer.rotate({x: 1500,y: 600,});//改变摄像机的位置
          markersPlugin.hideMarker(marker.id);//隐藏点击的marker
          // this.viewer.defaultZoomLvl=0
          if (markerid == "circle63") {
            
            // setPanorama参数：图片地址、下一个场景的初始经纬度、transition 默认（false）
            this.viewer.setPanorama(this.imgurl63,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              // this.viewer.setPanorama(this.imgurl25).then(() => {
                this.showtest2 = 0;
                this.showTaihe = 1;
                markersPlugin.hideMarker("circle65");
                markersPlugin.showMarker("circle64");//显示你需要显示的marker
                
                
              }
            );
          }
          if (markerid == "circle64") {
            // setPanorama参数：图片地址、下一个场景的初始经纬度、transition 默认（false）
            this.viewer.setPanorama(this.imgurl64,{ longitude: 7.8, latitude: 0.0 }, true).then(() => {
              // this.viewer.setPanorama(this.imgurl25).then(() => {
                this.showBaohe=0;
                this.showZhonghe=0;
                this.showtest2 = 0;
                this.showTaihe = 1;
                this.showQianqingmen=0;
                this.showQianqinggong=0;
                this.showJiaotai=0;
                this.showKunninggong=0;
                this.showKunningmen=0;
                this.showHuayuan=0;
                markersPlugin.showMarker("circle65");//显示你需要显示的marker
                markersPlugin.showMarker("circle63");
                // 
                
              }
            );
          }
          if (markerid == "circle64(1)") {
            // setPanorama参数：图片地址、下一个场景的初始经纬度、transition 默认（false）
            this.viewer.setPanorama(this.imgurl64,{ longitude: 7.8, latitude: 0.0 }, true).then(() => {
              // this.viewer.setPanorama(this.imgurl25).then(() => {
                markersPlugin.showMarker("circle65");//显示你需要显示的marker
                markersPlugin.showMarker("circle63");
                this.showTaihe = 1
              }
            );
          }
          if (markerid == "circle65") {
            // setPanorama参数：图片地址、下一个场景的初始经纬度、transition 默认（false）
            this.viewer.setPanorama(this.imgurl65,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              // this.viewer.setPanorama(this.imgurl25).then(() => {
                markersPlugin.showMarker("circle64(1)");//显示你需要显示的marker
                markersPlugin.hideMarker("circle63");
              }
            );
          }
          if (markerid == "circle66") {
            // setPanorama参数：图片地址、下一个场景的初始经纬度、transition 默认（false）
            this.viewer.setPanorama(this.imgurl66,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              // this.viewer.setPanorama(this.imgurl25).then(() => {
                markersPlugin.showMarker("circle68(1)");//显示你需要显示的marker
                markersPlugin.hideMarker("circle64");
                markersPlugin.hideMarker("circle67");
              }
            );
          }
          if (markerid == "circle67") {
            // setPanorama参数：图片地址、下一个场景的初始经纬度、transition 默认（false）
            this.viewer.setPanorama(this.imgurl67,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              // this.viewer.setPanorama(this.imgurl25).then(() => {
                markersPlugin.showMarker("circle68");//显示你需要显示的marker
                markersPlugin.hideMarker("circle64");
                markersPlugin.hideMarker("circle66");
              }
            );
          }
          if (markerid == "circle68") {
            // setPanorama参数：图片地址、下一个场景的初始经纬度、transition 默认（false）
            this.viewer.setPanorama(this.imgurl68,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              this.showtest2=0;
              this.showtest=0;
              // this.viewer.setPanorama(this.imgurl25).then(() => {
                // markersPlugin.showMarker("circle68");//显示你需要显示的marker
                // markersPlugin.hideMarker("circle64");
                // markersPlugin.hideMarker("circle66");
              }
            );
          }
          if (markerid == "circle68(1)") {
            // setPanorama参数：图片地址、下一个场景的初始经纬度、transition 默认（false）
            this.viewer.setPanorama(this.imgurl68,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              this.showtest2=0;
              this.showtest=0;
              // this.viewer.setPanorama(this.imgurl25).then(() => {
                // markersPlugin.showMarker("circle68");//显示你需要显示的marker
                // markersPlugin.hideMarker("circle64");
                // markersPlugin.hideMarker("circle66");
              }
            );
          }
          if (markerid == "circle16") {
            // setPanorama参数：图片地址、下一个场景的初始经纬度、transition 默认（false）
            this.viewer.setPanorama(this.imgurl25,{ longitude: 16.432589417434965, latitude: 0.07016253709436304 }, true).then(() => {
              // this.viewer.setPanorama(this.imgurl25).then(() => {
                markersPlugin.showMarker("circle25")//显示你需要显示的marker
              }
            );

              console.log(this.viewer.defaultZoomLvl)
          }
          if (markerid == "circle17") {
            this.viewer
              // .setPanorama(this.imgurl18,{ longitude: 6.113027338614143, latitude:-2.914362084993627e-9 }, true)
              .setPanorama(this.imgurl18,{ longitude: 16.432589417434965, latitude: 0.07016253709436304 }, true)
              .then(() => markersPlugin.showMarker("circle18"));
          }
          if (markerid == "circle18") {
            this.viewer
              .setPanorama(this.imgurl19,{ longitude: 16.432589417434965, latitude: 0.07016253709436304 }, true)
              .then(() => markersPlugin.showMarker("circle19"));
              
          }
          if (markerid == "circle19") {
            
            this.viewer.setPanorama(this.imgurl20)
            .then(() => markersPlugin.showMarker("circle20"));
          }
          if (markerid == "circle25") {
            this.viewer.setPanorama(this.imgurl26,{ longitude: 18.432589417434965, latitude: 0.07016253709436304 }, true)
            .then(() => markersPlugin.showMarker("circle26"));
            this.showTaihe = 1;
          }
          if (markerid == "circle26") {
            this.showTaihe = 1;
            this.viewer.setPanorama(this.imgurl27,{ longitude: 14.432589417434965, latitude: 0.07016253709436304 }, true)
            .then(() => markersPlugin.showMarker("circle27"));
          }
          if (markerid == "circle27") {
            this.viewer.setPanorama(this.imgurl29,{ longitude: -16.432589417434965, latitude: 0.07016253709436304 }, true)
            .then(() => markersPlugin.showMarker("circle29"));
            this.showtest = 1
          }
          if (markerid == "circle29") {
            this.viewer.setPanorama(this.imgurl30,{ longitude: 5.432589417434965, latitude: 0.07016253709436304 }, true)
            .then(() => markersPlugin.showMarker("circle30"));
          }
          if (markerid == "circle30") {
            this.showTaihe = 1;
            console.log("show");
            this.viewer.setPanorama(this.imgurl36)
            .then(() => markersPlugin.showMarker("circle36"));
          }
          if (markerid == "circle36") {
            this.showTaihe = 0;
            this.viewer.setPanorama(this.imgurl37)
            .then(() => markersPlugin.showMarker("circle37"));
          }
          if (markerid == "circle37") {
            this.viewer.setPanorama(this.imgurl38)
            .then(() => markersPlugin.showMarker("circle38"));
          }
          if (markerid == "circle38") {
            this.viewer.setPanorama(this.imgurl39)
            .then(() => markersPlugin.showMarker("circle39"));
          }
          if (markerid == "circle39") {
            this.viewer.setPanorama(this.imgurl40)
            .then(() => markersPlugin.showMarker("circle40"));
          }
          if (markerid == "circle40") {
            this.viewer.setPanorama(this.imgurl52)
            .then(() => markersPlugin.showMarker("circle52"));
          }
          this.viewer.zoom(0)//改变缩放
          // this.viewer.setOption('defaultLong',100);
          // this.viewer.setOption('defaultLat',100);
          // this.viewer.toggleAutorotate();//开启自动旋转/不旋转 
        });
    });
  },
};
// setPanorama(新全景图文件的网址) :加载新的全景文件,参数
// new position is longitude: 6.232589417434965 latitude: 0.07016253709436304
</script>