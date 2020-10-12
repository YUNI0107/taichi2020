<template>
    <div class="each-content hide">
        <div class="each-li">
            <div class="left-info">
                <div class="num">
                    <h1>{{sessionData.eachtitle.num}}</h1>
                </div>
                <div class="detial-info">
                    <p>
                        {{sessionData.eachtitle.title}}
                        <br>
                        {{sessionData.eachtitle.place}}
                    </p>
                </div>

            </div>
            <div class="right-date">
                <p><span>10</span>/{{sessionData.eachtitle.date}}</p>
                <p>
                    <span></span>
                    {{sessionData.eachtitle.time}}
                </p>
            </div>
        </div>
         <div class="session">
             <!-- 清單 -->
                <ul v-for="(item,index) in sessionData.session_list" :key="index">
                    <li>
                        <p>
                        <span>{{index+1}}</span>
                       {{item}}</p>
                    </li>
                </ul>
         </div>
    </div>
</template>

<script>


export default {
    props: ['sessionData',],
    data(){
        return{

        }
    },

}
</script>

<style scoped>

.hide{
    opacity: 0;
    transition: 1.5s;
}

.each-content{
    transition: 1.5s;
}

.each-li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
}


.left-info{
    display: flex;
    align-items: center;
}

.left-info .num{
    margin: 0 20px 0 0;
    font-size: 28px;
}

.detial-info{
    font-weight: 800;
}

.right-date{
   display: flex;
   text-align: right;
   flex-direction: column;
}

.right-date p{
    margin-top: -5px;
    font-weight: 800;
}

.right-date p:nth-child(1){
    font-size: 20px;
}

.right-date p:nth-child(2){
    vertical-align: center;
}

.right-date p:nth-child(1) span{
    font-size: 35px;
}

.right-date p:nth-child(2) span{
    display: inline-block;
    width: 12px;
    height: 12px;
    background: #06D3CC;
    border-radius: 50%;
    margin-right: 5px;
}


.right-date p:nth-child(2){
    color: #8c96ab;
    
}

.session p{
    font-size: 14px;
    line-height: 30px;
}

.session ul li p span{
    color: #06D3CC;
    font-weight: 800;
    font-size: 20px;
    margin-right: 10px;
}

@media only screen and (max-width: 800px){

    .each-li{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin-top: 50px;
    }

    .right-date{
        display: flex;
        text-align: left;
        margin: 25px 0;
    }

}


</style>