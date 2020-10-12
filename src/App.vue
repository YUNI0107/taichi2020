<template>
  <div id="app">
    <Navbar class="nav-ab"/>
    <Top/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Top from '@/components/Top'
import Footer from '@/components/Footer'
export default {
  components: {Navbar,Top,Footer}

}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  list-style: none;
}

html{
  scroll-behavior: smooth;
}

.nav-ab{
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
}

</style>
