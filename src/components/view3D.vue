<template>
<div>
  <div id="viewer"></div>
  <div id="taihe" v-show="showTaihe"><!-- 在node25会显示，node26会隐藏 -->
    <el-button  @click="handle" type="primary" id="drawerButtonTAIHEDIAN" class="drawerButton" > 
    </el-button>
    <Child :childVisible="childVisible" @changeDrawer="changeDrawer" />
    <el-tooltip class="item" effect="dark" content="播放太和殿语音提示" placement="top">
        <el-button @click="handlePlay('audio')" type="primary" id="startMusic" class="startMusicButton"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="暂停太和殿语音提示" placement="top">
        <el-button @click="stopPlay('audio')" type="primary" id="stopMusic" class="stopMusicButton"></el-button>
      </el-tooltip>
      <audio id="audio" src="../../static/语音资料/太和殿.mp3" hidden></audio>
    <!-- <taihe :taiheVisible="taiheVisible" @changeDrawer="changeTaihe"/> -->
    
    <!-- <test :drawer_="drawer_" :direction="direction"></test> -->
    <!-- <el-drawer title="我是标题" :visible.sync="drawer_" :with-header="false"><span>我来啦!</span></el-drawer> -->
  </div>
  <div id="test2" v-show="showtest2"><!-- 在node25会显示，node26会隐藏 -->
    <el-button  @click="handle" type="primary" id="drawerButtonTAIHEMENG" class="drawerButton" > 
    </el-button>
    <Child :childVisible="childVisible" @changeDrawer="changeDrawer" />
    <!-- <TAIHEDIAN style="z-index:999"></TAIHEDIAN> -->
    <!-- <test :drawer_="drawer_" :direction="direction"></test> -->
    <!-- <el-drawer title="我是标题" :visible.sync="drawer_" :with-header="false"><span>我来啦!</span></el-drawer> -->
  </div>
  <div id="zhonghedian" v-show="showZhonghe" >
  <el-button type="primary" class="drawerButton" id="drawerButtonZHONGHEDIAN" @click="handleZhonghe">
  </el-button>
   <zhonghedian :zhongheVisible="zhongheVisible"  @changeDrawer="changeZhonghe"/> 
   <el-tooltip class="item" effect="dark" content="播放中和殿语音讲解" placement="top">
        <el-button @click="handlePlay('audioTaihe')" type="primary" id="startMusic" class="startMusicButton"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="暂停中和殿语音讲解" placement="top">
        <el-button @click="stopPlay('audioTaihe')" type="primary" id="stopMusic" class="stopMusicButton"></el-button>
      </el-tooltip>
      <audio id="audioTaihe" src="../../static/语音资料/中和殿.mp3" hidden></audio>

  </div>
  <div id="baohedian" v-show="showBaohe" >
  <el-button type="primary" class="drawerButton" id="drawerButtonBAOHEDIAN" @click="handleBaohe">
 </el-button>
  <baohedian :baoheVisible="baoheVisible" @changeDrawer="changeBaohe"/><!--调用保和殿子组件-->
  <el-tooltip class="item" effect="dark" content="播放保和殿语音讲解" placement="top">
        <el-button @click="handlePlay('audioBaohe')" type="primary" id="startMusic" class="startMusicButton"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="暂停保和殿语音讲解" placement="top">
        <el-button @click="stopPlay('audioBaohe')" type="primary" id="stopMusic" class="stopMusicButton"></el-button>
      </el-tooltip>
      <audio id="audioBaohe" src="../../static/语音资料/保和殿.mp3" hidden></audio>
  </div>

  <div id="qianqingmen" v-show="showQianqingmen" >
  <el-button type="primary" class="drawerButton" id="drawerButtonQIANQINMENG" @click="handleQianqingmen">
</el-button>
<qianqingmen :qianqingmenVisible="qianqingmenVisible" @changeDrawer="changeQianqingmen" />
<!-- <zhonghedian :zhongheVisible="zhongheVisible"  @changeDrawer="changeZhonghe"/>  -->
  </div>
  <div id="qianqinggong" v-show="showQianqinggong" >
  <el-button type="primary" class="drawerButton" id="drawerButtonQIANQINGONG" @click="handleQianqinggong">
</el-button>
<el-tooltip class="item" effect="dark" content="播放乾清宫语音讲解" placement="top">
        <el-button @click="handlePlay('audioqianqing')" type="primary" id="startMusic" class="startMusicButton"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="暂停乾清宫语音讲解" placement="top">
        <el-button @click="stopPlay('audioqianqing')" type="primary" id="stopMusic" class="stopMusicButton"></el-button>
      </el-tooltip>
      <audio id="audioqianqing" src="../../static/语音资料/乾清宫.mp3" hidden></audio>
<qianqinggong :qianqinggongVisible="qianqinggongVisible" @changeDrawer="changeQianqinggong"/>
  </div>
  
  <div id="jiaotai" v-show="showJiaotai" >
  <el-button type="primary" class="drawerButton" id="drawerButtonJIAOTAIDIAN" @click="handleJiaotai">
</el-button>
<jiaotai :jiaotaiVisible="jiaotaiVisible" @changeDrawer="changeJiaotai"/>
<el-tooltip class="item" effect="dark" content="播放交泰殿语音讲解" placement="top">
        <el-button @click="handlePlay('audiojiaotai')" type="primary" id="startMusic" class="startMusicButton"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="暂停交泰殿语音讲解" placement="top">
        <el-button @click="stopPlay('audiojiaotai')" type="primary" id="stopMusic" class="stopMusicButton"></el-button>
      </el-tooltip>
      <audio id="audiojiaotai" src="../../static/语音资料/交泰殿.mp3" hidden></audio>
  </div>
<div id="kunninggong" v-show="showKunninggong" >
  <el-button type="primary" class="drawerButton" id="drawerButtonKUNNINGGONG" @click="handleKunninggong">
</el-button>
<kunninggong :kunninggongVisible="kunninggongVisible" @changeDrawer="changeKunninggong"/>
<el-tooltip class="item" effect="dark" content="播放坤宁宫语音讲解" placement="top">
        <el-button @click="handlePlay('audiokunning')" type="primary" id="startMusic" class="startMusicButton"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="暂停坤宁宫语音讲解" placement="top">
        <el-button @click="stopPlay('audiokunning')" type="primary" id="stopMusic" class="stopMusicButton"></el-button>
      </el-tooltip>
      <audio id="audiokunning" src="../../static/语音资料/坤宁宫.mp3" hidden></audio>
  </div>
  <div id="kunningmen" v-show="showKunningmen" >
  <el-button type="primary" class="drawerButton" id="drawerButtonKUNNINGMENG" @click="handleKunningmen">
</el-button>
<kunningmen :kunningmenVisible="kunningmenVisible" @changeDrawer="changeKunningmen"/>
  </div>
  <div id="huayuan" v-show="showHuayuan" >
  <el-button type="primary" class="drawerButton" id="drawerButtonYUHUAYUAN" @click="handleHuayuan">
</el-button>
<el-tooltip class="item" effect="dark" content="播放御花园语音讲解" placement="top">
        <el-button @click="handlePlay('audioyuhuayuan')" type="primary" id="startMusic" class="startMusicButton"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="暂停御花园语音讲解" placement="top">
        <el-button @click="stopPlay('audioyuhuayuan')" type="primary" id="stopMusic" class="stopMusicButton"></el-button>
      </el-tooltip>
      <audio id="audioyuhuayuan" src="../../static/语音资料/御花园.mp3" hidden></audio>
<huayuan :huayuanVisible="huayuanVisible" @changeDrawer="changeHuayuan"/>

  </div>
  <div class="endBox" v-show="showEnd" @click="restart">
  </div>
  <!-- <div id="test" v-show="showtest">
    <Test></Test>这种是引入组件的方式，引入test组件，然后在node25会显示，node26会自动隐藏
  </div> -->
</div>
</template>
<style scoped>
.endBox {
  width: 258.4px;
  height: 100.4px;
  position: absolute;
  left: 680px;
  top: 500px;
  background: url('../assets/GameEnd.png') no-repeat;
  background-size: 100% 100%;
  z-index: 999;
}
.endBox:hover {
  width: 258.4px;
  height: 100.4px;
  position: absolute;
  left: 680px;
  top: 500px;
  background: url('../assets/gameendHover.png') no-repeat;
  background-size: 100% 100%;
  z-index: 999;
}
.el-button--primary {
    border-color: #fbfbfb00;
}
#drawerButtonYUHUAYUAN {
  background: url("../assets/YUHUAYUAN.png") no-repeat;
  background-size: 100% 100%;
}
#drawerButtonKUNNINGMENG {
  background: url("../assets/KUNNINGMENG.png") no-repeat;
  background-size: 100% 100%;
}
#drawerButtonKUNNINGGONG {
  background: url("../assets/KUNNINGGONG.png") no-repeat;
  background-size: 100% 100%;
}
#drawerButtonJIAOTAIDIAN {
  background: url("../assets/JIAOTAIDIAN.png") no-repeat;
  background-size: 100% 100%;
}
#drawerButtonQIANQINGONG {
  background: url("../assets/QIANQINGONG.png") no-repeat;
  background-size: 100% 100%;
}
#drawerButtonQIANQINMENG {
  background: url("../assets/QIANQINMENG.png") no-repeat;
  background-size: 100% 100%;
}
#drawerButtonBAOHEDIAN {
  background: url("../assets/BAOHEDIAN.png") no-repeat;
  background-size: 100% 100%;
}
#drawerButtonZHONGHEDIAN {
  background: url("../assets/ZHONGHEDIAN.png") no-repeat;
  background-size: 100% 100%;
}
#drawerButtonTAIHEDIAN {
  background: url("../assets/TAIHEDIANintro.png") no-repeat;
  background-size: 100% 100%;
}
#drawerButtonTAIHEMENG {
  background: url("../assets/TAIHEMENGintro.png") no-repeat;
  background-size: 100% 100%;
}

#startMusic {
  background: url("../assets/music.png") no-repeat;
  background-size: 100% 100%;
}

#stopMusic {
  background: url("../assets/music.png") no-repeat;
  background-size: 100% 100%;
}

.drawerButton {
  position: absolute;
  /* left: 1255px; */
  height: 103px;
  width: 145px;
  /* top: 530px; */
  right: 0px;
  bottom: 10px;
  z-index: 999;
}
.startMusicButton {
  position: absolute;
  height: auto;
  width: auto;
  right: 230px;
  bottom: 50px;
  z-index: 999;
}
.stopMusicButton {
  position: absolute;
  height: auto;
  width: auto;
  right: 140px;
  bottom: 50px;
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
import TAIHEDIAN from './TAIHEDIAN.vue'
import CReel from './CReel'

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
        TAIHEDIAN
    },
  data() {
    return {
      showEnd: 0,
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
      imgurl33: require("@/assets/pic/node33.jpg"),
      imgurl34: require("@/assets/pic/node34.jpg"),
      imgurl57: require("@/assets/pic/node57.jpg"),
      imgurl62: require("@/assets/pic/node62.jpg"),
      imgurl63: require("@/assets/pic/node63.jpg"),
      imgurl64: require("@/assets/pic/node64.jpg"),
      imgurl65: require("@/assets/pic/node65.jpg"),
      imgurl66: require("@/assets/pic/node66.jpg"),
      imgurl67: require("@/assets/pic/node67.jpg"),
      imgurl68: require("@/assets/pic/node68.jpg"),
      imgurl69: require("@/assets/pic/node69.jpg"),
      imgurl70: require("@/assets/pic/node70.jpg"),
      imgurl71: require("@/assets/pic/node71.jpg"),//
      imgurl72: require("@/assets/pic/node72.jpg"),
      imgurl73: require("@/assets/pic/node73.jpg"),
      imgurl74: require("@/assets/pic/node74.jpg"),
      imgurl75: require("@/assets/pic/node75.jpg"),
      imgurl76: require("@/assets/pic/node76.jpg"),
      imgurl77: require("@/assets/pic/node77.jpg"),//
      imgurl78: require("@/assets/pic/node78.jpg"),
      imgurl79: require("@/assets/pic/node79.jpg"),
      imgurl81: require("@/assets/pic/node81.jpg"),
      imgurl82: require("@/assets/pic/node82.jpg"),
      imgurl85: require("@/assets/pic/node85.jpg"),
      imgurl88: require("@/assets/pic/node88.jpg"),
      imgurl89: require("@/assets/pic/node89.jpg"),
      imgurl92: require("@/assets/pic/node92.jpg"),
      imgurl91: require("@/assets/pic/node91.jpg"),
      imgurl96: require("@/assets/pic/node96.jpg"),
      imgurl98: require("@/assets/pic/node98.jpg"),
      imgurl100: require("@/assets/pic/node100.jpg"),
      imgurl101: require("@/assets/pic/node101.jpg"),
      imgurl103: require("@/assets/pic/node103.jpg"),
      imgurl104: require("@/assets/pic/node104.jpg"),
      imgurl107: require("@/assets/pic/node107.jpg"),
      imgurl110: require("@/assets/pic/node110.jpg"),
      imgurl111: require("@/assets/pic/node111.jpg"),
    };
  },
  methods: {
    restart() {
      //刷新页面
      this.$router.replace({
        path: '/supplierAllBack',
        name: 'supplierAllBack'
      })
    },
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
     handlePlay(id) {
      document.getElementById(id).play()
    },
    stopPlay(id) {
      document.getElementById(id).pause()
    },
  },
  mounted() {
    // this.demo();
    this.viewer = new Viewer({
      container: document.querySelector("#viewer"),
      panorama: this.imgurl33,
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
      defaultLong: 3.00,//经度
      defaultLat: 0.0,//维度
      //autorotateDelay:1,//1毫秒后启动自动旋转
      plugins: [
        [
          MarkersPlugin,
          {
            markers: [
              {
                id: "lion3D",
                tooltip: "石狮",//太和殿内出去
                longitude: -3.8, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/06/15/p17eT.png',
                width: 32,
                height: 32,
                // visible: false, //标记的初始可见性。默认true
              },
              {
                id:"ding3D",
                tooltip:"铜鼎",//太和殿出去
                longitude: -10,//精度
                latitude: 0.00,//位置
                image: 'https://img1.imgtp.com/2022/06/16/03mJR57Y.png',
                width:32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id:"tonghe3D",
                tooltip:"铜鹤",//太和殿出去
                longitude: -14.4,//精度
                latitude: 0.00,//位置
                image: 'https://img1.imgtp.com/2022/06/16/LxNLb6ee.png',
                width:32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },  
              {
                id: "circle34",
                tooltip: "出门",//太和殿内出去
                longitude: -4.3, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                // visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle57",
                tooltip: "进入广场",//太和殿内出去
                longitude: -6.3, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle62",
                tooltip: "靠近太和殿",//太和殿内出去
                longitude: 6.8, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle63",
                tooltip: "走上台阶",//太和殿内出去
                longitude: 0.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle64",
                tooltip: "进入太和殿",//太和殿内
                longitude: 0.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle64(1)",
                tooltip: "circle64(1)",//太和殿内
                longitude: -16.2, //位置
                latitude: -0.40, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle65",
                tooltip: "靠近查看",//太和殿内前进
                longitude: 7.8, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle66",
                tooltip: "离开太和殿",//
                longitude: -1.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle67",
                tooltip: "circle67",//
                longitude: 0.95, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle68",
                tooltip: "向中和殿前进",//
                longitude: 1.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle68(1)",
                tooltip: "circle68(1)",//
                longitude: 0.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle69",
                tooltip: "进入中和殿",//进入中和殿
                longitude: 0.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle70",
                tooltip: "靠近查看",//中和殿内前进
                longitude: 0.95, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle71",
                tooltip: "circle71",//出中和殿，到中和殿后面
                longitude: 0.95, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle72",
                tooltip: "离开中和殿",//
                longitude: 0.60, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle73",
                tooltip: "circle73",//中和殿内前进
                longitude: 0.95, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle74",
                tooltip: "circle74",//中和殿内前进
                longitude: 0.95, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle75",
                tooltip: "circle75",//中和殿内前进
                longitude: 0.95, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle76",
                tooltip: "circle76",//中和殿内前进
                longitude: 0.95, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle77",
                tooltip: "靠近保和殿",//中和殿内前进
                longitude: 0.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle78",
                tooltip: "进入保和殿",//中和殿内前进
                longitude: 0.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle79",
                tooltip: "circle79",//中和殿内前进
                longitude: 0.95, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle81",
                tooltip: "离开保和殿",//中和殿内前进
                longitude: -0.2, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle82",
                tooltip: "前往乾清门",//中和殿内前进
                longitude: -0.4, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle85",
                tooltip: "进入乾清门",//中和殿内前进
                longitude: 0.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle88",
                tooltip: "靠近乾清宫",//中和殿内前进
                longitude: 0.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle89",
                tooltip: "到乾清宫侧面",//中和殿内前进
                longitude: -0.95, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle92",
                tooltip: "穿过乾清宫",//中和殿内前进
                longitude: 0.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle91",
                tooltip: "靠近交泰殿",//中和殿内前进
                longitude: 0.95, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle96",
                tooltip: "绕过交泰殿",//中和殿内前进
                longitude: 0.2, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle98",
                tooltip: "靠近坤宁宫",//中和殿内前进
                longitude: -0.6, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle100",
                tooltip: "绕过坤宁宫",//中和殿内前进
                longitude: 0.95, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle101",
                tooltip: "前往御花园",//中和殿内前进
                longitude: 0.95, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle103",
                tooltip: "前往御花园",//中和殿内前进
                longitude: 0.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle104",
                tooltip: "下台阶",//中和殿内前进
                longitude: 0.6, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle107",
                tooltip: "到御花园门口",//中和殿内前进
                longitude: 0.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle110",
                tooltip: "进入御花园",//中和殿内前进
                longitude: 0.0, //位置
                latitude: 0.00, //位置  
                image: 'https://s1.328888.xyz/2022/05/12/qQgu0.png',
                width: 32,
                height: 32,
                visible: false, //标记的初始可见性。默认true
              },
              {
                id: "circle111",
                tooltip: "结束参观",//中和殿内前进
                longitude: 0.0, //位置
                latitude: 0.00, //位置  
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
        .then(() => {
          // markersPlugin.clearMarkers()//移除所有markers
          // this.viewer.rotate({x: 1500,y: 600,});//改变摄像机的位置
          markersPlugin.hideMarker(marker.id);//隐藏点击的marker
          // this.viewer.defaultZoomLvl=0
          if (markerid == "lion3D") {
              this.$router.push('/ShowModel')
          }
          if(markerid == "ding3D") {
              this.$router.push('/ding3D')
          }
          if(markerid == "tonghe3D"){
            this.$router.push('/tonghe3D')
          }
          if (markerid == "circle34") {
            // setPanorama参数：图片地址、下一个场景的初始经纬度、transition 默认（false）
            this.viewer.setPanorama(this.imgurl34,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle57");
              markersPlugin.hideMarker("lion3D");
              this.show3D = 0;
              }
            );
          }
          if (markerid == "circle57") {
            this.viewer.setPanorama(this.imgurl57,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle62");
              }
            );
          }
          if (markerid == "circle62") {
            this.viewer.setPanorama(this.imgurl62,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle63");
              }
            );
          }
          if (markerid == "circle63") {
            this.viewer.setPanorama(this.imgurl63,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
                this.showTaihe = 0;
                markersPlugin.showMarker("circle64");
                markersPlugin.showMarker("tonghe3D");
                markersPlugin.showMarker("ding3D");
                markersPlugin.hideMarker("circle65");
              }
            );
          }
          if (markerid == "circle64") {
            this.viewer.setPanorama(this.imgurl64,{ longitude: 7.8, latitude: 0.0 }, true).then(() => {
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
                markersPlugin.hideMarker("ding3D");
                markersPlugin.hideMarker("tonghe3D");
              }
            );
          }
          if (markerid == "circle64(1)") {
            this.viewer.setPanorama(this.imgurl64,{ longitude: 7.8, latitude: 0.0 }, true).then(() => {
                markersPlugin.showMarker("circle65");//显示你需要显示的marker
                markersPlugin.showMarker("circle63");
                this.showTaihe = 1
              }
            );
          }
          if (markerid == "circle65") {
            this.viewer.setPanorama(this.imgurl65,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
                markersPlugin.showMarker("circle64(1)");//显示你需要显示的marker
                markersPlugin.showMarker("circle66");//显示你需要显示的marker
                markersPlugin.hideMarker("circle63");
              }
            );
          }
          if (markerid == "circle66") {
            this.viewer.setPanorama(this.imgurl66,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
                this.showTaihe = 0
                markersPlugin.hideMarker("circle64");
                markersPlugin.hideMarker("circle67");
                markersPlugin.showMarker("circle68");//显示你需要显示的marker
                markersPlugin.showMarker("circle68");//显示你需要显示的marker
              }
            );
          }
          if (markerid == "circle67") {
            this.viewer.setPanorama(this.imgurl67,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
                markersPlugin.showMarker("circle68");//显示你需要显示的marker
                markersPlugin.hideMarker("circle64");
                markersPlugin.hideMarker("circle66");
              }
            );
          }
          if (markerid == "circle68") {
            this.viewer.setPanorama(this.imgurl68,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              this.showtest2=0;
              this.showtest=0;
              markersPlugin.showMarker("circle69");
              }
            );
          }
          if (markerid == "circle68(1)") {
            this.viewer.setPanorama(this.imgurl68,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              this.showtest2=0;
              this.showtest=0;
              markersPlugin.showMarker("circle69");
              markersPlugin.showMarker("circle72");
              }
            );
          }
          if (markerid == "circle69") {
            this.viewer.setPanorama(this.imgurl69,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle70");
              this.showZhonghe =1;
              }
            );
          }
          if (markerid == "circle70") {
            this.viewer.setPanorama(this.imgurl70,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle72");
              }
            );
          }
          if (markerid == "circle71") {
            this.viewer.setPanorama(this.imgurl71,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle72");
              }
            );
          }
          if (markerid == "circle72") {
            this.viewer.setPanorama(this.imgurl72,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle77");
              markersPlugin.hideMarker("circle69");
              this.showZhonghe =0;
              }
            );
          }
          if (markerid == "circle73") {
            this.viewer.setPanorama(this.imgurl73,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle74");
              }
            );
          }
          if (markerid == "circle74") {
            this.viewer.setPanorama(this.imgurl74,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle75");
              }
            );
          }
          if (markerid == "circle75") {
            this.viewer.setPanorama(this.imgurl75,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle76");
              }
            );
          }
          if (markerid == "circle76") {
            this.viewer.setPanorama(this.imgurl76,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.hideMarker("circle78");
              markersPlugin.showMarker("circle81");
              }
            );
          }
          if (markerid == "circle77") {
            this.viewer.setPanorama(this.imgurl77,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle78");
              }
            );
          }
          if (markerid == "circle78") {
            this.viewer.setPanorama(this.imgurl78,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              
              markersPlugin.showMarker("circle81");
              this.showBaohe = 1;
              }
            );
          }
          if (markerid == "circle79") {
            this.viewer.setPanorama(this.imgurl79,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle78");
              }
            );
          }
          if (markerid == "circle81") {
            this.viewer.setPanorama(this.imgurl81,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle82");
              this.showBaohe = 0;
              }
            );
          }
          if (markerid == "circle82") {
            this.viewer.setPanorama(this.imgurl82,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle85");
              this.showBaohe = 0;
              this.showQianqingmen = 1;
              }
            );
          }
          if (markerid == "circle85") {
            this.viewer.setPanorama(this.imgurl85,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle88");
              markersPlugin.hideMarker("circle77");
              markersPlugin.hideMarker("circle79");
              this.showQianqingmen = 0;
              }
            );
          }
          if (markerid == "circle88") {
            this.viewer.setPanorama(this.imgurl88,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle89");
              }
            );
          }
          if (markerid == "circle89") {
            this.viewer.setPanorama(this.imgurl89,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle92");
              this.showQianqinggong=1;
              }
            );
          }
          if (markerid == "circle92") {
            this.viewer.setPanorama(this.imgurl92,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle91");
               this.showQianqinggong=0;
              }
            );
          }
          if (markerid == "circle91") {
            this.viewer.setPanorama(this.imgurl91,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle96");
              this.showJiaotai=1;
              }
            );
          }
          if (markerid == "circle96") {
            this.viewer.setPanorama(this.imgurl96,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle98");
              this.showJiaotai=0;
              }
            );
          }
          if (markerid == "circle98") {
            this.viewer.setPanorama(this.imgurl98,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle100");
              this.showKunninggong=1;
              }
            );
          }
          if (markerid == "circle100") {
            this.viewer.setPanorama(this.imgurl100,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle101");
              this.showKunninggong=0;
              this.showKunningmen=1;
              }
            );
          }
          if (markerid == "circle101") {
            this.viewer.setPanorama(this.imgurl101,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle103");
              this.showKunningmen=0;
              }
            );
          }
          if (markerid == "circle103") {
            this.viewer.setPanorama(this.imgurl103,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle104");
              }
            );
          }
          if (markerid == "circle104") {
            this.viewer.setPanorama(this.imgurl104,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle107");
              }
            );
          }
          if (markerid == "circle107") {
            this.viewer.setPanorama(this.imgurl107,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle110");
              }
            );
          }
          if (markerid == "circle110") {
            this.viewer.setPanorama(this.imgurl110,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              markersPlugin.showMarker("circle111");
              this.showHuayuan=1;
              }
            );
          }
          if (markerid == "circle111") {
            this.viewer.setPanorama(this.imgurl111,{ longitude: 0.0, latitude: 0.0 }, true).then(() => {
              this.showHuayuan=0;
              this.showEnd = 1;
              }
            );
          }
          // this.viewer.zoom(0)//改变缩放
          // this.viewer.setOption('defaultLong',100);
          // this.viewer.setOption('defaultLat',100);
          // this.viewer.toggleAutorotate();//开启自动旋转/不旋转 
        });
    });
  },
};
</script>