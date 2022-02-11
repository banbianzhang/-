// pages/GamesPage/Forza5/pages/forza5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttons: [{
        url: "/pages/Icons/option-white.png",
        name: "随机设置",
        main: false,
        text_color: 'white',
        click: 'callSetting'
      },
      {
        url: "/pages/Icons/dice.png",
        name: "一键白给",
        main: true,
        text_color: 'white',
        click: 'getResult'
      },
      {
        url: "/pages/Icons/forza.png",
        name: "我的车辆",
        main: false,
        text_color: 'white',
        click: 'callLegendSetting'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})