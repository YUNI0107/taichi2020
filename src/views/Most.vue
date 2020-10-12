<template>
  <div class="content">
    <BackTop/>
    <div class="big_title">
      <h1 >MOST HF&D Session</h1>
      <div class="line"></div>
      <div class="circle"></div>
    </div>
    <ButtonList :all_paper="all_paper" :topList="topList" />
    <EachPart v-for="(item,index) in all_paper" :key="index" :sessionData="item.paper_session"/>
  </div>
</template>

<script>
import ButtonList from '../components/ButtonList'
import EachPart from '../components/EachPart'
import BackTop from '../components/BackTop' 
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, Draggable);
import { TimelineMax } from "gsap";

export default {
  data(){
    return{
      all_paper:[
        {
          paper_session: {
          eachtitle:{
          num: 1,
          title: 'Haptic and Tangible Virtual Reality',
          place: "宏裕科技大樓 B1  國際會議廳",
          date: "23",
          time: '10:55 - 12:00'
        },
          session_list:[
            'GravitySuit：利用穿戴式動態液體系統來模擬使用者感受虛擬環境中之重量',
            'Design of Desktop Audiovisual Entertainment System with Deep Learning and Haptic Feedback',
            '利用穿戴式液態系統來模擬大面積多樣化觸覺回饋 -以液體環LiquidSpiral為例',
            'ReCubic: Exploring Tangible User Interface for Enhancing Immersivity and Spatial Ability in Space Recomposition VR Game',
          ]
          }
        },
        {
          paper_session: {
          eachtitle:{
          num: 2,
          title: 'Ubiquitous Interaction across users and platforms',
          place: "光華館 4F  多功能教學展演廳",
          date: "23",
          time: '10:55 - 12:00'
        },
          session_list:[
            'To Whom Are IM Users (Un)Responsive, and Why? A Mixed-methods Study',
            '通過腦電波探索沉浸式敘事影片中之虛擬角色互動',
            'IM使用者對自動狀態運算應用程式的接受度和呈現類型偏好的探索性研究',
            'Predicting Opportune Moments to Deliver Notifications in Virtual Reality',
          ]
          }
        },
        {
          paper_session: {
          eachtitle:{
          num: 3,
          title: 'VR/AR for Training',
          place: "宏裕科技大樓 B1  國際會議廳",
          date: "23",
          time: '17:00 - 18:00'
        },
          session_list:[
            '在虛擬實境中基於個人動暈敏感性以客製化機制減輕暈眩之可行性探討',
            '擴增實境的室內導航設計對尋路任務績效及空間知識習得之影響 ',
            'Application of Virtual Reality for Electrocution Prevention in Construction Safety Management',
            'Unmanned aerial vehicle flight training system with Augmented Reality',
          ]
          }
        },
        {
          paper_session: {
          eachtitle:{
          num: 4,
          title: 'Future Technology & Design',
          place: "光華館 4F  多功能教學展演廳",
          date: "23",
          time: '17:00 - 18:00'
        },
          session_list:[
            '以情緒設計三層次探討療癒系手機遊戲 設計元素與使用者自我接納之關聯',
            '以報紙為推測素材：探索居家聯網物件的纏結經驗與多重未來',
            '虛擬實境職災預防體驗訓練工具設計開發之初探–以吊掛物體飛落危害為例 ',
            '人物誌之框架效應對設計概念發想之影響',
          ]
          }
        },
      ],
      topList: [],
    }
  },
  components:{
    ButtonList,
    EachPart,
    BackTop,
  },
  mounted(){
    let each = document.querySelectorAll('.each-content')
    each.forEach((item)=>{
    this.topList.push(item.offsetTop)
    window.addEventListener('scroll',function(){
      var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop+500 > item.offsetTop){
        item.classList.remove('hide')
      }
      })
      let scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop+800 > item.offsetTop){
        item.classList.remove('hide')
      }
    })
    const tl = new TimelineMax();
    tl.from('.line', 1.5, {
     marginLeft: '60%',
    })

    
  }
}
</script>


<style scoped>



.content{
  margin: 20px 150px;
}

.big_title{
  display: flex;
  align-items: center;
  margin: 50px 0 20px 0;
}

.big_title h1{
  display: inline-block;
  letter-spacing: 2px;
}

.big_title .line{
  flex: 1;
  margin-left: 30px;
  width: 80%;
  height: 3px;
  border-radius: 20px;
  background: #06D3CC;
}

.big_title .circle{
  width: 30px;
  height: 30px;
  background: #06D3CC;
  border-radius: 50%;
}


@media only screen and (max-width: 800px){

  .content{
      margin: 20px 30px;
  }  

  .big_title h1{
    font-size: 20px;
    letter-spacing: 1px;
  }


  .big_title .line{
    margin-left: 10px;
    height: 2px;
    border-radius: 20px;
  }

  .big_title .circle{
    width: 10px;
    height: 10px;
    background: #06D3CC;
    border-radius: 50%;
  }



}

</style>
