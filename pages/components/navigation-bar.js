// pages/components/navigation_bar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title:{
            type:String,
            value:''
        },
        bg_color:{
            type:String,
            value:''
        },
        title_color:String,
        has_bg:Boolean,
        url:String
    },

    /**
     * 组件的初始数据
     */
    data: {
        bar_height:wx.getSystemInfoSync().statusBarHeight,
        img_height:wx.getSystemInfoSync().screenWidth * 0.86
    },

    /**
     * 组件的方法列表
     */
    methods: {
    }
})
