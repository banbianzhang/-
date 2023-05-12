// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    version: "1.0.0",
    author: "MeatBall",
    lastPage: -1,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    scroll_height: wx.getSystemInfoSync().screenHeight - wx.getSystemInfoSync().statusBarHeight,
    settingMaxHeight: wx.getSystemInfoSync().screenHeight * 0.6,
    settingEnable: false,
    games: [{
        name: "Apex Legends",
        nameCn: "Apex传奇",
        image: "images/Apex.jpg",
        imageMode: "aspectFill",
        url: "/pages/GamesPage/Apex/pages/apex"
      },
      /*{
        name: "Forza Horizon 5",
        nameCn: "极限竞速：地平线5",
        image: "images/fz5.jpg",
        imageMode: "aspectFill",
        url: "/pages/GamesPage/Forza5/pages/forza5"
      }*/
    ],
    buttons: [{
      url: '/pages/Icons/option-white.png',
      name: '全局设置',
      click: 'settingEnable'
    }],
    settings: [{
      name: "进入小程序自动切换到上次的游戏页面",
      comment: "",
      father: [],
      value: "autoLastPage",
      index: 0,
      disabled: false,
      checked: true
    }]
  },
  //游戏点击响应
  bindGameTap: function (e) {
    wx.setStorage({
      key: "lastPage",
      data: e.currentTarget.dataset.index
    })
    wx.navigateTo({
      url: this.data.games[e.currentTarget.dataset.index].url
    })
  },
  settingEnable: function (e) {
    this.setData({
      "settingEnable": true
    })
  },
  disableSettings: function (e) {
    this.setData({
      "settingEnable": false
    });
    wx.setStorage({
      key: "globalSetting",
      data: this.data.settings
    })
  },
  settingChange: function (e) {
    const settings = this.data.settings
    const values = e.detail.value
    var modObj  = new Object()
    for (let i = 0; i < settings.length; i++) {
        modObj['settings[' + i + '].checked'] = false
        for (let j = 0; j < values.length; j++) {
            if (values[j] === settings[i].value) {
                modObj['settings[' + i + '].checked'] = true
                break;
            }
        }
    }
    this.setData(modObj)
},
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onLoad: function (options) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    try {
      var modObj = new Object()
      var settingGet = wx.getStorageSync('globalSetting')
      for (let i = 0; i < settingGet.length; i++) {
        modObj["settings[" + i + "].checked"] = settingGet[i].checked
        modObj["settings[" + i + "].disabled"] = settingGet[i].disabled
      }
      if(this.data.lastPage===-1){
        var lastPage = wx.getStorageSync('lastPage')
        modObj["lastPage"] = lastPage
      }
      this.setData(modObj)
    } catch (e) {
      console.log(e)
    }
  },
  onShow: function (e) {
    if (this.data.settings[0].checked && this.data.games[this.data.lastPage]!=undefined) {
      const url = this.data.games[this.data.lastPage].url
      this.setData({"lastPage":-2})
      wx.navigateTo({
        url: url
      })
    }
  }
})