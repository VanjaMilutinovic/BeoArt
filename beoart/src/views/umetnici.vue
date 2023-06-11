<template>
  <div class="umetnici-container">
    <app-header></app-header>
    <div class="umetnici-testimonial">
      <div class="umetnici-container1">
        <h1 class="umetnici-text">
          <span>What they’re saying</span>
          <br />
          <span></span>
        </h1>
        <span class="umetnici-text3">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
            dignissim tortor.
          </span>
        </span>
        <div class="umetnici-container2">
          <umetnici-card
            bio="Ne znamo ništa o čoveku. Bavi se aktivizmom i slika politički orijentisane grafite"
            name="Banksy"
            picture_src="/girl-with-balloon-1-300h.webp"
            rootClassName="umetnici-card-root-class-name"
          ></umetnici-card>
          <umetnici-card
            bio="Lik lud ko lajsna, odseko sebi uvo????"
            name="Vincent Van Gogh"
            picture_src="/gettyimages-501590118-300h.jpg"
            rootClassName="umetnici-card-root-class-name3"
          ></umetnici-card>
          <umetnici-card
            rootClassName="umetnici-card-root-class-name1"
          ></umetnici-card>
        </div>
        <div class="umetnici-container3">
          <umetnici-card
            rootClassName="umetnici-card-root-class-name5"
          ></umetnici-card>
          <umetnici-card
            rootClassName="umetnici-card-root-class-name7"
          ></umetnici-card>
          <umetnici-card
            rootClassName="umetnici-card-root-class-name4"
          ></umetnici-card>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import UmetniciCard from '../components/umetnici-card'
import AppFooter from '../components/footer'

export default {
  name: 'Umetnici',
  components: {
    AppHeader,
    UmetniciCard,
    AppFooter,
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
}
</script>

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
  color: lightgray;
}
.umetnici-text3 {
  color: lightgray;
  font-size: 0.75rem;
  max-width: 600px;
  margin-top: 16px;
  text-align: center;
  margin-bottom: 32px;
}
.umetnici-container2 {
  width: 100%;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
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
