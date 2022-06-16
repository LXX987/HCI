<template>
  <el-drawer class="drawer" :visible="jiaotaiVisible_" :with-header="false" size="25%" :show-close="false" @close="handleClose">
    <div class="intro">
      <el-button class="closeBoard" circle @click="closeBoard"></el-button>
    </div>
    <div class="languageChange">
      <span>{{$t('m.jiaotaidian')}}</span>
    </div>

    <div class="langButton">
      <el-radio-group v-model="langForm.radio" @change="onSubmit" size="mini" text-color="black" fill="#909399">
        <el-radio-button
          v-for="item in lang"
          :label="item.label"
          :key="item.label"
        >{{item.txt}}</el-radio-button>
      </el-radio-group>
    </div>
  </el-drawer>
</template>
<script>
export default {
  //传值
  props: {
    //父组件传  jiaotaiVisible值；
    jiaotaiVisible: {
      type: Boolean,
      default: false, //这里默认为false
    },
  },
  data() {
    return {
      langForm: {
        radio: 'zh-CN'
      },
      lang: [
        {
          txt: '中文',
          label: 'zh-CN'
        },
        {
          txt: 'English',
          label: 'en-US'
        },
      ]
    }
  },
  mounted(){},
  //计算属性
  computed: {
    jiaotaiVisible_: {
      get() {
        console.log(this.jiaotaiVisible, 'jiaotaiVisible')
        return this.jiaotaiVisible
      },
      //值变化的时候会被调用
      set(v) {
        console.log(z, 'z')
        this.$emit('changeDrawer', z)
      },
    },
  },
  methods: {
    closeBoard() {
      this.jiaotaiVisible_ = false
    },
    //关闭当前抽屉；触发set方法（jiaotaiVisible_值改变就会调用set）
    handleClose() {
      this.jiaotaiVisible_ = false
    },
    /** 语言切换 */
    onSubmit() {

      // 切换系统语言
      this.$i18n.locale = this.langForm.radio

    },
  },
}
</script>
<style scoped>
.languageChange {
  position: absolute;
  padding-left: 20px;
  padding-right: 20px;
  top: 227px;
  width: calc(100% - 20px);
  height: 217px;
  overflow-y: auto;
  font-family: cursive;
  font-size: larger;
  line-height: 24px;
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
.langButton{
  position: absolute;
  left: 0px;
  top: 13px;
}
.intro {
  width: 100%;
  height: 100%;
  background: url('../assets/JiaoTaiDianIntro.png') no-repeat;
  background-size: 100% 100%;
}
.drawer {
  margin: 5% 10% 0% 0%;
  height: 80%;
  overflow: hidden;
}
/deep/ .el-radio-button--mini .el-radio-button__inner {
  width: 70px;
}
</style>
