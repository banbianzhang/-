// pages/components/footer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bg:String,
    buttons:{
      type:Array,
      value:[]
    },
    main_btn_border:String,
    main_btn_bg:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendEvent:function(e){
      this.triggerEvent(e.currentTarget.dataset.event,{})
    }
  }
})
