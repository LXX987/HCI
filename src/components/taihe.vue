<template>
  <el-drawer title="太和门" :visible="taiheVisible_" size="50%" @close="handleClose">
    <p>
     御花园位于北京紫禁城中轴线上大内最北部，坤宁宫后方
     明代称为宫后苑，清代称御花园。
     始建于明永乐十八年 (1420年),以后曾有增修
     现仍保留初建时的基本格局。
     全园南北纵80m,东西宽140m,占地面积12000㎡。
     园内主体建筑钦安殿为重檐盝顶式，
     坐落于紫禁城的南北中轴线上，以其为中心，
     向前方及两侧铺展亭台楼阁。
     园内青翠的松树、柏树和竹子间点缀着山石，
     形成四季常青的园林景观。
      </p>
      <div>
   <el-button @click="innerDrawer = true">历史知识</el-button>
   <el-drawer
     title="历史知识"
     :append-to-body="true"
     :before-close="handleClose2"
     :visible.sync="innerDrawer">
     <p>
         其一,建筑布局对称而不呆板,舒展而不零散。
         以钦安殿为中心,两边均衡地布置各式建筑近20座,无论是依墙而建还是亭台独立，
         均玲珑别致，疏密合度。
         其中以浮碧亭和澄瑞亭、万春亭和千秋亭最具特色。
         两对亭子东西对称排列，浮碧和澄瑞为横跨于水池之上的方亭，
         朝南一侧伸出抱厦；
         万春亭和千秋亭为上圆下方、四面出抱厦、组成十字形平面的多角亭，
         体现了天圆地方的中国传统观念。
         两座对亭造型纤巧秀丽，为御花园增色不少。
         </p>
   </el-drawer>
  </div>
  </el-drawer>
</template>


<script>
export default {
  //传值
  props: {
    //父组件传  childVisible值；
    taiheVisible: {
      type: Boolean,
      default: false, //这里默认为false
    },
  },
  data() {
    return {
        drawer: false,
        innerDrawer: false
    };
  },
  //计算属性
  computed: {
    taiheVisible_: {
      get() {
        console.log(this.taiheVisible, 'taiheVisible')
        return this.taiheVisible
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
      this.taiheVisible_ = false
    },
    /*handleClose2() {
      this.innerVisible = false
    },*/
    handleClose2(done) {
        this.$confirm('继续游览？')
          .then(_ => {
            done();
            this.taiheVisible_ = false
          })
          .catch(_ => {});
      }
  },
}
</script>
