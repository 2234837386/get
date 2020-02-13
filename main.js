import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import LazyLoad from 'vue-lazyload'
import 'vant/lib/index.css';

Vue.use(Vant)
Vue.use(LazyLoad, {
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566279522600&di=e53ed6efd7a311e4b39fb3dc18e3fe24&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F56%2F29%2F4556d9f8022935e.jpg',
  loading: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=180596185,3998206413&fm=26&gp=0.jpg'
})

Vue.config.productionTip = false

Vue.prototype.$alert = function (n) {
  alert(n)
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
