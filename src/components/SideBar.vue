<template>
    <div class="container-fluid">
       <div class="side-bar">
           <div class="logo">
                <img src="/img/logo.png" alt="" srcset="">
           </div>
          
          <div class="side-links">
            <ul>
               <li :class="currentPage.includes('/Dashboard') ? activeClass : ''">
                   <router-link to="/Dashboard" class="d-flex active">
                       <div>
                           <img src="/img/dashboard.png" alt="" srcset="">
                       </div>
                       <div class="link-text">
                           dashboard
                       </div>
                   </router-link>
               </li>
               <li :class="currentPage.includes('/PostJobs') ? activeClass : ''">
                  <router-link to="/PostJobs" class="d-flex">
                       <div>
                           <img src="/img/JobPosted.png" alt="" srcset="">
                       </div>
                       <div class="link-text">
                           Post Jobs
                       </div>
                  </router-link>
               </li>
                <li :class="currentPage.includes('/JobPosted') ? activeClass : ''">
                  <router-link to="/JobPosted" class="d-flex">
                       <div>
                           <img src="/img/JobPosted.png" alt="" srcset="">
                       </div>
                       <div class="link-text">
                           jobs posted
                       </div>
                  </router-link>
               </li>
               <li :class="currentPage.includes('/Applicants') ? activeClass : ''">
                  <a class="d-flex">
                       <div>
                           <img src="/img/applicant.png" alt="" srcset="">
                       </div>
                       <div class="link-text">
                           applicants
                       </div>
                   </a>
               </li>
               <li :class="currentPage.includes('/ViewCV') ? activeClass : ''">
                  <a class="d-flex">
                       <div>
                           <img src="/img/cv.png" alt="" srcset="">
                       </div>
                       <div class="link-text">
                           View applicants cv
                       </div>
                   </a>
               </li>
               <li :class="currentPage.includes('/Notify') ? activeClass : ''">
                  <a class="d-flex">
                       <div>
                           <img src="/img/notify.png" alt="" srcset="">
                       </div>
                       <div class="link-text">
                           notify applicant
                       </div>
                   </a>
               </li>
           </ul>
          </div>
           
       </div>
    </div>
</template>
<script>
export default {
    data(){
    return{
      activeClass : 'active'
    }
},
 computed : {
    currentPage(){
      return this.$route.path
    }
  }
}
</script>>
<style scoped>
.router-link-active{
  background-color:  #0065FC !important;
  color: #FFFFFF;
}
.side-bar{
    width: 20%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #FBFBFB;
    box-shadow: 1px 1px 10px #888888 !important;
}
.logo{
    padding: 2rem 3rem ;
}

ul li{
    list-style-type: none;
    text-decoration: none;
    margin-top: 1rem;
    
}
.link-text{
    padding: 0 1rem;
    text-transform: uppercase;
    font-size: .8rem;
    margin-top: .2rem;
}
a{ 
    padding: 1rem 2rem 1rem 2rem;
    text-decoration: none;
}

</style>
