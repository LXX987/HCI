<template>
  <el-drawer class="drawer" :visible="childVisible_" :with-header="false" size="25%" :show-close="false" @close="handleClose">
    <div class="intro">
      <el-button class="closeBoard" circle @click="closeBoard"></el-button>
    </div>
    <div class="languageChange">
      <span>&ensp;&ensp;&ensp;{{$t('m.text')}}</span>
      <el-select v-model="curLanguage" placeholder="请选择" @change="Onchange" style="width: 10rem;">
        <el-option v-for="item in lang" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
  </el-drawer>
</template>
<script>
export default {
  //传值
  props: {
    //父组件传  childVisible值；
    childVisible: {
      type: Boolean,
      default: false, //这里默认为false
    },
  },
  data() {
    return {
      curLanguage: 0,
      lang: [
        {
          value: 0,
          label: '中文'
        },
        {
          value: 1,
          label: 'English'
        }
      ]
    }
  },
  mounted(){},
  //计算属性
  computed: {
    childVisible_: {
      get() {
        console.log(this.childVisible, 'childVisible')
        return this.childVisible
      },
      //值变化的时候会被调用
      set(v) {
        console.log(v, 'v')
        this.$emit('changeDrawer', v)
      },
    },
  },
  methods: {
    closeBoard() {
      this.childVisible_ = false
    },
    //关闭当前抽屉；触发set方法（childVisible_值改变就会调用set）
    handleClose() {
      this.childVisible_ = false
    },
    Onchange(value){
      if(value===0){
        this.lang = "zh-CN";
        this.$i18n.locale = this.lang;
      }else{
        this.lang = "en-US";
        this.$i18n.locale = this.lang;
      }
    }
  },
}
</script>
<style scoped>
.languageChange {
  position: absolute;
  left: 20px;
  top: 280px;
}
.el-button {
  margin-left: 323px;
  margin-top: 0px;
  border: 4px solid #f7dd92;
}
.closeBoard {
  background: url('../assets/close.png') no-repeat;
  background-size: 100% 100%;
}
.intro {
  width: 100%;
  height: 100%;
  background: url('../assets/video1.png') no-repeat;
  background-size: 100% 100%;
}
.drawer {
  margin: 5% 10% 0% 0%;
  height: 80%;
  overflow: hidden;
}
</style>