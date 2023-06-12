<template>
  <div class="umetnine-container">
    <app-header></app-header>
    <!-- ODAVDE -->
    <div class="lang-choice">
      <button type="button" class="header-button button" @click='ENG()'>
        SRB
      </button>
    </div>
    <!-- DO OVDE -->
    <div class="umetnine-testimonial">
      <div class="umetnine-container1">
        <h1 class="umetnine-text">
          <span>Arts</span>
          <br />
          <span></span>
        </h1>
        <span class="umetnine-text3">
          <span>
            Choose one of the three art categories and enjoy!
          </span>
        </span>
        
          
        <div class="umetnine-container2">
          <router-link to="/pregled-umetnina-eng/1">
            <umetnine-card
            name="PICTURES"
            picture_src="/slike.jpg"
            rootClassName="rootClassName"
            class="umetnine-component"
          ></umetnine-card>
          </router-link>
          <router-link to="/pregled-umetnina-eng/2">
          <umetnine-card
            name="SCULPTURES"
            picture_src="/skulpture.jpg"
            rootClassName="rootClassName"
            class="umetnine-component"
          ></umetnine-card>
          </router-link>
          <router-link to="/pregled-umetnina-eng/3">
          <umetnine-card
            name="OTHER"
            picture_src="/ostalo.webp"
            rootClassName="rootClassName1"
            class="umetnine-component"
          ></umetnine-card>
          </router-link>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header-eng'
import UmetnineCard from '../components/umetnine-card'
import AppFooter from '../components/footer-eng'

export default {
  name: 'UmetnineEng',
  components: {
    AppHeader,
    UmetnineCard,
    AppFooter,
  },
  metaInfo: {
    title: 'Umetnine - BeoArt',
    meta: [
      {
        property: 'og:title',
        content: 'Umetnine - BeoArt',
      },
    ],
  },
  methods: {
    ENG(){
      this.$router.push('/umetnine')
    }
  },
}
</script>

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
.umetnine-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.umetnine-testimonial {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: 232323;
}
.umetnine-container1 {
  width: 100%;
  display: flex;
  padding: 48px;
  max-width: 1400px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.umetnine-text {
  color: #303030;
}
.umetnine-text3 {
  color: #303030;
  font-size: 1rem;
  max-width: 600px;
  margin-top: 16px;
  text-align: center;
  margin-bottom: 32px;
}
.umetnine-container2 {
  width: 100%;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
}
.umetnine-component {
  text-decoration: none;
}

@media(max-width: 991px) {
  .umetnine-text {
    text-align: center;
  }
  .umetnine-text3 {
    text-align: center;
  }
  .umetnine-container2 {
    grid-template-columns: 1fr;
  }
}
@media(max-width: 767px) {
  .umetnine-container1 {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .umetnine-container1 {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
}
</style>
