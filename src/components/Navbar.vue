<template>
    <div>
        <div class="navbar">
            <div class="nav_left">
                <div class="logo">
                    <img src="../assets/nav_logo.png" alt="2020LOGO">
                </div>
                <div @click="toogleMenu" class="menu-btn">
                    <div  class="burger"></div>
                </div>
                <div class="link-list">
                    <div class="link-list-content" @click="removeMenu">
                        <router-link class="link" to="/paper">Paper <br>Session</router-link>
                        <router-link class="link" to="/most">MOST HF&D<br>Session</router-link>
                        <router-link class="link" to="/best">Best of<br>HCI</router-link>
                        <router-link class="link" to="/poster">Poster<br>Session</router-link>
                        <router-link class="link" to="/demo">Demo<br>Session</router-link>
                        <img src="../assets/black_logo.png" alt="">
                    </div>
                </div>
            </div>
            <div class="nav_right">
                <div class="face_icon">
                    <a href="https://www.facebook.com/taiwanchi2020/" target="_blank"> 
                        <img src="../assets/Fb_icon.png" alt="facebook">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data(){
        return{
            menuOpen: false,
        }
    },
    computed:{
        
    },
    methods:{
        toogleMenu(){
            let menuBtn = document.querySelector('.menu-btn');
            let menu = document.querySelector('.link-list')
            if(!this.menuOpen){
                menuBtn.classList.add('open');
                menu.classList.add('open');
                this.menuOpen = true;
            } else{
                menuBtn.classList.remove('open');
                menu.classList.remove('open');
                this.menuOpen = false;
        }
        },
        removeMenu(){
            let menuBtn = document.querySelector('.menu-btn');
            let menu = document.querySelector('.link-list')
            if(this.menuOpen){
                menuBtn.classList.remove('open');
                menu.classList.remove('open');
                this.menuOpen = false;
            }
            document.body.scrollTop = 450;
            document.documentElement.scrollTop = 450;
        }
    },
    mounted(){
        window.addEventListener('scroll',function(){
           var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;

           let menu_btn = document.querySelector('.burger')
           if( scrollTop > 300){
               menu_btn.classList.add('green')
           }else{
               menu_btn.classList.remove('green')
           }
        })
    }

}
</script>

<style scoped>
        .navbar{
            padding: 20px 50px;
            display: flex;
            align-items: center;
        }

        .nav_left{
            flex: 1;
            display: flex;
            align-items: center;
        }


        .navbar a{
            display: inline-block;
            position: relative;
            color: white;
            text-decoration: none;
            font-size: 15px;
            margin: 0 20px;
        }

        .navbar .link-list a::before{
            content: '';
            position: absolute;
            display: block;
            width: 2px;
            height: 40px;
            left: -10px;
            background: #06D3CC;
        }

        .navbar a:hover{
            color: #06D3CC;
        }

        .navbar .logo{
            width: 120px;
            margin-right: 20px;
        }

        .navbar .logo img{
            width: 100%;
        }

        .navbar .face_icon{
            width: 35px;
            cursor: pointer;
        }

        .navbar .face_icon a{
            width: 100%;
            margin-right: 0;
            margin-left: 0;
        }

        .navbar .face_icon img{
            width: 100%;
        }

        .navbar .face_icon:hover img{
            filter: brightness(0.8);
        }

        .navbar .link-list .link-list-content img{
            display: none;
        }

        @media only screen and (max-width: 855px){

            .navbar{
                padding: 20px 30px;
            }

            .navbar .logo{
                display: none;
            }

            .menu-btn{
                width: 30px;
                height: 30px;
                /* border: 2px solid white; */
                position: fixed;
                top: 20px;
                left: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                z-index: 100;
            }

            .burger{
                width: 30px;
                height: 3px;
                border-radius: 10px;
                background-color: white;
                position: relative;
                transition: all .5s ease-in-out;
            }

            .burger::before,.burger::after{
                content: '';
                width: 30px;
                height: 3px;
                position: absolute;
                border-radius: 20px;
                background-color: white;
                transition: all .5s ease-in-out;
            }

            .burger.green{
                background-color: #06D3CC;
            }

            .burger.green::before,.burger.green::after{
                background-color: #06D3CC;
            }

            .burger::before{
                transform: translateY(-10px);
            }

            .burger::after{
                transform: translateY(10px);
            }

            .open .burger{
                background-color: transparent;
                width: 0px;
                /* transform: translateX(-50px); */
            }

            .open .burger::before{
                background-color: #202C33;
                transform: rotate(45deg) translate(-15px , 15px) ;
            }

            .open .burger::after{
                background-color:#202C33;
                transform: rotate(-45deg) translate(-15px , -15px);
            }

            /* list */


            .navbar .link-list{
                position: fixed;
                top: 0;
                left: 0;
                background: white;
                width: 100%;
                height: 100%;
                z-index: 10;
                transform: translateX(-100%);
                transition: .5s;
            }

            .navbar .link-list.open{
                transform: translateX(0);
            }

            .navbar .link-list .link-list-content{
                display: flex;
                width: 100%;
                height: 100%;
                padding: 20px 0 0 40px;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                transform: translateY(-30px);    
            }

            .navbar .link-list .link-list-content img{
                width: 100px;
                position: fixed;
                bottom: 20px;
                left: 50px;
                display: block;
            }

            .navbar a{
                position: relative;
                color: black;
                text-decoration: none;
                font-size: 15px;
                padding: 50px 0px 0 0;
             }

             .navbar a:nth-child(1){
                 padding: 0;
             }

             .navbar .link-list a::before{
                content: '';
                position: absolute;
                display: block;
                width: 60vw;
                height: 1px;
                border-radius: 10px;
                bottom: -10px;
                background: #707070;
        }

        }


        @media only screen and (max-width: 350px){

            .navbar{
                padding: 20px 20px;
            }

            .navbar a{
                padding: 35px 0px 0 0;
             }



        }

</style>