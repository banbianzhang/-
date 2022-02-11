// pages/GamesPage/Apex/apex.js
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
                url: "/pages/Icons/Apex.png",
                name: "我的传奇",
                main: false,
                text_color: 'white',
                click: 'callLegendSetting'
            }
        ],
        legend_image_height: wx.getSystemInfoSync().screenWidth * 1.68,
        bg_height: wx.getSystemInfoSync().screenHeight - wx.getSystemInfoSync().screenWidth * 0.86 * 0.6,
        settingMaxHeight: wx.getSystemInfoSync().screenHeight * 0.6,
        legends: [{
            name: '寻血猎犬',
            comment: '众神之父赐予我重伤倒地'
        }, {
            name: '直布罗陀',
            comment: '哈哈，给我的兄弟们放点掩护'
        }, {
            name: '命脉',
            comment: '你们的生日礼物来了'
        }, {
            name: '探路者',
            comment: '这里有一个马文'
        }, {
            name: '恶灵',
            comment: '开始相位转移'
        }, {
            name: '班加罗尔',
            comment: '投出烟雾弹'
        }, {
            name: '侵蚀',
            comment: '正在放置自变量'
        }, {
            name: '幻象',
            comment: '你上当了'
        }, {
            name: '动力小子',
            comment: '再快点，再快点'
        }, {
            name: '沃特森',
            comment: '风暴之眼'
        }, {
            name: '密客',
            comment: '切换到无人机视野，注意掩护我'
        }, {
            name: '亡灵',
            comment: '闭嘴，臭皮囊'
        }, {
            name: '罗芭',
            comment: '妈妈找到个新背包'
        }, {
            name: '兰伯特',
            comment: '让他们见识一下塞拉的厉害'
        }, {
            name: '地平线',
            comment: '这里有个升空装置'
        }, {
            name: '暴雷',
            comment: '广域轰炸要来啦'
        }, {
            name: '瓦尔基里',
            comment: '展翅高飞'
        }, {
            name: '希尔',
            comment: '揭开他们的面纱'
        }, {
            name: '艾许',
            comment: '铁驭，你犯了大忌。啊（*死前尖叫*）'
        }],
        weapons: [{
            name: "重型弹药武器",
            type: "ammo",
            single: false,
            desc: "平行、辅助手枪、暴走、3030、猎兽、赫姆洛克",
            airdrop: false,
            wtype: -1,
            ammo: 1,
            index: 1
        }, {
            name: "轻型弹药武器",
            type: "ammo",
            single: false,
            desc: "P2020、RE-45、R301、R99、G7、CAR",
            airdrop: false,
            wtype: -2,
            ammo: 2,
            index: 2
        }, {
            name: "能量弹药武器",
            type: "ammo",
            single: false,
            desc: "哈沃克、电能、专注、L-STAR",
            airdrop: false,
            wtype: -3,
            ammo: 4,
            index: 3
        }, {
            name: "狙击枪弹药武器",
            type: "ammo",
            single: true,
            desc: "长弓、充能、哨兵",
            airdrop: false,
            wtype: 1,
            ammo: 8,
            index: 4
        }, {
            name: "霰弹枪弹药武器",
            type: "ammo",
            single: true,
            desc: "莫桑比克、EVA-8、敖犬、和平",
            airdrop: false,
            wtype: 2,
            ammo: 16,
            index: 5
        }, {
            name: "箭矢武器",
            type: "ammo",
            single: true,
            desc: "波塞克",
            airdrop: false,
            wtype: -4,
            ammo: 32,
            index: 6
        }, {
            name: "狙击枪",
            type: "type",
            single: true,
            desc: "长弓、充能、哨兵、克雷贝尔",
            airdrop: false,
            wtype: 1,
            ammo: 8,
            index: 7
        }, {
            name: "霰弹枪",
            type: "type",
            single: true,
            desc: "莫桑比克、EVA-8、敖犬、和平",
            airdrop: false,
            wtype: 2,
            ammo: 16,
            index: 8
        }, {
            name: "手枪",
            type: "type",
            single: true,
            desc: "P2020、RE-45、辅助手枪",
            airdrop: false,
            wtype: 3,
            ammo: 3,
            index: 9
        }, {
            name: "突击步枪",
            type: "type",
            single: false,
            desc: "R301、平行、赫姆洛克、哈沃克",
            airdrop: false,
            wtype: 4,
            ammo: 7,
            index: 10
        }, {
            name: "冲锋枪",
            type: "type",
            single: false,
            desc: "R99、电能、猎兽、转换者",
            airdrop: false,
            wtype: 5,
            ammo: 6,
            index: 11
        }, {
            name: "神射手武器",
            type: "type",
            single: true,
            desc: "三重、3030、G7、波塞克",
            airdrop: false,
            wtype: 6,
            ammo: 35,
            index: 12
        }, {
            name: "轻机枪",
            type: "type",
            single: false,
            desc: "喷火、暴雷、L-STAR、专注",
            airdrop: false,
            wtype: 7,
            ammo: 5,
            index: 13
        }, {
            name: "P2020",
            type: "weapon",
            single: true,
            airdrop: false,
            wtype: 3,
            ammo: 2,
            index: 14
        }, {
            name: "辅助手枪",
            type: "weapon",
            single: true,
            airdrop: false,
            wtype: 3,
            ammo: 1,
            index: 15
        }, {
            name: "RE-45",
            type: "weapon",
            single: false,
            airdrop: false,
            wtype: 3,
            ammo: 2,
            index: 16
        }, {
            name: "R301",
            type: "weapon",
            single: false,
            airdrop: false,
            wtype: 4,
            ammo: 2,
            index: 17
        }, {
            name: "平行步枪",
            type: "weapon",
            single: false,
            airdrop: false,
            wtype: 4,
            ammo: 1,
            index: 18
        }, {
            name: "赫姆洛克突击步枪",
            type: "weapon",
            single: false,
            airdrop: false,
            wtype: 4,
            ammo: 1,
            index: 19
        }, {
            name: "哈沃克步枪",
            type: "weapon",
            single: false,
            airdrop: false,
            wtype: 4,
            ammo: 4,
            index: 20
        }, {
            name: "R99",
            type: "weapon",
            single: false,
            airdrop: false,
            wtype: 5,
            ammo: 2,
            index: 21
        }, {
            name: "猎兽冲锋枪",
            type: "weapon",
            single: false,
            airdrop: false,
            wtype: 5,
            ammo: 1,
            index: 22
        }, {
            name: "电能冲锋枪",
            type: "weapon",
            single: false,
            airdrop: false,
            wtype: 5,
            ammo: 4,
            index: 23
        }, {
            name: "转换者冲锋枪",
            type: "weapon",
            single: false,
            airdrop: true,
            wtype: 5,
            ammo: 0,
            index: 24
        }, {
            name: "G7侦察枪",
            type: "weapon",
            single: true,
            airdrop: true,
            wtype: 6,
            ammo: 2,
            index: 25
        }, {
            name: "30-30连发枪",
            type: "weapon",
            single: true,
            airdrop: false,
            wtype: 6,
            ammo: 1,
            index: 26
        }, {
            name: "波塞克复合弓",
            type: "weapon",
            single: true,
            airdrop: false,
            wtype: 6,
            ammo: 32,
            index: 27
        }, {
            name: "三重式狙击枪",
            type: "weapon",
            single: true,
            airdrop: false,
            wtype: 6,
            ammo: 0,
            index: 28
        }, {
            name: "暴走",
            type: "weapon",
            single: false,
            airdrop: false,
            wtype: 7,
            ammo: 1,
            index: 29
        }, {
            name: "专注轻机枪",
            type: "weapon",
            single: false,
            airdrop: false,
            wtype: 7,
            ammo: 4,
            index: 30
        }, {
            name: "L-STAR",
            type: "weapon",
            single: false,
            airdrop: false,
            wtype: 7,
            ammo: 4,
            index: 31
        }, {
            name: "喷火轻机枪",
            type: "weapon",
            single: false,
            airdrop: true,
            wtype: 7,
            ammo: 0,
            index: 32
        }, {
            name: "长弓精确步枪",
            type: "weapon",
            single: true,
            airdrop: false,
            wtype: 1,
            ammo: 8,
            index: 33
        }, {
            name: "充能步枪",
            type: "weapon",
            single: true,
            airdrop: false,
            wtype: 1,
            ammo: 8,
            index: 34
        }, {
            name: "哨兵狙击步枪",
            type: "weapon",
            single: true,
            airdrop: false,
            wtype: 1,
            ammo: 8,
            index: 35
        }, {
            name: "克雷贝尔狙击枪",
            type: "weapon",
            single: true,
            airdrop: true,
            wtype: 1,
            ammo: 0,
            index: 36
        }, {
            name: "莫桑比克",
            type: "weapon",
            single: true,
            airdrop: false,
            wtype: 2,
            ammo: 16,
            index: 37
        }, {
            name: "EVA-8",
            type: "weapon",
            single: true,
            airdrop: false,
            wtype: 2,
            ammo: 16,
            index: 38
        }, {
            name: "和平捍卫者",
            type: "weapon",
            single: true,
            airdrop: false,
            wtype: 2,
            ammo: 16,
            index: 39
        }, {
            name: "敖犬霰弹枪",
            type: "weapon",
            single: true,
            airdrop: false,
            wtype: 2,
            ammo: 16,
            index: 40
        },{
            name: "C·A·R",
            type: "weapon",
            single: false,
            airdrop: false,
            wtype: 6,
            ammo: 4,
            index: 41
        }],
        result: {
            legend: {},
            weapon1: {},
            weapon2: {}
        },
        ammoType: {
            start: 0,
            end: 5
        },
        typeType: {
            start: 6,
            end: 12
        },
        loading: true,
        initialize: false,
        legendsSelectCnt: true,
        settingEnable: false,
        legendSettingEnable: false,
        selectedLegends: [],
        settings: [{
            name: "允许随机武器",
            comment: "关闭后，结果只会随机传奇",
            father: [],
            value: "allowWeapon",
            index: 0,
            disabled: false,
            checked: true,
            default: true
        }, {
            name: "允许具体武器",
            comment: "关闭后，结果中不再出现具体的某个武器",
            father: [0],
            value: "allowSpecificWeapon",
            index: 1,
            disabled: false,
            checked: true,
            default: true
        }, {
            name: "允许弹药类型",
            comment: "关闭后，结果中不再有以弹药分类的武器",
            father: [0],
            value: "allowAmmoType",
            index: 2,
            disabled: false,
            checked: true,
            default: true
        }, {
            name: "允许武器类型",
            comment: "关闭后，结果中不再有以武器类型分类的武器",
            father: [0],
            value: "allowWeaponType",
            index: 3,
            disabled: false,
            checked: true,
            default: true
        }, {
            name: "允许相同武器",
            comment: "允许出现两种完全相同的武器的情况",
            father: [0, 1],
            value: "allowSameWeapon",
            index: 4,
            disabled: false,
            checked: false,
            default: false
        }, {
            name: "允许相同弹药类型",
            comment: "允许出现两种武器弹药类型相同的情况",
            father: [0],
            value: "allowSameAmmo",
            index: 5,
            disabled: false,
            checked: false,
            default: false
        }, {
            name: "允许相同武器类型",
            comment: "允许出现两种武器的武器类型相同的情况",
            father: [0],
            value: "allowSameType",
            index: 6,
            disabled: false,
            checked: false,
            default: false
        }, {
            name: "允许双持单发射击武器",
            comment: "三连发不属于单发武器；手枪有RE45但属于单发武器",
            father: [0],
            value: "allowTwoSingle",
            index: 7,
            disabled: false,
            checked: false,
            default: false
        }, {
            name: "允许空投武器",
            comment: "",
            father: [0],
            value: "allowAirDrop",
            index: 8,
            disabled: false,
            checked: false,
            default: false
        }, {
            name: "允许弓箭",
            comment: "终于可以不用玩弓箭啦！",
            father: [0],
            value: "allowBow",
            index: 9,
            disabled: false,
            checked: false,
            default: true
        }]
    },

    getResult: function () {
        let legendsSelectCnt = false;
        for (let i = 0; i < this.data.selectedLegends.length; i++) {
            if (this.data.selectedLegends[i]) {
                legendsSelectCnt = true;
                break;
            }
        }
        this.setData({
            "initialize": true,
            "legendsSelectCnt": legendsSelectCnt
        })
        if (legendsSelectCnt == false) {
            return;
        }
        var rand = 0
        do {
            rand = Math.floor(Math.random() * this.data.legends.length)
        } while (!this.data.selectedLegends[rand])
        this.setData({
            "result.legend": this.data.legends[rand]
        })
        if (!this.data.settings[0].checked)
            return
        var end = 0;
        var start = 0;
        var flag = 0;
        if (this.data.settings[2].checked)
            flag += 100;
        if (this.data.settings[3].checked)
            flag += 10;
        if (this.data.settings[1].checked)
            flag += 1;
        switch (flag) {
            case 111:
                start = this.data.ammoType.start
                end = this.data.weapons.length - 1
                break;
            case 110:
                start = this.data.ammoType.start
                end = this.data.typeType.end
                break;
            case 101:
                start = this.data.typeType.end + 1
                end = this.data.ammoType.end
                break;
            case 100:
                start = this.data.ammoType.start
                end = this.data.ammoType.end
                break;
            case 11:
                start = this.data.typeType.start
                end = this.data.weapons.length - 1
                break;
            case 10:
                start = this.data.typeType.start
                end = this.data.typeType.end
                break;
            case 1:
                start = this.data.typeType.end + 1
                end = this.data.weapons.length - 1
                break;
            case 0:
                return;
            default:
                return;
        }
        var len = end - start + 1
        if (flag === 101) {
            len = this.data.weapons.length - (this.data.typeType.end - this.data.typeType.start + 1)
        }
        var wRand1 = 0
        var wRand2 = 0
        var weapon1;
        var weapon2;
        do {
            wRand1 = Math.floor(start + Math.random() * (len - 1)) % this.data.weapons.length
            weapon1 = this.data.weapons[wRand1];
        } while ((!this.data.settings[8].checked && weapon1.airdrop) ||
                (!this.data.settings[9].checked && weapon1.ammo === 32))
        do {
            wRand2 = Math.floor(start + Math.random() * (len - 1)) % this.data.weapons.length
            weapon2 = this.data.weapons[wRand2];
        } while ((!this.data.settings[8].checked && weapon2.airdrop) ||
            ((!this.data.settings[4].checked && weapon1.name === weapon2.name && weapon1.type === "weapon") ||
                (!this.data.settings[5].checked && weapon1.ammo === weapon2.ammo && weapon1.type != "type") ||
                (!this.data.settings[6].checked && weapon1.wtype === weapon2.wtype && weapon1.type != "ammo") ||
                (!this.data.settings[7].checked && weapon1.single && weapon2.single) ||
                (!this.data.settings[9].checked && weapon2.ammo === 32))
        );
        this.setData({
            "result.weapon1": this.data.weapons[wRand1],
            "result.weapon2": this.data.weapons[wRand2]
        })
    },

    callSetting: function () {
        this.setData({
            "settingEnable": true
        });
    },

    callLegendSetting: function () {
        this.setData({
            "legendSettingEnable": true
        });
    },

    disableSettings: function () {
        this.setData({
            "legendSettingEnable": false,
            "settingEnable": false
        });
        wx.setStorage({
            key: "selectedLegends",
            data: this.data.selectedLegends
        })
        wx.setStorage({
            key: "apexSetting",
            data: this.data.settings
        })
    },

    closeLoading: function () {
        this.setData({
            'loading': false
        })
    },

    cleanCache: function () {
        try {
            wx.removeStorageSync("apexSetting")
            wx.removeStorageSync("selectedLegends")
        } catch (e) {
            console.log(e)
        }
        //重置默认值
        var modObj = new Object()
        for (let i = 0; i < this.data.legends.length; i++) {
            modObj["selectedLegends[" + i + "]"] = true;
        }
        for (let i = 0; i < this.data.settings.length; i++) {
            modObj['settings[' + i + '].checked'] = this.data.settings[i].default;
            modObj['settings[' + i + '].disabled'] = false;
        }
        this.setData(modObj)
        this.setData({
            "legendSettingEnable": false,
            "settingEnable": false
        });
    },

    selectLegend: function (e) {
        var index = e.currentTarget.dataset.index
        this.setData({
            ["selectedLegends[" + index + "]"]: !(this.data.selectedLegends[index])
        })
    },

    weaponSettingChange: function (e) {
        const settings = this.data.settings
        const values = e.detail.value
        var modObj = new Object()
        for (let i = 0; i < settings.length; i++) {
            modObj['settings[' + i + '].checked'] = false
            for (let j = 0; j < values.length; j++) {
                if (values[j] === settings[i].value) {
                    modObj['settings[' + i + '].checked'] = true
                    break;
                }
            }
            var flag = false;
            for (let j = 0; j < settings[i].father.length; j++) {
                let fatherIndex = settings[i].father[j]
                if (!modObj['settings[' + fatherIndex + '].checked'] ||
                    modObj['settings[' + fatherIndex + '].disabled']) {
                    flag = true;
                    break;
                }
            }
            modObj['settings[' + i + '].disabled'] = flag
        }
        this.setData(modObj)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            "selectedLegends": new Array(this.data.legends.length)
        });
        try {
            var selectedLegendsGet = wx.getStorageSync('selectedLegends')
            var modObj = new Object()
            for (var i = 0; i < this.data.legends.length; i++) {
                if (selectedLegendsGet != undefined && i < selectedLegendsGet.length) {
                    modObj["selectedLegends[" + i + "]"] = selectedLegendsGet[i]
                } else {
                    modObj["selectedLegends[" + i + "]"] = true
                }
            }
            this.setData(modObj)
        } catch (e) {
            console.log(e)
        }
        try {
            var modObj = new Object()
            var settingGet = wx.getStorageSync('apexSetting')
            for (let i = 0; i < settingGet.length; i++) {
                modObj["settings[" + i + "].checked"] = settingGet[i].checked
                modObj["settings[" + i + "].disabled"] = settingGet[i].disabled
            }
            this.setData(modObj)
        } catch (e) {
            console.log(e)
        }
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