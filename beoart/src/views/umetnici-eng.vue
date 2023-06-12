<template>
  <div class="umetnici-container">
    <app-header></app-header>
    <!-- ODAVDE -->
    <div class="lang-choice">
      <button type="button" class="header-button button" @click='ENG()'>
        SRB
      </button>
    </div>
    <!-- DO OVDE -->
    <div class="umetnici-testimonial">
      <div class="umetnici-container1">
        <h1 class="umetnici-text">Artists</h1>
        <span class="umetnici-text3"> 
            On this page you can see all the artists exhibiting in our gallery!
            You can also download a list of exhibited works for each artist.
        </span>
        <span class="umetnici-container2" v-for="u in this.umetnici" :key="u.id">
          <UmetniciCard
            :bio="u.desc"
            :name='u.name'
            :picture_src="u.img_src"
            :pdf_src="u.pdf_file"
          ></UmetniciCard>
        </span>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<style scoped>
.header-button{
  color:white;
  background-color: #9966cc;
  padding: 10px;
  border-radius: 8px;
}
.lang-choice {
  margin: 10px; margin-right: 20px;
  
  align-self: end;

  justify-content: space-between;
}
.umetnici-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.umetnici-testimonial {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: 232323;
}
.umetnici-container1 {
  width: 100%;
  display: flex;
  padding: 48px;
  max-width: 1400px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.umetnici-text {
  color: #303030;
}
.umetnici-text3 {
  color: #303030;
  font-size: 1,2rem;
  max-width: 600px;
  margin-top: 16px;
  text-align: center;
  margin-bottom: 32px;
}
.umetnici-container2 {
  width: 100%;
  
}
.umetnici-container3 {
  width: 100%;
  display: grid;
  grid-gap: 32px;
  margin-top: 32px;
  grid-template-columns: 1fr 1fr 1fr;
}
@media(max-width: 991px) {
  .umetnici-text {
    text-align: center;
  }
  .umetnici-text3 {
    text-align: center;
  }
  .umetnici-container2 {
    grid-template-columns: 1fr;
  }
  .umetnici-container3 {
    grid-template-columns: 1fr;
  }
}
@media(max-width: 767px) {
  .umetnici-container1 {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .umetnici-container1 {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
}
</style>

<script>
import AppHeader from '../components/header-eng'
import UmetniciCard from '../components/umetnici-card-eng'
import AppFooter from '../components/footer-eng'
import sviUmetnici from '../data/umetniciEng.js'

export default {
  name: 'UmetniciEng',
  components: {
    AppHeader,
    UmetniciCard,
    AppFooter,
  },
  data(){
    return{
      umetnici: []
    }
  },
  created(){
    if(localStorage.getItem('umetnici')==null){
      localStorage.setItem('umetnici', JSON.stringify(sviUmetnici))
      this.umetnici = sviUmetnici
    }
    else{
      this.umetnici = JSON.parse(localStorage.getItem('umetnici'))
    }
  },
    metaInfo: {
    title: 'Umetnici - BeoArt',
    meta: [
      {
        property: 'og:title',
        content: 'Umetnici - BeoArt',
      },
    ],
  },
  methods: {
    ENG(){
      this.$router.push('/umetnici')
    }
  }
}
</script>
