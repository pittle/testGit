<template>
  <div id="app">
      <el-row>
        <el-col :span='4' class="left-nav-col">
          <ul class="nav">
            <router-link class="nav-list" tag='li' :to='{name:"home"}'>Home</router-link>
            <router-link class="nav-list" tag='li' :to='{path:"/home/a"}'>PageA</router-link>
            <router-link class="nav-list" tag='li' to='/home/b'>PageB</router-link>
          </ul>
        </el-col> 
        <el-col :span='20' class="right-nav-col">
            <router-view></router-view>
        </el-col>
      </el-row>    
          
     
      
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style scoped lang='stylus'>

#app
  font-size 30px
  .el-row
    .left-nav-col
      background rgba(53,65,81,.7) 
      height 100vh
      .nav
        padding-top 2 rem
        color rgb(53,65,81)
        font-weight bold 
        .nav-list
          text-align center
          height 2 rem 
          line-height 2 rem
    .right-nav-col
      padding 20px 0 0 40px
          
          
        
</style>
