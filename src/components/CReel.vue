<template>
  <div class="c-reel" @click="back">
    <div class="view" ref="view" :style="{width: viewWidth}">
      <div class="content" ref="reel" :style="scrollStyle">
        <img src="@/assets/map.jpg"/>
      </div>
      <img class="jz" id="jz-left-jz" src="../assets/jz1.png" alt="左卷轴" :style="{left: jzLeft}" />
      <img class="jz" id="jz-right-jz" src="../assets/jz2.png" alt="右卷轴" :style="{right: jzRight}" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      viewWidth: "", // 可见区域的样式
      scrollStyle: {}, // 卷轴的样式
      jzLeft: "", // 左卷轴左偏移
      jzRight: "" // 右卷轴右偏移
    };
  },
  props: {
    start: {
      type: Boolean,
      default: true // 控制卷轴开始
    },
    showAll: {
      type: Boolean,
      default: true // 控制卷轴显示样式，显示全部true还是显示部分false
    },
    speed: {
      type: String,
      default: "fast" // 卷轴打开速度 slow fast
    }
  },
  mounted() {
    this.handleStart();
  },
  methods: {
    back() {
      this.$router.push('/view3D');
    },
    /**
     * 卷轴打开动画
     */
    handleStart() {
      let scrollWidth = this.$refs.reel.clientWidth; // 获取展开卷轴的宽度
      let viewWidth = this.$refs.view.clientWidth; // 可见区域的宽度
      var speed = 10;
      if (this.speed == "fast") {
        speed = 1;
      } else {
        speed = 10;
      }
      let time = setInterval(() => {
        viewWidth += 1;
        this.viewWidth = viewWidth + "px";
        // view样式渲染完成后执行卷轴的移动操作
        this.$nextTick(() => {
          this.handleTransform();
        });
        if (viewWidth >= scrollWidth) {
          clearInterval(time);
          if (!this.showAll) {
            let endPosition = 0;
            let endTime = setInterval(() => {
              endPosition += 0.5;
              this.jzLeft = "-" + endPosition.toFixed(2) + "px";
              this.jzRight = "-" + endPosition.toFixed(2) + "px";
              if (Math.abs(endPosition - 6) < 0.01) {
                clearInterval(endTime);
              }
            }, speed);
          }
        }
      }, speed);
    },
    /**
     * 处理内部展开卷轴的移动位置
     * 展开卷轴的宽度-可见区域的宽度，再除以2得到的值就是内部卷轴应该向左移动的位置
     * 随着可见区域的扩大，向左移动位置应该动态改变，保证卷轴处于中间位置
     */
    handleTransform() {
      let viewWidth = this.$refs.view.clientWidth; // 可见区域的宽度
      let scrollWidth = this.$refs.reel.clientWidth; // 获取展开卷轴的宽度
      let translateX = (scrollWidth - viewWidth) / 2;
      this.scrollStyle = {
        transform: "translateX(-" + translateX + "px)"
      };
    }
  },
  watch: {
    start: function(e) {
      if (e == true) {
        this.handleStart();
      }
    }
  }// 为方便读者直接使用，笔者将rem改成了px,此处根据750设计尺寸显示，个别显示尺寸可能会有异样，推荐读者使用rem适配不同的分辨率设备
};
</script>
<style>
.content img {
    width: 96%;
}
.view {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 44px;
    height: 100%;
    overflow: hidden;
    
  }
  .content {
      width: 900px;
      height: 460px;
      background: url("../assets/map.jpg") no-repeat center;
      background-size: 100% 100%;
      overflow-y:scroll;
      position: relative;
      top: 45px;
    }
.c-reel {
  background: url('../assets/jumpbackground.png') no-repeat;
  background-size: 100% 100%;
  position: absolute;
  left: 50%;
  top: 65%;
  transform: translate(-50%, -65%);
  width: 100%;
  height: 550px;
  
  
}
#jz-left-jz {
      left: 0;
    }
    #jz-right-jz {
      right: 0;
    }
.jz {
    position: absolute;
    top: 0;
    width: 22px;
    height: 100%;
    
  }
</style>