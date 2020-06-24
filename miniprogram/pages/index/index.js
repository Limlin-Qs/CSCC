//index.js
function getRandomColor(){
  let rgb = [];
  for (let i = 0; i < 3; ++i){
    let color = Math.floor(Math.random()*256).toString(16) //产生0-155之间的十六进制随机数
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({
  data: {
    imgSrc: '/pic/1.jpg',

    background: ['bc-red','bc-green','bc-blue'],
    indicatorDots: true,
    autoplay: true,
    circular: false,
    vertical: false,
    duration: 500,

    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: 'If I Could Ride a Bike',
    author: 'park bird / chevy',
    src:'https://s320.xiami.net/961/2110297961/2105155168/1812633035_1565677452102_9530.mp3?ccode=xiami_web_web&expire=86400&duration=204&psid=e1eca7ebb8790dc6eb6f282abb9ac564&ups_client_netip=123.131.8.18&ups_ts=1592817772&ups_userid=0&utid=xRnVFhd1F2QCAXyGz8FFXlKN&vid=1812633035&fn=1812633035_1565677452102_9530.mp3&vkey=B5bb6533e4507027f021f6f21f4d90b3a',

    danmuList: [
      {
        text: '第1s出现的弹幕',
        color: '#ff0000',
        time:1
      },
      {
        text: '第1s出现的弹幕',
        color: '#ff00ff',
        time:3
      }
    ],
  },
  //音频播放 + 音频播放
  onLoad: function(options){
    this.audioCtx = wx.createAudioContext('myAudio', component);
    this.videoCtx = wx.createVideoContext('myVideo', component)
  },
  audioPlay: function(){
    this.audioCtx.play()
  },
  audioPause: function(){
    this.audioCtx.pause()
  },  
  audiotime: function(){
    this.audioCtx.seek(14)
  },
  audioStart: function(){
    this.audioCtx.seek(0)
  },
  //事件处理函数，点击播放
  tapCat: function(){
    let audio=wx.createInnerAudioContext();
    audio.src='/aud/Green Light.mp3';
    audio.play();
  },
  //弹幕发送
  inputBlur: function(e){
    this.inputValue = e.detail.value
  },
  sendDanmu: function(){
    this.videoCtx.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  }
})
