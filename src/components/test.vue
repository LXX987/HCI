<template>
  <div class="test">
    <el-drawer title="我是标题" :visible="drawer_" :direction="direction" @close="handleClose">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  //传值
  props: {
    //父组件向子组件传 drawer；这里默认会关闭状态
    drawer_: {
      type: Boolean,
      default: false,
    },
    //Drawer 打开的方向
    direction: {
      type: String,
      default: 'rtl',
    },
  },
  data() {
    return {}
  },
  //计算属性
  computed: {
    drawer_: {
      get() {
        return this.drawer_
      },
      //值一改变就会调用set【可以用set方法去改变父组件的值】
      set(v) {
        //   console.log(v, 'v')
        //   this.$emit('changeDrawer', v)
      },
    },
  },
  methods: {
    //子组件向父组件传方法，传布尔值；请求父组件关闭抽屉
    handleClose() {
      this.drawer_=false
    },
  },
}
</script>

