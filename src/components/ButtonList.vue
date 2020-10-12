<template>
    <div>
        <ul v-for="(item,index) in all_paper" :key="index">
            <li>
                <button @click="scrollIt(index)">{{item.paper_session.eachtitle.num}}</button>
            </li>
        </ul>
        <p class="hint">您想查詢的活動</p>
    </div>
</template>


<script>
export default {
    props: ["all_paper","topList"],
    methods:{
        scrollIt(index){
            document.body.scrollTop = this.topList[index];
            document.documentElement.scrollTop = this.topList[index];
        }
    }
}
</script>

<style scoped>

.hint{
    display: inline-block;
    font-size: 13px;
}

ul{
    display: inline-block;
}

li{
    margin: 0 20px;
}

li:nth-child(1){
    margin-left: 0;
}

button{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background:  #202C33;
    outline: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    box-shadow: inset 5px 5px 5px rgba(255, 255, 255, 0.228),
    inset -5px -5px 5px rgba(0, 0, 0, 0.228)
    ;
}

button:hover{
    background:  #06D3CC;
}



@media only screen and (max-width: 855px){

    li{
        margin: 0 15px;
    }

    button{
        width: 40px;
        height: 40px;
        border-radius: 50px;
        background:  #202C33;
        outline: none;
        border: none;
        color: white;
        font-size: 15px;
        cursor: pointer;
        box-shadow: inset 5px 5px 5px rgba(255, 255, 255, 0.228),
        inset -5px -5px 5px rgba(0, 0, 0, 0.228)
    ;
    }
}


@media only screen and (max-width: 370px){

.hint{
    display: inline-block;
    font-size: 13px;
    margin-top: 15px;
}

}
</style>