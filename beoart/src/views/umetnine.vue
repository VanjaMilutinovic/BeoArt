<template>
  <div class="umetnine-container">
    <app-header></app-header>
    <div class="umetnine-testimonial">
      <div class="umetnine-container1">
        <h1 class="umetnine-text">
          <span>What they’re saying</span>
          <br />
          <span></span>
        </h1>
        <span class="umetnine-text3">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
            dignissim tortor.
          </span>
        </span>
        <div class="umetnine-container2">
          <router-link to="/umetnine-pregled">
            <umetnine-card
              name=" SLIKE"
              role="SLIKE"
              quote=" Saznajte najnovije i nbla bla informacije"
              picture_alt="nema"
              picture_src="/40120_girl-with-a-pearl-earring-g1bc78cda1-1920_orig-300w.jpg"
              rootClassName="rootClassName2"
              class="umetnine-component1"
            ></umetnine-card>
          </router-link>
          <umetnine-card
            name="SKULPTURE"
            picture_src="/6-myron-discobolus-300h.jpg"
            rootClassName="rootClassName"
            class="umetnine-component2"
          ></umetnine-card>
          <umetnine-card
            name="OSTALO"
            quote="dassa"
            picture_src="/girl-with-balloon-1-300h.webp"
            rootClassName="rootClassName1"
            class="umetnine-component3"
          ></umetnine-card>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import UmetnineCard from '../components/umetnine-card'
import AppFooter from '../components/footer'

export default {
  name: 'Umetnine',
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
}
</script>

<style scoped>
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
  color: lightgray;
}
.umetnine-text3 {
  color: lightgray;
  font-size: 0.75rem;
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
.umetnine-component1 {
  text-decoration: none;
}
.umetnine-component2 {
  text-decoration: none;
}
.umetnine-component3 {
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
