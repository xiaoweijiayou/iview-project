import frame from './views/layout/frame'
const routers = [
    {
        path: '/login',
        name: 'login',
        meta: {
          title: 'Login - 登录',
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/',
        name: '_home',
        // redirect: '/home',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/home.vue'], resolve),
        children: [
            {
                path: 'userManagement',
                name: 'userManagement',
                meta: {
                title: '用户管理',
                },
                component: (resolve) => require(['./views/userInfoManagement/userManagement.vue'], resolve),
            },
            {
                path: 'roleManagement',
                name: 'roleManagement',
                meta: {
                    title: '角色管理',
                },
                component: (resolve) => require(['./views/userInfoManagement/roleManagement.vue'], resolve),
            },
            {
                path: 'passwordManagement',
                name: 'passwordManagement',
                meta: {
                title: '密码管理',
                },
                component: (resolve) => require(['./views/userInfoManagement/passwordManagement.vue'], resolve),
            },
            {
                path: 'departmentManagement',
                name: 'departmentManagement',
                meta: {
                    title: '部门管理',
                },
                component: (resolve) => require(['./views/userInfoManagement/departmentManagement.vue'], resolve),
            },
            {
                path:'clientManager',
                name:'clientManager',
                meta:{
                    title: '客户端管理',
                },
                component: (resolve) => require(['./views/clientManagement/clientManager.vue'], resolve),

            },
            {
                path:'setManager',
                name:'setManager',
                meta:{
                    title: '设备管理',
                },
                component: (resolve) => require(['./views/setManager/setManager.vue'], resolve),

            },
            {
                path:'iniManager',
                name:'iniManager',
                meta:{
                    title: '项目管理',
                },
                component: (resolve) => require(['./views/iniManagement/iniManager.vue'], resolve),

            },
            {
                path:'insertClient',
                name:'insertClient',
                meta:{
                    title: '客户端管理',
                },
                component: (resolve) => require(['./views/clientManagement/insertClient.vue'], resolve),

            },
            {
                path:'projectInfo',
                name:'projectInfo',
                meta:{
                    title: '项目基本信息',
                },
                component: (resolve) => require(['./views/projectManagement/projectInfo.vue'], resolve),

            },
            {
                path:'performanceData',
                name:'performanceData',
                meta:{
                    title: '项目性能数据',
                },
                component: (resolve) => require(['./views/projectManagement/performanceData.vue'], resolve),

            },
            {
                path:'issueList',
                name:'issueList',
                meta:{
                    title: '项目问题列表',
                },
                component: (resolve) => require(['./views/projectManagement/issueList.vue'], resolve),

            },
            {
                path:'logManagement',
                name:'logManagement',
                meta:{
                    title: '日志管理',
                },
                component: (resolve) => require(['./views/logManagement/logManagement.vue'], resolve),

            },
            
            
        ]
    },
];
export default routers;