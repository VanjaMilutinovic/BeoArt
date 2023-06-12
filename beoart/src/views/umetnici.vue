<template>
  <div class="umetnici-container">
    <app-header></app-header>
    <div class="umetnici-testimonial">
      <div class="umetnici-container1">
        <h1 class="umetnici-text">Umetnici</h1>
        <span class="umetnici-text3"> 
            Na ovoj strani možete videti sve umetnike koji izlažu u našoj galeriji! 
            Možete preuzeti i spisak izloženih dela za svakog od umetnika.
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
import AppHeader from '../components/header'
import UmetniciCard from '../components/umetnici-card'
import AppFooter from '../components/footer'
import sviUmetnici from '../data/umetnici.js'

export default {
  name: 'Umetnici',
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
  }
}
</script>
