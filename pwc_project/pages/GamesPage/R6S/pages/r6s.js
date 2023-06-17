// pages/GamesPage/R6s/r6s.js
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
        url: "/pages/Icons/dice-grey.png",
        name: "一键白给",
        main: true,
        text_color: '#555555',
        click: 'getResult',
        text_extra: 'font-family: 黑体; font-weight: 700; '
      },
      {
        url: "/pages/Icons/r6s.png",
        name: "我的干员",
        main: false,
        text_color: 'white',
        click: 'callLegendSetting'
      }
    ],
    legend_image_height: wx.getSystemInfoSync().screenWidth * 1.48,
    bg_height: wx.getSystemInfoSync().screenHeight - wx.getSystemInfoSync().screenWidth * 0.86 * 0.6,
    settingMaxHeight: wx.getSystemInfoSync().screenHeight * 0.6,
    legends: [
      {
          "name": "Sledge",
          "position": "atk",
          "speed": 1,
          "armor": 3,
          "team": "Redhammer",
          "troop": "SAS",
          "weapon": [
              "L85A2",
              "M590A1"
          ],
          "subweapon": [
              "P226 MK 25"
          ],
          "gadget": [
              "手雷",
              "眩晕手榴弹",
              "电磁脉冲式冲击弹"
          ]
      },
      {
          "name": "Smoke",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "NIGHTHAVEN",
          "troop": "SAS",
          "weapon": [
              "FMG-9",
              "M590A1"
          ],
          "subweapon": [
              "SMG-11",
              "P226 MK 25"
          ],
          "gadget": [
              "倒刺铁丝网",
              "感应警报器"
          ]
      },
      {
          "name": "Thatcher",
          "position": "atk",
          "speed": 1,
          "armor": 3,
          "team": "Viperstrike",
          "troop": "SAS",
          "weapon": [
              "L85A2",
              "AR33",
              "M590A1"
          ],
          "subweapon": [
              "P226 MK 25"
          ],
          "gadget": [
              "爆破炸药",
              "阔剑地雷"
          ]
      },
      {
          "name": "Mute",
          "position": "def",
          "speed": 1,
          "armor": 3,
          "team": "Viperstrike",
          "troop": "SAS",
          "weapon": [
              "MP5K",
              "M590A1"
          ],
          "subweapon": [
              "SMG-11",
              "P226 MK 25"
          ],
          "gadget": [
              "遥控炸药",
              "防弹摄像头"
          ]
      },
      {
          "name": "Ash",
          "position": "atk",
          "speed": 3,
          "armor": 1,
          "team": "Redhammer",
          "troop": "FBI SWAT",
          "weapon": [
              "G36C",
              "R4-C"
          ],
          "subweapon": [
              "M45 MEUSOC",
              "5.7 USG"
          ],
          "gadget": [
              "爆破炸药",
              "阔剑地雷"
          ]
      },
      {
          "name": "Castle",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Wolfguard",
          "troop": "FBI SWAT",
          "weapon": [
              "UMP45",
              "M1014"
          ],
          "subweapon": [
              "M45 MEUSOC",
              "5.7 USG",
              "Super Shorty"
          ],
          "gadget": [
              "感应警报器",
              "防弹摄像头"
          ]
      },
      {
          "name": "Thermite",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "Redhammer",
          "troop": "FBI SWAT",
          "weapon": [
              "556XI",
              "M1014"
          ],
          "subweapon": [
              "M45 MEUSOC",
              "5.7 USG"
          ],
          "gadget": [
              "烟雾弹",
              "眩晕手榴弹"
          ]
      },
      {
          "name": "Pulse",
          "position": "def",
          "speed": 3,
          "armor": 1,
          "team": "NIGHTHAVEN",
          "troop": "FBI SWAT",
          "weapon": [
              "UMP45",
              "M1014"
          ],
          "subweapon": [
              "M45 MEUSOC",
              "5.7 USG"
          ],
          "gadget": [
              "机动护盾",
              "遥控炸药",
              "观测工具阻拦器"
          ]
      },
      {
          "name": "Twitch",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "Wolfguard",
          "troop": "GIGN",
          "weapon": [
              "F2",
              "417",
              "SG-CQB"
          ],
          "subweapon": [
              "P9",
              "LFP586"
          ],
          "gadget": [
              "阔剑地雷",
              "烟雾弹"
          ]
      },
      {
          "name": "Doc",
          "position": "def",
          "speed": 1,
          "armor": 3,
          "team": "Wolfguard",
          "troop": "GIGN",
          "weapon": [
              "MP5",
              "P90",
              "SG-CQB"
          ],
          "subweapon": [
              "P9",
              "LFP586",
              "Bailiff 410"
          ],
          "gadget": [
              "防弹摄像头",
              "倒刺铁丝网"
          ]
      },
      {
          "name": "Montagne",
          "position": "atk",
          "speed": 1,
          "armor": 3,
          "team": "Wolfguard",
          "troop": "GIGN",
          "weapon": [
            "磐石伸缩盾"
          ],
          "subweapon": [
              "P9",
              "LFP586"
          ],
          "gadget": [
              "硬突破炸药",
              "烟雾弹",
              "电磁脉冲式冲击弹"
          ]
      },
      {
          "name": "Rook",
          "position": "def",
          "speed": 1,
          "armor": 3,
          "team": "Viperstrike",
          "troop": "GIGN",
          "weapon": [
              "MP5",
              "P90",
              "SG-CQB"
          ],
          "subweapon": [
              "P9",
              "LFP586"
          ],
          "gadget": [
              "感应警报器",
              "冲击手榴弹",
              "观测工具阻拦器"
          ]
      },
      {
          "name": "Glaz",
          "position": "atk",
          "speed": 3,
          "armor": 1,
          "team": "Ghosteyes",
          "troop": "Spetsnaz",
          "weapon": [
              "OTs-03"
          ],
          "subweapon": [
              "BEARING 9",
              "PMM",
              "GONNE-6"
          ],
          "gadget": [
              "烟雾弹",
              "手雷",
              "阔剑地雷"
          ]
      },
      {
          "name": "Kapkan",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Redhammer",
          "troop": "Spetsnaz",
          "weapon": [
              "9x19VSN",
              "SASG-12"
          ],
          "subweapon": [
              "PMM",
              "GSH-18"
          ],
          "gadget": [
              "冲击手榴弹",
              "遥控炸药"
          ]
      },
      {
          "name": "Fuze",
          "position": "atk",
          "speed": 1,
          "armor": 3,
          "team": "Redhammer",
          "troop": "Spetsnaz",
          "weapon": [
              "防弹护盾",
              "AK-12",
              "6P41"
          ],
          "subweapon": [
              "PMM",
              "GSH-18"
          ],
          "gadget": [
              "爆破炸药",
              "硬突破炸药",
              "烟雾弹"
          ]
      },
      {
          "name": "Tachanka",
          "position": "def",
          "speed": 1,
          "armor": 3,
          "team": "Redhammer",
          "troop": "Spetsnaz",
          "weapon": [
              "9x19VSN",
              "DP27"
          ],
          "subweapon": [
              "BEARING 9",
              "PMM",
              "GSH-18"
          ],
          "gadget": [
              "倒刺铁丝网",
              "机动护盾",
              "感应警报器"
          ]
      },
      {
          "name": "Blitz",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "Viperstrike",
          "troop": "GSG 9",
          "weapon": [
            "G52型闪光战术盾牌"
          ],
          "subweapon": [
              "P12"
          ],
          "gadget": [
              "爆破炸药",
              "烟雾弹"
          ]
      },
      {
          "name": "Jager",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Viperstrike",
          "troop": "GSG 9",
          "weapon": [
              "416-C CARBINE",
              "M870"
          ],
          "subweapon": [
              "P12"
          ],
          "gadget": [
              "防弹摄像头",
              "观测工具阻拦器"
          ]
      },
      {
          "name": "IQ",
          "position": "atk",
          "speed": 3,
          "armor": 1,
          "team": "NIGHTHAVEN",
          "troop": "GSG 9",
          "weapon": [
              "AUG A2",
              "552 Commando",
              "G8A1"
          ],
          "subweapon": [
              "P12"
          ],
          "gadget": [
              "爆破炸药",
              "阔剑地雷"
          ]
      },
      {
          "name": "Bandit",
          "position": "def",
          "speed": 3,
          "armor": 1,
          "team": "Wolfguard",
          "troop": "GSG 9",
          "weapon": [
              "MP7",
              "M870"
          ],
          "subweapon": [
              "P12"
          ],
          "gadget": [
              "倒刺铁丝网",
              "遥控炸药"
          ]
      },
      {
          "name": "Buck",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "Redhammer",
          "troop": "JTF-2",
          "weapon": [
              "C8-SFW",
              "CAMRS"
          ],
          "subweapon": [
              "MK1 9mm",
              "GONNE-6"
          ],
          "gadget": [
              "硬突破炸药",
              "眩晕手榴弹"
          ]
      },
      {
          "name": "Frost",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Wolfguard",
          "troop": "JTF-2",
          "weapon": [
              "9mm C1",
              "SUPER 90"
          ],
          "subweapon": [
              "MK1 9mm",
              "ITA12S"
          ],
          "gadget": [
              "防弹摄像头",
              "机动护盾"
          ]
      },
      {
          "name": "Blackbeard",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "Viperstrike",
          "troop": "Navy SEALS",
          "weapon": [
              "MK17 CQB",
              "SR-25"
          ],
          "subweapon": [
              "D-50"
          ],
          "gadget": [
              "阔剑地雷",
              "眩晕手榴弹",
              "电磁脉冲式冲击弹"
          ]
      },
      {
          "name": "Valkyrie",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Ghosteyes",
          "troop": "Navy SEALS",
          "weapon": [
              "MPX",
              "SPAS-12"
          ],
          "subweapon": [
              "D-50"
          ],
          "gadget": [
              "冲击手榴弹",
              "遥控炸药"
          ]
      },
      {
          "name": "Capitao",
          "position": "atk",
          "speed": 3,
          "armor": 1,
          "team": "Viperstrike",
          "troop": "BOPE",
          "weapon": [
              "PARA-308",
              "M249"
          ],
          "subweapon": [
              "PRB92",
              "GONNE-6"
          ],
          "gadget": [
              "阔剑地雷",
              "硬突破炸药"
          ]
      },
      {
          "name": "Caveira",
          "position": "def",
          "speed": 3,
          "armor": 1,
          "team": "Ghosteyes",
          "troop": "BOPE",
          "weapon": [
              "M12",
              "SPAS-15"
          ],
          "subweapon": [
              "LUISON狼人手枪"
          ],
          "gadget": [
              "冲击手榴弹",
              "感应警报器",
              "观测工具阻拦器"
          ]
      },
      {
          "name": "Hibana",
          "position": "atk",
          "speed": 3,
          "armor": 1,
          "team": "Viperstrike",
          "troop": "SAT",
          "weapon": [
              "TYPE-89",
              "SUPERNOVA"
          ],
          "subweapon": [
              "BEARING 9",
              "P229"
          ],
          "gadget": [
              "爆破炸药",
              "眩晕手榴弹"
          ]
      },
      {
          "name": "Echo",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Viperstrike",
          "troop": "SAT",
          "weapon": [
              "MP5SD",
              "SUPERNOVA"
          ],
          "subweapon": [
              "BEARING 9",
              "P229"
          ],
          "gadget": [
              "冲击手榴弹",
              "机动护盾"
          ]
      },
      {
          "name": "Jackal",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "Viperstrike",
          "troop": "GEO",
          "weapon": [
              "C7E",
              "PDW9",
              "ITA12L"
          ],
          "subweapon": [
              "USP40",
              "ITA12S"
          ],
          "gadget": [
              "阔剑地雷",
              "烟雾弹"
          ]
      },
      {
          "name": "Mira",
          "position": "def",
          "speed": 1,
          "armor": 3,
          "team": "Viperstrike",
          "troop": "GEO",
          "weapon": [
              "Vector .45 ACP",
              "ITA12L"
          ],
          "subweapon": [
              "USP40",
              "ITA12S"
          ],
          "gadget": [
              "感应警报器",
              "遥控炸药"
          ]
      },
      {
          "name": "Ying",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "Wolfguard",
          "troop": "SDU",
          "weapon": [
              "T-95 LSW",
              "SIX12"
          ],
          "subweapon": [
              "Q-929"
          ],
          "gadget": [
              "硬突破炸药",
              "烟雾弹"
          ]
      },
      {
          "name": "Lesion",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Ghosteyes",
          "troop": "SDU",
          "weapon": [
              "T-5 SMG",
              "SIX12 SD"
          ],
          "subweapon": [
              "Q-929"
          ],
          "gadget": [
              "冲击手榴弹",
              "防弹摄像头"
          ]
      },
      {
          "name": "Ela",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "NIGHTHAVEN",
          "troop": "GROM",
          "weapon": [
              "SCORPION EVO 3 A1",
              "FO-12"
          ],
          "subweapon": [
              "15型半自动手枪"
          ],
          "gadget": [
              "倒刺铁丝网",
              "机动护盾",
              "观测工具阻拦器"
          ]
      },
      {
          "name": "Zofia",
          "position": "atk",
          "speed": 1,
          "armor": 3,
          "team": "Ghosteyes",
          "troop": "GROM",
          "weapon": [
              "M762",
              "LMG-E"
          ],
          "subweapon": [
              "15型半自动手枪"
          ],
          "gadget": [
              "爆破炸药",
              "阔剑地雷"
          ]
      },
      {
          "name": "Dokkaebi",
          "position": "atk",
          "speed": 3,
          "armor": 1,
          "team": "Viperstrike",
          "troop": "707th SMB",
          "weapon": [
              "Mk 14 EBR",
              "BOSG.12.2"
          ],
          "subweapon": [
              "C75 Auto",
              "SMG-12",
              "GONNE-6"
          ],
          "gadget": [
              "烟雾弹",
              "眩晕手榴弹",
              "电磁脉冲式冲击弹"
          ]
      },
      {
          "name": "Vigil",
          "position": "def",
          "speed": 3,
          "armor": 1,
          "team": "Ghosteyes",
          "troop": "707th SMB",
          "weapon": [
              "K1A",
              "BOSG.12.2"
          ],
          "subweapon": [
              "C75 Auto",
              "SMG-12"
          ],
          "gadget": [
              "防弹摄像头",
              "冲击手榴弹"
          ]
      },
      {
          "name": "Lion",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "Wolfguard",
          "troop": "CBRN",
          "weapon": [
              "V308",
              "417",
              "SG-CQB"
          ],
          "subweapon": [
              "P9",
              "LFP586",
              "GONNE-6"
          ],
          "gadget": [
              "阔剑地雷",
              "眩晕手榴弹",
              "电磁脉冲式冲击弹"
          ]
      },
      {
          "name": "Finka",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "NIGHTHAVEN",
          "troop": "CBRN",
          "weapon": [
              "SPEAR .308",
              "6P41",
              "SASG-12"
          ],
          "subweapon": [
              "PMM",
              "GSH-18",
              "GONNE-6"
          ],
          "gadget": [
              "眩晕手榴弹",
              "烟雾弹"
          ]
      },
      {
          "name": "Alibi",
          "position": "def",
          "speed": 3,
          "armor": 1,
          "team": "Viperstrike",
          "troop": "GIS",
          "weapon": [
              "Mx4 Storm",
              "ACS12"
          ],
          "subweapon": [
              "KERATOS .357",
              "Bailiff 410"
          ],
          "gadget": [
              "感应警报器",
              "观测工具阻拦器"
          ]
      },
      {
          "name": "Maestro",
          "position": "def",
          "speed": 1,
          "armor": 3,
          "team": "Viperstrike",
          "troop": "GIS",
          "weapon": [
              "ALDA 5.56",
              "ACS12"
          ],
          "subweapon": [
              "KERATOS .357",
              "Bailiff 410"
          ],
          "gadget": [
              "倒刺铁丝网",
              "冲击手榴弹",
              "观测工具阻拦器"
          ]
      },
      {
          "name": "Maverick",
          "position": "atk",
          "speed": 3,
          "armor": 1,
          "team": "Ghosteyes",
          "troop": "GSUTR",
          "weapon": [
              "M4",
              "AR-15.50"
          ],
          "subweapon": [
              "1911 TACOPS"
          ],
          "gadget": [
              "阔剑地雷",
              "眩晕手榴弹"
          ]
      },
      {
          "name": "Clash",
          "position": "def",
          "speed": 1,
          "armor": 3,
          "team": "Wolfguard",
          "troop": "GSUTR",
          "weapon": [
            "防暴电击护盾"
          ],
          "subweapon": [
              "SPSMG9",
              "P-10C",
              "Super Shorty"
          ],
          "gadget": [
              "倒刺铁丝网",
              "冲击手榴弹",
              "机动护盾"
          ]
      },
      {
          "name": "Nomad",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "Wolfguard",
          "troop": "GIGR",
          "weapon": [
              "ARX200",
              "AK-74M"
          ],
          "subweapon": [
              "PRB92",
              "点44麦格农"
          ],
          "gadget": [
              "爆破炸药",
              "眩晕手榴弹"
          ]
      },
      {
          "name": "Kaid",
          "position": "def",
          "speed": 1,
          "armor": 3,
          "team": "Redhammer",
          "troop": "GIGR",
          "weapon": [
              "AUG A3",
              "TCSG12"
          ],
          "subweapon": [
              "LFP586",
              "点44麦格农"
          ],
          "gadget": [
              "遥控炸药",
              "倒刺铁丝网",
              "观测工具阻拦器"
          ]
      },
      {
          "name": "Gridlock",
          "position": "atk",
          "speed": 1,
          "armor": 3,
          "team": "Redhammer",
          "troop": "SASR",
          "weapon": [
              "F90",
              "M249 SAW"
          ],
          "subweapon": [
              "SDP 9mm",
              "Super Shorty",
              "GONNE-6"
          ],
          "gadget": [
              "爆破炸药",
              "烟雾弹",
              "电磁脉冲式冲击弹"
          ]
      },
      {
          "name": "Mozzie",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Ghosteyes",
          "troop": "SASR",
          "weapon": [
              "Commando 9",
              "P10 RONI转换套件衍生型"
          ],
          "subweapon": [
              "SDP 9mm"
          ],
          "gadget": [
              "倒刺铁丝网",
              "遥控炸药"
          ]
      },
      {
          "name": "Nokk",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "Ghosteyes",
          "troop": "Jaeger Corps",
          "weapon": [
              "FMG-9",
              "SIX12 SD"
          ],
          "subweapon": [
              "D-50"
          ],
          "gadget": [
              "硬突破炸药",
              "手雷",
              "电磁脉冲式冲击弹"
          ]
      },
      {
          "name": "Warden",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Ghosteyes",
          "troop": "USSS",
          "weapon": [
              "MPX",
              "M590A1"
          ],
          "subweapon": [
              "SMG-12",
              "P-10C"
          ],
          "gadget": [
              "机动护盾",
              "遥控炸药",
              "观测工具阻拦器"
          ]
      },
      {
          "name": "Amaru",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "Redhammer",
          "troop": "APCA",
          "weapon": [
              "G8A1",
              "SUPERNOVA"
          ],
          "subweapon": [
              "SMG-11",
              "ITA12S",
              "GONNE-6"
          ],
          "gadget": [
              "硬突破炸药",
              "眩晕手榴弹"
          ]
      },
      {
          "name": "Goyo",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Redhammer",
          "troop": "FES",
          "weapon": [
              "Vector .45 ACP",
              "TCSG12"
          ],
          "subweapon": [
              "P229"
          ],
          "gadget": [
              "感应警报器",
              "冲击手榴弹",
              "防弹摄像头"
          ]
      },
      {
          "name": "Kali",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "NIGHTHAVEN",
          "troop": "NIGHTHAVEN",
          "weapon": [
              "CSRX 300"
          ],
          "subweapon": [
              "C75 Auto",
              "SPSMG9",
              "P226 MK 25"
          ],
          "gadget": [
              "爆破炸药",
              "阔剑地雷"
          ]
      },
      {
          "name": "Wamai",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "NIGHTHAVEN",
          "troop": "NIGHTHAVEN",
          "weapon": [
              "AUG A2",
              "MP5K"
          ],
          "subweapon": [
              "P12",
              "KERATOS .357"
          ],
          "gadget": [
              "冲击手榴弹",
              "感应警报器"
          ]
      },
      {
          "name": "Iana",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "Ghosteyes",
          "troop": "REU",
          "weapon": [
              "G36C",
              "ARX200"
          ],
          "subweapon": [
              "MK1 9mm"
          ],
          "gadget": [
              "手雷",
              "烟雾弹"
          ]
      },
      {
          "name": "Oryx",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Redhammer",
          "troop": "独立个人",
          "weapon": [
              "T-5 SMG",
              "SPAS-12"
          ],
          "subweapon": [
              "USP40",
              "Bailiff 410"
          ],
          "gadget": [
              "倒刺铁丝网",
              "感应警报器"
          ]
      },
      {
          "name": "ACE",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "NIGHTHAVEN",
          "troop": "NIGHTHAVEN",
          "weapon": [
              "AK-12",
              "M1014"
          ],
          "subweapon": [
              "P9"
          ],
          "gadget": [
              "爆破炸药",
              "阔剑地雷"
          ]
      },
      {
          "name": "Melusi",
          "position": "def",
          "speed": 1,
          "armor": 3,
          "team": "Wolfguard",
          "troop": "ITF",
          "weapon": [
              "MP5",
              "SUPER 90"
          ],
          "subweapon": [
              "15型半自动手枪"
          ],
          "gadget": [
              "冲击手榴弹",
              "防弹摄像头"
          ]
      },
      {
          "name": "Zero",
          "position": "atk",
          "speed": 3,
          "armor": 1,
          "team": "Ghosteyes",
          "troop": "ROS",
          "weapon": [
              "SC3000K",
              "MP7"
          ],
          "subweapon": [
              "5.7 USG",
              "GONNE-6"
          ],
          "gadget": [
              "硬突破炸药",
              "阔剑地雷"
          ]
      },
      {
          "name": "Aruni",
          "position": "def",
          "speed": 1,
          "armor": 3,
          "team": "NIGHTHAVEN",
          "troop": "NIGHTHAVEN",
          "weapon": [
              "P10 RONI转换套件衍生型",
              "Mk 14 EBR"
          ],
          "subweapon": [
              "PRB92"
          ],
          "gadget": [
              "倒刺铁丝网",
              "防弹摄像头"
          ]
      },
      {
          "name": "Flores",
          "position": "atk",
          "speed": 2,
          "armor": 2,
          "team": "Ghosteyes",
          "troop": "独立个人",
          "weapon": [
              "AR33",
              "SR-25"
          ],
          "subweapon": [
              "GSH-18"
          ],
          "gadget": [
              "眩晕手榴弹",
              "阔剑地雷"
          ]
      },
      {
          "name": "Thunderbird",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Wolfguard",
          "troop": "STAR-NET Aviation",
          "weapon": [
              "SPEAR .308",
              "SPAS-15"
          ],
          "subweapon": [
              "BEARING 9",
              "Q-929"
          ],
          "gadget": [
              "倒刺铁丝网",
              "防弹摄像头"
          ]
      },
      {
          "name": "Osa",
          "position": "atk",
          "speed": 1,
          "armor": 3,
          "team": "NIGHTHAVEN-QCR",
          "troop": "NIGHTHAVEN-QCR",
          "weapon": [
              "556XI",
              "PDW9"
          ],
          "subweapon": [
              "PMM"
          ],
          "gadget": [
              "烟雾弹",
              "阔剑地雷",
              "电磁脉冲式冲击弹"
          ]
      },
      {
          "name": "Thorn",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Redhammer",
          "troop": "ERU",
          "weapon": [
              "M870",
              "UZK50GI"
          ],
          "subweapon": [
              "C75 Auto",
              "1911 TACOPS"
          ],
          "gadget": [
              "机动护盾",
              "倒刺铁丝网"
          ]
      },
      {
          "name": "Azami",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Viperstrike",
          "troop": "独立个人",
          "weapon": [
              "9x19VSN",
              "ACS12"
          ],
          "subweapon": [
              "D-50"
          ],
          "gadget": [
              "倒刺铁丝网",
              "冲击手榴弹"
          ]
      },
      {
          "name": "Sens",
          "position": "atk",
          "speed": 3,
          "armor": 1,
          "team": "Wolfguard",
          "troop": "SFG",
          "weapon": [
              "417",
              "POF-9"
          ],
          "subweapon": [
              "SDP 9mm",
              "GONNE-6"
          ],
          "gadget": [
              "硬突破炸药",
              "阔剑地雷"
          ]
      },
      {
          "name": "Grim",
          "position": "atk",
          "speed": 3,
          "armor": 1,
          "team": "NIGHTHAVEN",
          "troop": "NIGHTHAVEN",
          "weapon": [
              "552 Commando",
              "SG-CQB"
          ],
          "subweapon": [
              "P229",
              "Bailiff 410"
          ],
          "gadget": [
              "爆破炸药",
              "阔剑地雷",
              "硬突破炸药"
          ]
      },
      {
          "name": "Solis",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Ghosteyes",
          "troop": "AFEAU",
          "weapon": [
              "P90",
              "ITA12L"
          ],
          "subweapon": [
              "SMG-11"
          ],
          "gadget": [
              "冲击手榴弹",
              "防弹摄像头"
          ]
      },
      {
          "name": "Brava",
          "position": "atk",
          "speed": 3,
          "armor": 1,
          "team": "Viperstrike",
          "troop": "COT",
          "weapon": [
              "PARA-308",
              "CAMRS"
          ],
          "subweapon": [
              "USP40",
              "Super Shorty"
          ],
          "gadget": [
              "烟雾弹",
              "阔剑地雷"
          ]
      },
      {
          "name": "Fenrir",
          "position": "def",
          "speed": 2,
          "armor": 2,
          "team": "Redhammer",
          "troop": "独立个人",
          "weapon": [
              "MP7",
              "SASG-12"
          ],
          "subweapon": [
              "5.7 USG",
              "Bailiff 410"
          ],
          "gadget": [
              "防弹摄像头",
              "倒刺铁丝网"
          ]
      }
    ],
    weapons: [
      {"name":"L85A2","type":"ar","mode":"fullauto"},
      {"name":"AR33","type":"ar","mode":"fullauto"},
      {"name":"556XI","type":"ar","mode":"fullauto"},
      {"name":"G36C","type":"ar","mode":"fullauto"},
      {"name":"R4-C","type":"ar","mode":"fullauto"},
      {"name":"F2","type":"ar","mode":"fullauto"},
      {"name":"AK-12","type":"ar","mode":"fullauto"},
      {"name":"AUG A2","type":"ar","mode":"fullauto"},
      {"name":"552 Commando","type":"ar","mode":"fullauto"},
      {"name":"416-C CARBINE","type":"ar","mode":"fullauto"},
      {"name":"C8-SFW","type":"ar","mode":"fullauto"},
      {"name":"MK17 CQB","type":"ar","mode":"fullauto"},
      {"name":"PARA-308","type":"ar","mode":"fullauto"},
      {"name":"TYPE-89","type":"ar","mode":"fullauto"},
      {"name":"C7E","type":"ar","mode":"fullauto"},
      {"name":"M762","type":"ar","mode":"fullauto"},
      {"name":"V308","type":"ar","mode":"fullauto"},
      {"name":"SPEAR .308","type":"ar","mode":"fullauto"},
      {"name":"M4","type":"ar","mode":"fullauto"},
      {"name":"ARX200","type":"ar","mode":"fullauto"},
      {"name":"AK-74M","type":"ar","mode":"fullauto"},
      {"name":"F90","type":"ar","mode":"fullauto"},
      {"name":"Commando 9","type":"ar","mode":"fullauto"},
      {"name":"SC3000K","type":"ar","mode":"fullauto"},
      {"name":"POF-9","type":"ar","mode":"fullauto"},
      {"name":"PDW9","type":"smg","mode":"fullauto"},
      {"name":"FMG-9","type":"smg","mode":"fullauto"},
      {"name":"MP5K","type":"smg","mode":"fullauto"},
      {"name":"UMP45","type":"smg","mode":"fullauto"},
      {"name":"MP5","type":"smg","mode":"fullauto"},
      {"name":"P90","type":"smg","mode":"fullauto"},
      {"name":"9x19VSN","type":"smg","mode":"fullauto"},
      {"name":"MP7","type":"smg","mode":"fullauto"},
      {"name":"9mm C1","type":"smg","mode":"fullauto"},
      {"name":"MPX","type":"smg","mode":"fullauto"},
      {"name":"M12","type":"smg","mode":"fullauto"},
      {"name":"MP5SD","type":"smg","mode":"fullauto"},
      {"name":"Vector .45 ACP","type":"smg","mode":"fullauto"},
      {"name":"T-5 SMG","type":"smg","mode":"fullauto"},
      {"name":"SCORPION EVO 3 A1","type":"smg","mode":"fullauto"},
      {"name":"K1A","type":"smg","mode":"fullauto"},
      {"name":"Mx4 Storm","type":"smg","mode":"fullauto"},
      {"name":"AUG A3","type":"smg","mode":"fullauto"},
      {"name":"P10 RONI转换套件衍生型","type":"smg","mode":"fullauto"},
      {"name":"UZK50GI","type":"smg","mode":"fullauto"},
      {"name":"6P41","type":"lmg","mode":"fullauto"},
      {"name":"DP27","type":"lmg","mode":"fullauto"},
      {"name":"G8A1","type":"lmg","mode":"fullauto"},
      {"name":"M249","type":"lmg","mode":"fullauto"},
      {"name":"T-95 LSW","type":"lmg","mode":"fullauto"},
      {"name":"LMG-E","type":"lmg","mode":"fullauto"},
      {"name":"ALDA 5.56","type":"lmg","mode":"fullauto"},
      {"name":"M249 SAW","type":"lmg","mode":"fullauto"},
      {"name":"ACS12","type":"shotgun","mode":"semiauto"},
      {"name":"BOSG.12.2","type":"shotgun","mode":"semiauto"},
      {"name":"TCSG12","type":"shotgun","mode":"semiauto"},
      {"name":"M590A1","type":"shotgun","mode":"semiauto"},
      {"name":"M1014","type":"shotgun","mode":"semiauto"},
      {"name":"SG-CQB","type":"shotgun","mode":"semiauto"},
      {"name":"SASG-12","type":"shotgun","mode":"semiauto"},
      {"name":"M870","type":"shotgun","mode":"semiauto"},
      {"name":"SUPER 90","type":"shotgun","mode":"semiauto"},
      {"name":"SPAS-12","type":"shotgun","mode":"semiauto"},
      {"name":"SPAS-15","type":"shotgun","mode":"semiauto"},
      {"name":"SUPERNOVA","type":"shotgun","mode":"semiauto"},
      {"name":"ITA12L","type":"shotgun","mode":"semiauto"},
      {"name":"SIX12","type":"shotgun","mode":"semiauto"},
      {"name":"SIX12 SD","type":"shotgun","mode":"semiauto"},
      {"name":"FO-12","type":"shotgun","mode":"semiauto"},
      {"name":"Super Shorty","type":"shotgun","mode":"semiauto"},
      {"name":"ITA12S","type":"shotgun","mode":"semiauto"},
      {"name":"OTs-03","type":"sniper","mode":"semiauto"},
      {"name":"CSRX 300","type":"sniper","mode":"semiauto"},
      {"name":"417","type":"dmr","mode":"semiauto"},
      {"name":"CAMRS","type":"dmr","mode":"semiauto"},
      {"name":"SR-25","type":"dmr","mode":"semiauto"},
      {"name":"Mk 14 EBR","type":"dmr","mode":"semiauto"},
      {"name":"AR-15.50","type":"dmr","mode":"semiauto"},
      {"name":"P226 MK 25","type":"pistol","mode":"semiauto"},
      {"name":"M45 MEUSOC","type":"pistol","mode":"semiauto"},
      {"name":"5.7 USG","type":"pistol","mode":"semiauto"},
      {"name":"P9","type":"pistol","mode":"semiauto"},
      {"name":"LFP586","type":"pistol","mode":"semiauto"},
      {"name":"PMM","type":"pistol","mode":"semiauto"},
      {"name":"GSH-18","type":"pistol","mode":"semiauto"},
      {"name":"P12","type":"pistol","mode":"semiauto"},
      {"name":"MK1 9mm","type":"pistol","mode":"semiauto"},
      {"name":"D-50","type":"pistol","mode":"semiauto"},
      {"name":"PRB92","type":"pistol","mode":"semiauto"},
      {"name":"LUISON狼人手枪","type":"pistol","mode":"semiauto"},
      {"name":"P229","type":"pistol","mode":"semiauto"},
      {"name":"USP40","type":"pistol","mode":"semiauto"},
      {"name":"Q-929","type":"pistol","mode":"semiauto"},
      {"name":"15型半自动手枪","type":"pistol","mode":"semiauto"},
      {"name":"KERATOS .357","type":"pistol","mode":"semiauto"},
      {"name":"1911 TACOPS","type":"pistol","mode":"semiauto"},
      {"name":"P-10C","type":"pistol","mode":"semiauto"},
      {"name":"点44麦格农","type":"pistol","mode":"semiauto"},
      {"name":"SDP 9mm","type":"pistol","mode":"semiauto"},
      {"name":"Bailiff 410","type":"pistol","mode":"semiauto"},
      {"name":"SMG-11","type":"autopistol","mode":"fullauto"},
      {"name":"BEARING 9","type":"autopistol","mode":"fullauto"},
      {"name":"C75 Auto","type":"autopistol","mode":"fullauto"},
      {"name":"SMG-12","type":"autopistol","mode":"fullauto"},
      {"name":"SPSMG9","type":"autopistol","mode":"fullauto"},
      {"name":"GONNE-6","type":"special","mode":"none"},
      {"name":"防弹护盾","type":"special","mode":"none"},
      {"name":"G52型闪光战术盾牌","type":"special","mode":"none"},
      {"name":"防暴电击护盾","type":"special","mode":"none"},
      {"name":"磐石伸缩盾","type":"special","mode":"none"}
    ],
    gadget: [
      {"name":"手雷","tag":[]},
      {"name":"硬突破炸药","tag":[]},
      {"name":"眩晕手榴弹","tag":[]},
      {"name":"烟雾弹","tag":[]},
      {"name":"爆破炸药","tag":[]},
      {"name":"电磁脉冲式冲击弹","tag":[]},
      {"name":"阔剑地雷","tag":[]},
      {"name":"冲击手榴弹","tag":[]},
      {"name":"防弹摄像头","tag":[]},
      {"name":"感应警报器","tag":[]},
      {"name":"机动护盾","tag":[]},
      {"name":"遥控炸药","tag":[]},
      {"name":"观测工具阻拦器","tag":[]},
      {"name":"倒刺铁丝网","tag":[]}
    ],
    result: {
      legend: {},
      weapon1: {},
      weapon2: {},
      weapon3: {}
    },
    loading: true,
    initialize: false,
    legendsSelectCnt: true,
    settingEnable: false,
    legendSettingEnable: false,
    fadeOutImage: true,
    activateTeam: 2,
    selectedLegends: [],
    settings: [{
      name: "允许随机武器",
      comment: "关闭后，结果只会随机干员",
      father: [],
      value: "allowWeapon",
      index: 0,
      disabled: false,
      checked: true,
      default: true
    }, {
      name: "允许随机主武器",
      comment: "关闭后，不再随机主要武器",
      father: [0],
      value: "allowMainWeapon",
      index: 1,
      disabled: false,
      checked: true,
      default: true
    }, {
      name: "允许随机副武器",
      comment: "关闭后，不再随机次要武器",
      father: [0],
      value: "allowSecondWeapon",
      index: 2,
      disabled: false,
      checked: true,
      default: true
    }, {
      name: "允许随机道具",
      comment: "关闭后，不再随机道具",
      father: [0],
      value: "allowGadget",
      index: 3,
      disabled: false,
      checked: true,
      default: true
    }, {
      name: "允许主武器为霰弹枪",
      comment: "允许主武器随机为霰弹枪",
      father: [0, 1],
      value: "allowMainWeaponShotgun",
      index: 4,
      disabled: false,
      checked: true,
      default: true
    }, {
      name: "主/副武器不会同时为霰弹枪",
      comment: "开启保证你不会带着两把喷子白给",
      father: [0, 1, 2, 4],
      value: "allowAllShotgun",
      index: 5,
      disabled: false,
      checked: false,
      default: false
    }, {
      name: "道具优先选择C4/摔炮",
      comment: "C4优先级高于摔炮",
      father: [0, 3],
      value: "c4AndImpactFirst",
      index: 6,
      disabled: false,
      checked: false,
      default: false
    }, {
      name: "道具优先选择手雷",
      comment: "自杀必备",
      father: [0, 3],
      value: "grenadeFirst",
      index: 7,
      disabled: false,
      checked: false,
      default: false
    }, {
      name: "副武器不出现特殊武器",
      comment: "说的就是你，GONNE-6",
      father: [0, 2],
      value: "noSpecialSecondWeapon",
      index: 8,
      disabled: false,
      checked: false,
      default: false
    }],
    legendAtk: [],
    legendDef: [],
    weaponMap: {},
    gadgetMap: {}
  },

  getResult: function () {
    this.setData({
      "fadeOutImage": false,
    });
    if (!this.data.initialize) {
      setTimeout(() => {
        this.setData({
          "fadeOutImage": true,
        })
      }, 50);
    } else {
      setTimeout(() => {
        this.setData({
          "fadeOutImage": true,
        })
      }, 400);
    }
    var teamChoosed = (this.data.activateTeam == 1) ? this.data.legendAtk : this.data.legendDef;
    var searchList = []
    var legendsSelectNum = 0
    for(let legendTmp of teamChoosed) {
      if(this.data.selectedLegends[legendTmp.name]) {
        searchList.push(legendTmp);
        legendsSelectNum++;
      }
    }
    // 未选择干员
    if (legendsSelectNum == 0) {
      this.setData({
        "initialize": true,
        "legendsSelectCnt": false
      })
      return;
    }
    var rand;
    do {
      rand = Math.floor(Math.random() * searchList.length)
    } while (this.data.result.legend!=undefined && this.data.result.legend.name==searchList[rand].name && legendsSelectNum>1)
    var weapon1Rand = 0
    var weapon2Rand = 0
    var weapon3Rand = 0
    var weaponAvail = true;
    //配置检测
    while(this.data.settings[0].checked && weaponAvail) {
      weapon1Rand = Math.floor(Math.random() * searchList[rand].weapon.length)
      weapon2Rand = Math.floor(Math.random() * searchList[rand].subweapon.length)
      weapon3Rand = Math.floor(Math.random() * searchList[rand].gadget.length)
      weaponAvail =
      // 配置4 主武器霰弹枪
      (!this.data.settings[4].checked 
        && this.data.weaponMap[searchList[rand].weapon[weapon1Rand]].type == "shotgun") || 
      // 配置5 主副武器同时为霰弹枪
      (this.data.settings[5].checked
        && this.data.weaponMap[searchList[rand].weapon[weapon1Rand]].type == "shotgun"
        && this.data.weaponMap[searchList[rand].subweapon[weapon2Rand]].type == "shotgun") ||
      // 配置8 优先C4和摔炮
      (this.data.settings[8].checked
        && this.data.weaponMap[searchList[rand].subweapon[weapon2Rand]].type == "special");
      // 优先C4和摔炮
      if(this.data.settings[6].checked && this.data.activateTeam == 2) {
        let checkGadget = -1;
        if((checkGadget = searchList[rand].gadget.indexOf("遥控炸药")) != -1){
          weapon3Rand = checkGadget;
        } else if((checkGadget = searchList[rand].gadget.indexOf("冲击手榴弹")) != -1) {
          weapon3Rand = checkGadget;
        }
      }
      // 优先手雷
      if(this.data.settings[7].checked && this.data.activateTeam == 1) {
        let checkGadget = -1;
        if((checkGadget = searchList[rand].gadget.indexOf("手雷")) != -1){
          weapon3Rand = checkGadget;
        }
      }
    }
    if (!this.data.initialize) {
        this.setData({
          "result.legend": searchList[rand],
          "result.weapon1": this.data.weaponMap[searchList[rand].weapon[weapon1Rand]],
          "result.weapon2": this.data.weaponMap[searchList[rand].subweapon[weapon2Rand]],
          "result.weapon3": this.data.gadgetMap[searchList[rand].gadget[weapon3Rand]]
        })
    } else {
      setTimeout(() => {
        this.setData({
          "result.legend": searchList[rand],
          "result.weapon1": this.data.weaponMap[searchList[rand].weapon[weapon1Rand]],
          "result.weapon2": this.data.weaponMap[searchList[rand].subweapon[weapon2Rand]],
          "result.weapon3": this.data.gadgetMap[searchList[rand].gadget[weapon3Rand]]
        })
      }, 400);
    }
    this.setData({
      "initialize": true,
      "legendsSelectCnt": true
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
      key: "selectedOperator",
      data: this.data.selectedLegends
    })
    wx.setStorage({
      key: "r6sSetting",
      data: this.data.settings
    })
  },

  r6sCloseLoading: function () {
    this.setData({
      'loading': false
    })
  },

  cleanCache: function () {
    try {
      wx.removeStorageSync("r6sSetting")
      wx.removeStorageSync("selectedOperator")
    } catch (e) {
      console.log(e)
    }
    //重置默认值
    var modObj = new Object()
    for (let i = 0; i < this.data.legends.length; i++) {
      modObj["selectedLegends." + this.data.legends[i].name] = true;
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
    var name = e.currentTarget.dataset.name
    this.setData({
      ["selectedLegends." + name]: !(this.data.selectedLegends[name])
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
    // 初始化计算变量
    for (let legend of this.data.legends) {
      legend.nameUpper = legend.name.toUpperCase()
      legend.nameLower = legend.name.toLowerCase()
      if (legend.position == 'atk') {
        this.data.legendAtk.push(legend);
      } else {
        this.data.legendDef.push(legend);
      }
    }
    for (let weaponTmp of this.data.weapons) {
      weaponTmp.filename = weaponTmp.name.replaceAll(" ","_")
      this.data.weaponMap[weaponTmp.name] = weaponTmp
    }
    for (let gadgetTmp of this.data.gadget) {
      this.data.gadgetMap[gadgetTmp.name] = gadgetTmp
    }
    this.setData({
      "legendAtk": this.data.legendAtk,
      "legendDef": this.data.legendDef,
      "weaponMap": this.data.weaponMap
    })
    // 初始化已选干员列表
    this.setData({
      "selectedLegends": {}
    });
    try {
      var selectedLegendsGet = wx.getStorageSync('selectedOperator')
      var modObj = new Object()
      for (var i = 0; i < this.data.legends.length; i++) {
        let legendName = this.data.legends[i].name;
        if (selectedLegendsGet != undefined && selectedLegendsGet[legendName] != undefined) {
          this.data.selectedLegends[legendName] = selectedLegendsGet[legendName];
        } else {
          this.data.selectedLegends[legendName] = true;
        }
      }
      this.setData({
        "selectedLegends": this.data.selectedLegends
      });
    } catch (e) {
      console.log(e)
    }
    try {
      var modObj = new Object()
      var settingGet = wx.getStorageSync('r6sSetting')
      for (let i = 0; i < settingGet.length; i++) {
        modObj["settings[" + i + "].checked"] = settingGet[i].checked
        modObj["settings[" + i + "].disabled"] = settingGet[i].disabled
      }
      this.setData(modObj)
    } catch (e) {
      console.log(e)
    }
  },

  changeTeam: function (e) {
    this.setData({
      "initialize": false,
      "activateTeam": e.currentTarget.dataset.team
    });
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