<template>
  <el-drawer title="坤宁宫" :visible="kunninggongVisible_" size="50%" @close="handleClose">
    <p>
     中和殿,始建于明永乐十八年1420年,
     明初称“华盖殿”。嘉靖时遭遇火灾,
     重修后改称“中极殿”,
     现天花内构件上仍遗留有明代“中极殿”墨迹。
     清顺治元年1644年,清皇室入住紫禁城，
     第二年改中极殿为中和殿。
     “中和”二字取自
     《礼记·中庸》：“中也者，天下之本也；
     和也者，天下之道也”之意。
     三大殿中唯有这间房子可供皇帝一人静静的思考。
      </p>
  </el-drawer>
</template>


<script>
export default {
  //传值
  props: {
    //父组件传  childVisible值；
    kunninggongVisible: {
      type: Boolean,
      default: false, //这里默认为false
    },
  },
  data() {
    return {}
  },
  //计算属性
  computed: {
    kunninggongVisible_: {
      get() {
        console.log(this.kunninggongVisible, 'kunninggongVisible')
        return this.kunninggongVisible
      },
      //值变化的时候会被调用
      set(z) {
        console.log(z, 'z')
        this.$emit('changeDrawer', z)
      },
    },
    /*innerVisible:{
        get(){
          console.log(this.innerVisible, 'innerVisible')
        return this.innerVisible
        },
        set(v){
          console.log(v, 'v')
        this.$emit('changeDrawer', v)
        }
      }*/
  },
  methods: {
    //关闭当前抽屉；触发set方法（childVisible_值改变就会调用set）
    handleClose() {
      this.kunninggongVisible_ = false
    },
    /*handleClose2() {
      this.innerVisible = false
    },*/
  },
}
</script>
