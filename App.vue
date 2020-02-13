<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
    <div class="box">
       <router-link active-class="active" v-for="(item, index) in list" tag="span" :to="item.path" :key="index">{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      list: [
        {
          path: '/homes',
          title: '首页'
        },
        {
          path: '/shoppingCar',
          title: '购物车'
        },
        {
          path: '/list',
          title: '订单'
        },
        {
          path: '/myTb',
          title: '我的淘宝'
        },
        {
          path: '/more',
          title: '更多'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    height: 100%;
  }
  #app{
    display: flex;
    height: 100%;
    flex-direction: column;
    main{
      flex: 1;
      overflow: scroll;
    }
  }
  .box{
    width: 100%;
    display: flex;
    line-height: 40px;
    
    span{
      flex: 1;
      text-align: center;
    }
  }
  .active{
    color: red;
  }
</style>
