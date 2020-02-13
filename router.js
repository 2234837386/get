import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const route = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/homes'
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ('./views/About.vue')
        },
        {
            path: '/homes',
            name: 'homes',
            component: () =>
                import ('./subViews/homes')
        },
        {
            path: '/list',
            name: 'list',
            component: () =>
                import ('./subViews/list')
        },
        {
            path: '/more',
            name: 'more',
            component: () =>
                import ('./subViews/more')
        },
        {
            path: '/myTb',
            name: 'myTb',
            component: () =>
                import ('./subViews/myTb')
        },
        {
            path: '/shoppingCar',
            name: 'shoppingCar',
            component: () =>
                import ('./subViews/shoppingCar')
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('./subViews/login')
        },
        {
            path: '/details',
            component: () =>
                import ('./subViews/details')
        },
        {
            path: '/closeNum',
            component: () =>
                import ('./subViews/closeNum')
        },
    ]
})

route.beforeEach((to, from, next) => {
    if (to.path === '/list') {
        if (sessionStorage.getItem('flag') === 'true') {
            next()
        } else {
            next('/login')
        }
    }
    next()
})


export default route