const app = getApp()
Component({
    properties: {
        // defaultData（父页面传递的数据-就是引用组件的页面）
        defaultData: {
            type: Object,
            value: {
                title: "我是默认标题"
            },
            observer: function(newVal, oldVal) {}
        }
    },
    data: {
        navBarHeight: 0, // 导航栏高度
        menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
        menuBotton: 0, // 胶囊距底部间距（保持底部间距一致）
        menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
        systemInfoHeight: 0 // 状态栏高度
    },
    // // 在组件实例进入页面节点树时执行
    attached: function() {
        // 获取系统信息
        const systemInfo = wx.getSystemInfoSync();
        // 胶囊按钮位置信息
        const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
        // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
        this.setData({
          systemInfoHeight: menuButtonInfo.top,
          navBarHeight: (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight + 10,
          menuRight: systemInfo.screenWidth - menuButtonInfo.right,
          menuBotton: menuButtonInfo.top - systemInfo.statusBarHeight,
          menuHeight: menuButtonInfo.height,
        })
        console.log(8988, this.data, systemInfo.statusBarHeight, menuButtonInfo.height, systemInfo.statusBarHeight)
        // this.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;
        // this.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
        // this.globalData.menuBotton = menuButtonInfo.top - systemInfo.statusBarHeight;
        // this.globalData.menuHeight = menuButtonInfo.height;
    },
    methods: {}
    // 数据都是根据当前机型进行计算，这样的方式兼容大部分机器
    //   globalData: {
    //     navBarHeight: 0, // 导航栏高度
    //     menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
    //     menuBotton: 0, // 胶囊距底部间距（保持底部间距一致）
    //     menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
    // }
})
