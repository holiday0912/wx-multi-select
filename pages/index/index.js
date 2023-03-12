Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagValue: '',
    tagValueList: [],
    list: [],
    addTagValue: '',
  },
  onTitleChange(e) {
    this.setData({
      titleValue: e.detail
    })
  },

  oncheckedChange(e) {
    let currentTarget = e.currentTarget.dataset.index
    let { num } = e.currentTarget.dataset
    let list = this.data.tagValueList
    list.push(currentTarget)
    list.sort()
    list.map(item => {
      if(item == currentTarget) {
        num++
      }
    })
    if(num == 2) {
      list.map((item,index) => {
        if(index == currentTarget) {
          list.splice(index, 2)
        } else {
          if(item == currentTarget) {
            list.splice(index, 2)
          }
        }
      })
    }
    this.setData({
      tagValueList: list
    });
    if (currentTarget == 3) {
      let listTag = this.data.list
      listTag.push('')
      this.setData({
        list: listTag
      })
    }
  },
  // 失去焦点
  onAddTagBlur(e) {
    let currentTarget = e.currentTarget.dataset.index
    let list = this.data.list
    list[currentTarget] = {
      'value': e.detail.value,
      'show': true
    }
    if(!e.detail.value) {
      list.splice(currentTarget,1)
    } 
    this.setData({
      list: list
    })
  },
  // 聚焦
  onAddTagFocus(e) {
  },
  // 输入内容触发
  onAddTagChange(e) {
    this.setData({
       addTagValue: e.detail
    })
  },
  onAddTag(e) {
    let {index,value} = e.currentTarget.dataset
    let list = this.data.list
    var query = wx.createSelectorQuery(),that = this;
    query.select('#t_'+index).boundingClientRect()
    query.exec(function (rect) {
      list[index] = {
        'value': value,
        'show': false,
        'winWidth': rect && rect[0].width
      }
      that.setData({
        list: list
      })
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})