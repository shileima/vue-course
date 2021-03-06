import Home from '@/views/Home.vue'

export default [
    {
        path: '/',
        alias: '/home', // 别名
        name: 'home',
        component: Home,
        props: route => ({
            food: route.query.food
        }),
        // 5,路由独享的守卫 beforeEnter
        beforeEnter: (to, from, next) => {
            console.log('5,路由独享的守卫 beforeEnter')
            // if (from.name === 'about') alert('from about page')
            // else alert('not from about page')
            // next()
            next()
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        // 优先走路由内配置的变量 food
        props: {
            food: 'about'
        },
        meta: {
            title: '关于'
        }
    },
    {
        path: '/count-to',
        name: 'countTo',
        component: () => import('@/views/count-to.vue')
    },
    {
        path: '/split-pane',
        name: 'splitPane',
        component: () => import('@/views/split-pane.vue')
    },
    {
        path: '/render-page',
        name: 'renderPage',
        component: () => import('@/views/render-page.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/search')
    },
    {
        path: '/functional',
        name: 'functional',
        component: () => import('@/views/functional-view')
    },
    {
        path: '/menu-page',
        name: 'menuPage',
        component: () => import('@/views/menu-page')
    },
    {
        path: '/argu/:name',
        name: 'argu',
        component: () => import('@/views/Argu.vue'),
        props: true
    },
    {
        path: '/parent',
        name: 'parent',
        component: () => import('@/views/parent.vue'),
        children: [
            {
                path: 'child',
                component: () => import('@/views/child.vue')
            }
        ]
    },
    {
        path: '/profile',
        name: 'profile',
        meta: { needLogin: true },
        component: () => import('@/views/profile.vue')
    },
    // table
    {
        path: '/table',
        name: 'table',
        meta: { needLogin: false },
        component: () => import('@/views/table.vue')
    },
    // Message
    {
        path: '/message',
        name: 'message',
        meta: { needLogin: false },
        component: () => import('@/views/message.vue')
    },
    // 命名视图
    {
        path: '/named_view',
        components: {
            default: () => import('@/views/child.vue'),
            email: () => import('@/views/email.vue'),
            tel: () => import('@/views/tel.vue')
        }
    },
    //   mixin 混入
    {
        path: '/mixin',
        name: 'mixin',
        component: () => import('@/views/mixinIndex.vue')
    },
    // jsx
    {
        path: '/jsx',
        name: 'jsx',
        component: () => import('@/views/jsx/index.vue')
    },
    // prop
    {
        path: '/prop',
        name: 'prop',
        component: () => import('@/views/prop.vue')
    },
    // 跳转
    {
        path: '/main',
        redirect: to => '/'
    },
    {
        path: '/store',
        name: 'store',
        component: () => import('@/views/store.vue')
    },
    {
        path: '*',
        component: () => import('@/views/error_404.vue')
    }
]
