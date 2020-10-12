<template>
  <div class="content">
    <BackTop/>
    <div class="big_title">
      <h1 >Demo Session</h1>
      <div class="line"></div>
      <div class="circle"></div>
    </div>

    <EachPart v-for="(item,index) in all_paper" :key="index" :sessionData="item.paper_session"/>
  </div>
</template>

<script>
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
          num: 'D',
          title: 'Demo Session',
          place: "XR Studio 光華館402室",
          date: "24",
          time: '13:30 - 16:30'
        },
          session_list:[
            'Wind Bender: Using Spherical Anemometer to Collect Weather Information for Virtual Reality',
            '探討利用腦波訊號作為虛擬實境中隱含性互動機制之體驗-以打坐冥想體驗為例',
            '重生Reborn',
            '家暴防治議題與互動遊戲結合： VR 遊戲《小黃傘》',
          ]
          }
        },
        {
          paper_session: {
          eachtitle:{
          num: 'D',
          title: 'Demo Session',
          place: "互動系工作室 光華館404室",
          date: "24",
          time: '13:30 - 16:30'
        },
          session_list:[
            '應用於視障兒童之互動式聽覺玩具: 多感樂爆彈',
            '視障兒童玩具設計-多感槌球',
            'Virtual Card Game: Application of Handheld Mobile Device and Computers Wireless Communication Interaction',
            '結合電覺與嗅覺感知之虛擬水杯',
            '以HTC Vive Tracker 虛擬定位整合虛實空間 - 以櫥窗展示為例',
            '基於體感的多模式互動於虛擬實境應用之設計探討',
            'Developing a Dual-Feature Platform to Assist Students’ Course Selection Process','Doniao Gallery: Using emotion recognition system to transform emotions into images','把握機會: 利用可攜式壓力感應器及趣味 化遊戲來促進握力復健','SiLIDcon: 利用物聯網感測器來減少食物的浪費'
          ]
          }
        },
      ],
      topList: [],
    }
  },
  components:{
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
