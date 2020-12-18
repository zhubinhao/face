export const MainPages: Array<string> = ['pages/index/index', 'pages/my/my']

export const nineGrid: Array<any> = [
  {
    title: '访客通行',
    icon: require('@/static/img/访客管理.png'),
    path: '/pages/index/addList',
    bg: '#5dc8f6'
  },
  {
    title: '家庭成员',
    icon: require('@/static/img/成员.png'),
    path: '/pages/index/addList',
    bg: '#62e3ba'

  },
  {
    title: '绑定认证',
    icon: require('@/static/img/认证.png'),
    path: '/pages/index/addList',
    bg: '#969cfd'
  }
]

export const myList: Array<any> = [
  { 
    id:"id1",
    list: [{
      id:'id11',
      title: '家庭成员',
      icon: '',
      path: '/pages/my/family',
    }],
  },
  {
    id:"id2",
    list: [
      {
        id:'id21',
        title: '访客',
        icon: '',
        path: '/pages/my/access',
      },
      {
        id:'id22',
        title: '进出记录',
        icon: '',
        path: '/pages/my/out',
      },
      {
        id:'id23',
        title: '小区管理',
        icon: '',
        path: '',
      },
      {
        id:'id24',
        title: '关联设备',
        icon: '',
        path: '',
      }
    ]
  },
  {
    id:"id3",
    list: [
      {
        id:'id31',
        title: '问题反馈',
        icon: '',
        path: '',
      }
    ]
  }
]