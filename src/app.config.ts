export default {
  pages: ['pages/create/index', 'pages/find/index', 'pages/my/index'],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  subpackages: [
    {
      root: 'pagesSub/search',
      pages: ['index']
    },
    {
      root: 'pagesSub/my',
      pages: ['detail/index', 'about/index']
    },
    {
      root: 'pagesSub/book',
      pages: ['detail/index']
    }
  ],
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#d81e06',
    borderStyle: 'black',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/create/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_selected.png',
        text: '创建'
      },
      {
        pagePath: 'pages/find/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_selected.png',
        text: '发现'
      },
      {
        pagePath: 'pages/my/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_selected.png',
        text: '我的'
      }
    ]
  }
}
