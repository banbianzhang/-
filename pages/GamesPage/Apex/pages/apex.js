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
                text_color: 'white'
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
                text_color: 'white'
            }
        ],
        bg_height: wx.getSystemInfoSync().screenHeight - wx.getSystemInfoSync().statusBarHeight,
        legends: [{
            name: '寻血猎犬',
            comment: '众神之父赐予我重伤倒地'
        },{
            name: '直布罗陀',
            comment: '哈哈，给我的兄弟们放点掩护'
        },{
            name: '命脉',
            comment: '你们的生日礼物来了'
        },{
            name: '探路者',
            comment: '这里有一个马文'
        },{
            name: '恶灵',
            comment: '开始相位转移'
        },{
            name: '班加罗尔',
            comment: '投出烟雾弹'
        },{
            name: '侵蚀',
            comment: '正在放置自变量'
        },{
            name: '幻象',
            comment: '你上当了'
        },{
            name: '动力小子',
            comment: '再快点，再快点'
        },{
            name: '沃特森',
            comment: '风暴之眼'
        },{
            name: '密客',
            comment: '切换到无人机视野，注意掩护我'
        },{
            name: '亡灵',
            comment: '闭嘴，臭皮囊'
        },{
            name: '罗芭',
            comment: '妈妈找到个新背包'
        },{
            name: '兰伯特',
            comment: '让他们见识一下塞拉的厉害'
        },{
            name: '地平线',
            comment: '这里有个升空装置'
        },{
            name: '暴雷',
            comment: '广域轰炸要来啦'
        },{
            name: '瓦尔基里',
            comment: '展翅高飞'
        },{
            name: '希尔',
            comment: '揭开他们的面纱'
        },{
            name: '艾许',
            comment: '铁驭，你犯了大忌。啊（*死前尖叫*）'
        }],
        weapons:[
            {
                name:"重型武器",
                type:"ammo",
                single:false,
                desc:"平行、辅助手枪、暴走、3030、猎兽、赫姆洛克"
            },{
                name:"轻型武器",
                type:"ammo",
                single:false,
                desc:"P2020、RE-45、R301、R99、G7"
            },{
                name:"能量武器",
                type:"ammo",
                single:false,
                desc:"哈沃克、电能、专注、L-STAR"
            },{
                name:"狙击枪弹药武器",
                type:"ammo",
                single:false,
                single:true,
                desc:"长弓、充能、哨兵"
            },{
                name:"霰弹枪弹药武器",
                type:"ammo",
                single:true,
                desc:"莫桑比克、EVA-8、敖犬、和平"
            },{
                name:"箭矢武器",
                type:"ammo",
                single:true,
                desc:"波塞克"
            },{
                name:"狙击枪",
                type:"type",
                single:true,
                desc:"长弓、充能、哨兵、克雷贝尔"
            },{
                name:"霰弹枪",
                type:"type",
                single:true,
                desc:"莫桑比克、EVA-8、敖犬、和平"
            },{
                name:"手枪",
                type:"type",
                single:false,
                desc:"P2020、RE-45、辅助手枪"
            },{
                name:"突击步枪",
                type:"type",
                single:false,
                desc:"R301、平行、赫姆洛克、哈沃克"
            },{
                name:"冲锋枪",
                type:"type",
                single:false,
                desc:"R99、电能、猎兽、转换者"
            },{
                name:"神射手武器",
                type:"type",
                single:true,
                desc:"三重、3030、G7、波塞克"
            },{
                name:"轻机枪",
                type:"type",
                single:false,
                desc:"喷火、暴雷、L-STAR、专注"
            },{
                name:"P2020",
                type:"weapon",
                single:true,
                airdrop:false
            },{
                name:"辅助手枪",
                type:"weapon",
                single:true,
                airdrop:false
            },{
                name:"Re-45",
                type:"weapon",
                single:false,
                airdrop:false
            },{
                name:"R301",
                type:"weapon",
                single:false,
                airdrop:false
            },{
                name:"平行步枪",
                type:"weapon",
                single:false,
                airdrop:false
            },{
                name:"赫姆洛克突击步枪",
                type:"weapon",
                single:false,
                airdrop:false
            },{
                name:"哈沃克步枪",
                type:"weapon",
                single:false,
                airdrop:false
            },{
                name:"R99",
                type:"weapon",
                single:false,
                airdrop:false
            },{
                name:"猎兽冲锋枪",
                type:"weapon",
                single:false,
                airdrop:false
            },{
                name:"电能冲锋枪",
                type:"weapon",
                single:false,
                airdrop:false
            },{
                name:"转换者冲锋枪",
                type:"weapon",
                single:false,
                airdrop:true
            },{
                name:"G7侦察枪",
                type:"weapon",
                single:true,
                airdrop:false
            },{
                name:"30-30连发枪",
                type:"weapon",
                single:true,
                airdrop:false
            },{
                name:"波塞克复合弓",
                type:"weapon",
                single:true,
                airdrop:false
            },{
                name:"三重式狙击枪",
                type:"weapon",
                single:true,
                airdrop:true
            },{
                name:"暴走",
                type:"weapon",
                single:false,
                airdrop:false
            },{
                name:"专注轻机枪",
                type:"weapon",
                single:false,
                airdrop:false
            },{
                name:"L-STAR能量步枪",
                type:"weapon",
                single:false,
                airdrop:false
            },{
                name:"喷火轻机枪",
                type:"weapon",
                single:false,
                airdrop:true
            },{
                name:"长弓精确步枪",
                type:"weapon",
                single:true,
                airdrop:false
            },{
                name:"充能步枪",
                type:"weapon",
                single:true,
                airdrop:false
            },{
                name:"哨兵狙击步枪",
                type:"weapon",
                single:true,
                airdrop:false
            },{
                name:"克雷贝尔狙击枪",
                type:"weapon",
                single:true,
                airdrop:true
            },{
                name:"莫桑比克",
                type:"weapon",
                single:true,
                airdrop:false
            },{
                name:"EVA-8",
                type:"weapon",
                single:true,
                airdrop:false
            },{
                name:"和平捍卫者",
                type:"weapon",
                single:true,
                airdrop:false
            },{
                name:"敖犬霰弹枪",
                type:"weapon",
                single:true,
                airdrop:false
            }
        ],
        result: {
            legend: {},
            weapon1:{},
            weapon2:{}
        },
        options:{
            allowSameGun:false,
            allowSpecificWeapon:true,
            allowAmmoType:true,
            allowWeaponType:true,
            allowAirDrop:false
        },
        ammoType:{
            start:0,
            end:5
        },
        typeType:{
            start:6,
            end:12
        }
    },
    
    getResult: function () {
        var rand = Math.floor(Math.random() * this.data.legends.length)
        this.setData({"result.legend":this.data.legends[rand]})
        var end = 0;
        var start = 0;
        var flag = 0;
        if(this.data.options.allowAmmoType)
            flag+=100;
        if(this.data.options.allowWeaponType)
            flag+=10;
        if(this.data.options.allowSpecificWeapon)
            flag+=1;
        switch(flag){
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
        var len = end-start+1
        if(flag === 101){
            len = this.data.weapons.length - ( this.data.typeType.end -  this.data.typeType.start + 1)
        }
        var wRand1=0
        var wRand2=0
        do{
            wRand1 = Math.floor(start + Math.random() * (len - 1)) % this.data.weapons.length
        }while(!this.data.options.allowAirDrop && this.data.weapons[wRand1].airdrop);
        do{
            wRand2 = Math.floor(start + Math.random() * (len - 1)) % this.data.weapons.length
        }while((!this.data.options.allowAirDrop && this.data.weapons[wRand2].airdrop) && 
        (!this.data.options.allowSameGun && wRand2 === wRand1));
        this.setData({"result.weapon1":this.data.weapons[wRand1]})
        this.setData({"result.weapon2":this.data.weapons[wRand2]})
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