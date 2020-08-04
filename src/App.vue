<template>
  <div id="app">
    <div class="wrapper">
              <div class="fixed-top">
                  <Navbar />
              </div>
              <div class="row-dash">
                <div class="col-md-3 col-lg-3">
                <div class="side-bar">
                      <SideBar />
                </div>
                </div>
                <div class="col-md-9 col-lg-9">
                  <div class="main-panel">
                        <div class="title">
                            {{currentPage}}
                        </div>
                        <div class="content"> 
                          <div class="card">
                          <div class="card-body">
                            <router-view/>
                          </div>
                        </div>

                        </div>
                      
                    </div>
                </div>
              </div>
     
           
    </div>
   
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue"
import Navbar from "@/components/Navbar.vue"
export default {
    components : {
        SideBar,
        Navbar
    },
    computed:{
      currentPage(){
         return this.$route.name
      }

    }
}
</script>
<style>
.wrapper{
    background-color: #E5E5E5;
    background-image: url("/img/bg3.png"), url("/img/bg4.png");
    background-position: right top, left bottom;
    background-repeat: no-repeat, no-repeat;
    height: auto;
}
.row-dash{
  display: flex;
  flex-direction: row;
}
.grid-style{
    display: grid;
    grid-template-columns: 1fr 3fr;
}
.main-panel{
   position: relative;
  float: right;
  width: 100%;
  min-height: 100vh;
}
.card{
  width : 90%;
}
.title{
  color: #0065FC;
  font-size: 2rem;
  padding-top: 70px;
}
</style>
