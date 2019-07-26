const menuList = [
    {
        title:'首页',
        key:'/admin/home',
        icon:'home',
    },
    {
        title:'UI',
        key:'/ui',
        icon:'skin',
        children:[
            {
                title:'按钮',
                key:'/admin/ui/buttons',
            },
            {
                title:'弹框',
                key:'/admin/ui/modals',
            },
            {
                title:'Loading',
                key:'/admin/ui/loadings',
            },
            {
                title:'走马灯',
                key:'/admin/ui/carousel',
            },
            {
                title:'选择器',
                key:'/admin/ui/chose',
            },
            {
                title:'表单',
                key:'/admin/ui/form',
            },
            {
                title:'图片画廊',
                key:'/admin/ui/gallery',
            },
        ]
    },
    {
        title:'表单',
        key:'/form',
        icon:'form',
        children:[
            {
                title:'登录',
                key:'admin/form/login',
            },
            {
                title:'注册',
                key:'admin/form/reg',
            }
        ]
    },
    {
        title:'表格',
        key:'/table',
        icon:'table',
        children:[
            {
                title:'基础表格',
                key:'/table/basic',
            },
            {
                title:'高级表格',
                key:'/table/high',
            }
        ]
    },
    {
        title:'富文本',
        key:'/rich',
        icon:'copy',
    },
    {
        title:'城市管理',
        key:'/city',
        icon:'compass',
    },
    {
        title:'订单管理',
        key:'/order',
        icon:'check',
        btnList:[
            {
                title:'订单详情',
                key:'detail'
            },
            {
                title:'结束订单',
                key:'finish'
            }
        ]
    },
    {
        title:'员工管理',
        key:'/user',
        icon:'user',
    },
    {
        title:'车辆地图',
        key:'/bikeMap',
        icon:'heat-map',
    },
    {
        title:'图标',
        key:'/charts',
        icon:'apple',
        children:[
            {
                title:'柱形图',
                key:'/charts/bar'
            },
            {
                title:'饼图',
                key:'/charts/pie'
            },
            {
                title:'折线图',
                key:'/charts/line'
            },
        ]
    },
    {
        title:'权限设置',
        key:'/permission',
        icon:'property-safety',
    },
];
export default menuList;