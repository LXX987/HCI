<template>

  <el-drawer title="太和殿" :visible="childVisible_" size="50%" @close="handleClose">
    <p>
      太和殿，又称“金銮殿、至尊金殿，金銮宝殿”,
      位于北京市东城区景山前街4号故宫博物院内
      矗立在紫禁城中央,建筑面积2377平方米
      是紫禁城（故宫）中最大的殿宇、东方三大殿之一 。
      京城的中轴子午线沿着龙纹石雕御路升上三台,
      从天子宝座下穿过，是中国现存规制最高的古代宫殿建筑，
      是皇帝举行重大朝典之地。
      大殿内外饰以成千上万条金龙纹，屋脊角安设十个脊兽，
      在现存古建筑中仅此一例。
      明永乐十八年1420年太和殿建成,初名奉天殿,
      后经数次灾毁和重建；
      明嘉靖朝改名皇极殿；满清建都北京后改为今名；
      现太和殿是清康熙年重建并留存下来的。
      </p>


<!--    <p>-->
<!--      太和殿，又称“金銮殿、至尊金殿，金銮宝殿”,位于北京市东城区景山前街4号故宫博物院内-->
<!--      矗立在紫禁城中央,建筑面积2377平方米-->
<!--      是紫禁城（故宫）中最大的殿宇、东方三大殿之一 。京城的中轴子午线沿着龙纹石雕御路升上三台,-->
<!--      从天子宝座下穿过，是中国现存规制最高的古代宫殿建筑，是皇帝举行重大朝典之地。-->
<!--      大殿内外饰以成千上万条金龙纹，屋脊角安设十个脊兽，在现存古建筑中仅此一例。-->
<!--      明永乐十八年1420年太和殿建成,初名奉天殿,后经数次灾毁和重建；-->
<!--      明嘉靖朝改名皇极殿；满清建都北京后改为今名；现太和殿是清康熙年重建并留存下来的。-->
<!--      </p>-->
    <span>{{$t('m.text')}}</span>
    <el-select v-model="curLanguage" placeholder="请选择"
               @change="Onchange"
               style="width: 10rem;"

    >
      <el-option v-for="item in lang"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
      </el-option>
    </el-select>

<!--    <el-dialog-->
<!--      title="语言切换"-->
<!--      :visible.sync="chooseLangDialogVisible"-->
<!--    >-->
<!--      <el-form :model="langForm">-->
<!--        {{currentLang}}-->
<!--        <el-radio-group v-model="langForm.radio">-->
<!--          <el-radio-->
<!--            v-for="item in lang"-->
<!--            :label="item.label"-->
<!--            :key="item.value"-->
<!--            :value="item.value"-->
<!--          >{{item.txt}}</el-radio>-->
<!--        </el-radio-group>-->
<!--        <br /><br />-->
<!--        <el-form-item>-->
<!--          <el-button-->
<!--            type="primary"-->
<!--            size="small"-->
<!--            @click="onSubmit"-->
<!--          >确认</el-button>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--    </el-dialog>-->

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
      // curLanguage:0,
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
