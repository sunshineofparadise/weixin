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
        list: [
            {img: 'https://upload-images.jianshu.io/upload_images/13748187-3e4746e2a9d87f43.jpg', title: '最美武功山', num: 117354, list: ['星空', '必看', '不容错过']},
            {img: 'https://upload-images.jianshu.io/upload_images/13748187-e08816335173a2a4.jpg', title: '冰雪庐山', num: 13524, list: ['想看', '必看', '可遇不可求']},
            {img: 'https://upload-images.jianshu.io/upload_images/13748187-851d8e1d92a4cbb3.jpg', title: '小伙伴在路上', num: 13, list: ['真好', '友谊', '一起']},
            {img: 'https://upload-images.jianshu.io/upload_images/13748187-43e6e0b6ed8dd504.jpg', title: '517驿站', num: 154, list: ['一间有温度的客栈', '不容错过']},
            {img: 'https://upload-images.jianshu.io/upload_images/13748187-ec55342069020856.jpg', title: '最美武功山', num: 1354, list: ['真好', '必看', '不容错过']},
            {img: 'https://upload-images.jianshu.io/upload_images/13748187-289fa8ee4ed70a44.jpg', title: '偷拍小姐姐', num: 14, list: ['真好', '必看']},
            {img: 'https://upload-images.jianshu.io/upload_images/13748187-28817f968474898f.jpg', title: '帐篷联营', num: 1354, list: ['真好', '星晴', '不一样的体验']},
            {img: 'https://upload-images.jianshu.io/upload_images/13748187-ea710191ded31ac3.jpg', title: '下山的路', num: 54, list: ['终于是下了', '800台阶', '不容错过']},
            {img: 'https://upload-images.jianshu.io/upload_images/13748187-f7a1cbb2589269cb.jpg', title: '路边小憩', num: 88, list: ['看人来来我', '看人流', '不容错过']},
            {img: 'https://upload-images.jianshu.io/upload_images/13748187-7cb7993eb9eeb7e9.jpg', title: '最美武功山', num: 1354, list: ['真好', '必看', '不容错过']},
            {img: 'https://upload-images.jianshu.io/upload_images/13748187-bb6a9d3fbc8084fc.jpg', title: '魔鬼城', num: 51354, list: ['鬼斧神工', '大美新疆', '不容错过', '古湖底']},
            {img: 'https://upload-images.jianshu.io/upload_images/13748187-aef89bce54efb30d.jpg', title: '大美禾木', num: 16354, list: ['西伯利亚风格', '小木屋', '不容错过']},
            {img: 'https://upload-images.jianshu.io/upload_images/13748187-340cbd7b843e8fcc.jpg', title: '新疆', num: 81354, list: ['真好', '西伯利亚风情', '必看', '不容错过']}
        ]
    },
    // // 在组件实例进入页面节点树时执行
    attached: function() {
    },
    methods: {}
})
