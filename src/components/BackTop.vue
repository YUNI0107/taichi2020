<template>
    <div class="backToTop">
        <button @click="toTop" class="top">
        </button>
    </div>
</template>


<script>
export default {
    methods:{
        toTop(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }


}
</script>


<style scoped>

.backToTop{
    position: fixed;
    right: 40px;
    bottom: 50px;
}

button{
    width: 50px;
    height: 50px;
    background: url(../assets/back_totop.png);
    background-size: cover;
    border:none;
    outline: none;
    cursor: pointer;
    box-shadow: 0px 0px 5px #83838353;
    border-radius: 50%;
}

button:hover{
    filter: brightness(1.8);
}

@media only screen and (max-width: 800px){

    .backToTop{
        position: fixed;
        right: 20px;
        bottom: 20px;
    }

}

</style>