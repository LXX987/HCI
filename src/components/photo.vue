<template>

<div  >
<!-- <div class="shot" style="display:inline;" v-show="showPosterHtml"></div> -->

<!-- 展示框 -->
<div ref="myPoster" class="showBox">
    <div class="alert-box-item">
		<!-- <div class="bigImg-div" @dblclick="toGetImg">
		</div> -->
        <div class="bigImg-div" id="box" v-drag @click="toGetImg">
			<img class="bigImg" :src=valueUrl v-if="valueUrl">
		</div>
        <!-- <img class="hezhaopic" v-bind:style="{absolute: absolute, top: movetag + 'px', left: movetagleft + 'px'}" src="../assets/hezhaobackground.png"> -->
	</div>
    <!-- <el-button @click="uploadpic">点击合成</el-button> -->
<!-- <img id="imgshot" :src="imgUrl" v-show="showPosterPic"/> -->
<img id="photobackground" src="../assets/photoTaiHe.jpg">
<el-button @click="handleLapiao">景点合照</el-button>
</div>
</div>

</template>

<script>
import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver';
let inputElement = null
export default {
        name: "ShopDetail",
        components: {
            html2canvas
        },
        data() {
            return {
                valueUrl: '',
                imgUrl:'',
                showPosterHtml:true,
                showPosterPic:false,
            }
        },
        directives: {
    drag: {
      // 指令的定义
      inserted: function(el) {
        // el.drag();
        console.log(el);
        //获取元素
        // var dv = document.getElementById("dv");
        let x = 0;
        let y = 0;
        let l = 0;
        let t = 0;
        let isDown = false;
        //鼠标按下事件
        el.onmousedown = function(e) {
          //获取x坐标和y坐标
          x = e.clientX;
          y = e.clientY;

          //获取左部和顶部的偏移量
          l = el.offsetLeft;
          t = el.offsetTop;
          //开关打开
          isDown = true;
          //设置样式
          el.style.cursor = "move";
        };
        //鼠标移动
        window.onmousemove = function(e) {
          if (isDown == false) {
            return;
          }
          //获取x和y
          let nx = e.clientX;
          let ny = e.clientY;
          //计算移动后的左偏移量和顶部的偏移量
          let nl = nx - (x - l);
          let nt = ny - (y - t);
          el.style.left = nl + "px";
          el.style.top = nt + "px";
        };
        //鼠标抬起事件
        el.onmouseup = function() {
          //开关关闭
          isDown = false;
          el.style.cursor = "default";
        };
      }
    }
  },
        methods: {
            toGetImg() {
				if (inputElement === null) {
				// 生成文件上传的控件
					inputElement = document.createElement('input')
					inputElement.setAttribute('type', 'file')
					inputElement.style.display = 'none'

					if (window.addEventListener) {
						inputElement.addEventListener('change', this.uploadFile, false)
					} else {
						inputElement.attachEvent('onchange', this.uploadFile)
					}

					document.body.appendChild(inputElement)
				}
				inputElement.click()
			},
			uploadFile(el) {
				if (el && el.target && el.target.files && el.target.files.length > 0) {
					console.log(el)
					const files = el.target.files[0]
					const isLt2M = files.size / 1024 / 1024 < 2
					const size = files.size / 1024 / 1024
					console.log(size)
					// 判断上传文件的大小
					if (!isLt2M) {
						this.$message.error('上传头像图片大小不能超过 2MB!')
					} else if (files.type.indexOf('image') === -1) { //如果不是图片格式
						// this.$dialog.toast({ mes: '请选择图片文件' });
						this.$message.error('请选择图片文件');
					} else {
						const that = this;
						const reader = new FileReader(); // 创建读取文件对象
						reader.readAsDataURL(el.target.files[0]); // 发起异步请求，读取文件
						reader.onload = function() { // 文件读取完成后
							// 读取完成后，将结果赋值给img的src
							that.valueUrl = this.result;
							console.log(this.result);
							// 数据传到后台
						//const formData = new FormData()
						//formData.append('file', files); // 可以传到后台的数据
						};
					}
				}
			},

		
		beforeDestroy() {
		    if (inputElement) {
		      if (window.addEventListener) {
		        inputElement.removeEventListener('change', this.onGetLocalFile, false)
		      } else {
		        inputElement.detachEvent('onchange', this.onGetLocalFile)
		      }
		      document.body.removeChild(inputElement)
		      inputElement = null
		      console.log('========inputelement destroy')
		    }
		  },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }?`);
      },
            // 截图获取 myPoster 区域
            html2poster(){
                var FileSaver = require("file-saver");
                let target = this.$refs.myPoster;
                html2canvas(target, {
                    useCORS: true,
                    width: target.offsetWidth,
                    height: target.offsetHeight,
                    windowWidth: target.offsetWidth,
                    windowHeight: target.offsetHeight,
                    x:window.pageXOffset,
                    y:window.pageYOffset,
                }).then(canvas =>{
                    this.imgUrl = canvas.toDataURL("image/jpeg", 1);
                    console.log(this.imgUrl)
                    this.showPosterHtml= false;
                    this.showPosterPic= true;
                    canvas.toBlob(function (blob) {
                        FileSaver.saveAs(blob, "demo.png");
                    });
                    this.$router.push('/view3D')
                });
            },
 
            // 帮他拉票
            handleLapiao(){
                setTimeout(()=> {
                   // 延迟截图
                   this.html2poster();
                }, 100);
            },
        },
        mounted() {
            console.log("testtest")
            // console.log(this.$route.query.imgUrl);
            // this.imgUrl = this.$route.query.imgUrl;
            console.log("testtest111111")
        }
}
</script>
<style>
#hezhaopic {
    width: 100%;
    height: 100%;
    position: absolute;
}
#photobackground {
    width: 95%;
    height: 92%;
    margin-top: 20px;
    border-radius: 30px;
}
#box {
  width: 150px;
  height: 200px;
  /* background-color: darkorange; */
  background: url('../assets/hezhaobackground.png') no-repeat;
  background-size: 100% 100%;
  border-radius: 20px;
  position: absolute;
  z-index: 1999;
}
.shot {
    display: inline;
    width: 800px;
    height: 400px;
}
.showBox {
    background: url('../assets/photobackground.jpg') no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 609px;
}
	.alert-box-item {
		overflow: hidden;
	}

	.bigImg-div {
		width: 200px;
		height: 200px;
		border-radius: 100%;
		overflow: hidden;
		/* border: 1px solid #ddd; */
	}

	.bigImg {
		display: block;
		width: 150px;
		height: 90px;
		border-radius: 100%;
	}
</style>
