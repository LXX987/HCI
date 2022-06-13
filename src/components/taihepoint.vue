<template>
        <div class="top">
      <div v-dragscroll class="list">
        <div v-for=" index in 3" :key="index" class="list-item">
          item{{ index }}
        </div>
      </div>
    </div>

</template>
<style>
 .list-item{
          min-width: 200px;
          border: 1px solid red;
          height: 100%;
          line-height: 90px;
          text-align: center;
        }
        .list{
        overflow: hidden;
        display: flex;
        
      }   
.top{
      height: 90px;
      
}

</style>
<script>
export default {
    
}
</script>