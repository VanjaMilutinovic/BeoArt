<template>
  <div class="umetnina-konkretna-container">
    <app-header></app-header>
    <div class="umetnina-konkretna-hero">
      <img
        alt="image"
        src="/zvezdana%2Bnoc%C3%AC%C2%81%2C%2Bvinsent%2Bvan%2Bgog-1200w.jpeg"
        class="umetnina-konkretna-image"
      />
      <div class="umetnina-konkretna-container1">
        <h1 class="umetnina-konkretna-text">Zvezdana noć</h1>
        <h2 class="umetnina-konkretna-text01">
          <span class="umetnina-konkretna-text02">Vincent Van Gogh</span>
          <br />
        </h2>
        <span class="umetnina-konkretna-text04">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis.
            <span v-html="raw3fya"></span>
          </span>
          <span><span v-html="rawjunk"></span></span>
          <span>
            Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem
            <span v-html="raws8d9"></span>
          </span>
          <span><span v-html="raw6c1i"></span></span>
          <span>
            ipsum dolor sit amet, consectetur adipiscing elit.
            <span v-html="rawjxn8"></span>
          </span>
          <span><span v-html="rawwlr1"></span></span>
          <span>
            Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
          </span>
          <br />
          <br />
          <span class="umetnina-konkretna-text14">Procenjena vrednost</span>
          <span>: 555555$</span>
          <br />
          <span class="umetnina-konkretna-text17">Procenjena startost</span>
          <span>: hiljadu godišnji zmaj</span>
          <br />
          <span><span v-html="rawzmzd"></span></span>
          <span><span v-html="rawmlvs"></span></span>
        </span>
        <div class="umetnina-konkretna-btn-group">
          <span>Unesite svoju ponudu: </span>
          <input type="text" placeholder="$500000" class="input" />
          <button class="umetnina-konkretna-button button">Ponudi</button>
        </div>
        <button class="umetnina-konkretna-button1 button">
          <span>
            <span class="umetnina-konkretna-text24">Pogledaj sve ponude</span>
            <br />
          </span>
        </button>
        <div class="umetnina-konkretna-btn-group1">
          <span class="umetnina-konkretna-text26">Unesite svoju ponudu: </span>
          <input
            type="text"
            placeholder="text"
            class="umetnina-konkretna-textinput1 input"
          />
          <button class="umetnina-konkretna-button2 button">Ponudi</button>
        </div>
      </div>
    </div>
    <div class="umetnina-konkretna-features">
      <h1 class="umetnina-konkretna-text27">Galerija slika</h1>
      <div class="umetnina-konkretna-container2">
        <feature-card1 rootClassName="rootClassName"></feature-card1>
        <feature-card1 rootClassName="rootClassName1"></feature-card1>
        <feature-card1 rootClassName="rootClassName2"></feature-card1>
        <feature-card1 rootClassName="rootClassName3"></feature-card1>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name9"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import FeatureCard1 from '../components/feature-card1'
import AppFooter from '../components/footer'

export default {
  name: 'UmetninaKonkretna',
  components: {
    AppHeader,
    FeatureCard1,
    AppFooter,
  },
  data() {
    return {
      raw3fya: ' ',
      rawjunk: ' ',
      raws8d9: ' ',
      raw6c1i: ' ',
      rawjxn8: ' ',
      rawwlr1: ' ',
      rawzmzd: ' ',
      rawmlvs: ' ',
    }
  },
  metaInfo: {
    title: 'UmetninaKonkretna - BeoArt',
    meta: [
      {
        property: 'og:title',
        content: 'UmetninaKonkretna - BeoArt',
      },
    ],
  },
}
</script>

<style scoped>
.umetnina-konkretna-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
}
.umetnina-konkretna-hero {
  width: 100%;
  height: 80%;
  display: flex;
  padding: 32px;
  max-width: 1400px;
  min-height: 80vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.umetnina-konkretna-image {
  width: 468px;
  height: 422px;
  object-fit: cover;
}
.umetnina-konkretna-container1 {
  display: flex;
  margin-left: 32px;
  flex-direction: column;
}
.umetnina-konkretna-text {
  font-size: 3rem;
}
.umetnina-konkretna-text01 {
  margin-top: 16px;
  font-weight: 600;
  margin-bottom: 16px;
}
.umetnina-konkretna-text04 {
  margin-top: 16px;
  margin-bottom: 16px;
  padding-right: 48px;
}
.umetnina-konkretna-text14 {
  font-weight: 700;
}
.umetnina-konkretna-text17 {
  font-weight: 700;
}
.umetnina-konkretna-btn-group {
  display: flex;
  margin-top: 16px;
  align-items: center;
  margin-bottom: 16px;
  flex-direction: row;
}
.umetnina-konkretna-button {
  color: lightgray;
  transition: 0.3s;
  font-weight: 700;
  margin-left: 32px;
  padding-top: 8px;
  margin-right: 32px;
  padding-bottom: 8px;
  background-color: #303030;
}
.umetnina-konkretna-button:hover {
  transform: scale(1.02);
}
.umetnina-konkretna-button1 {
  color: lightgray;
  width: 40%;
  position: relative;
  align-self: flex-start;
  transition: 0.3s;
  font-weight: 700;
  margin-left: 0px;
  padding-top: 8px;
  margin-right: 0px;
  padding-bottom: 8px;
  background-color: #303030;
}
.umetnina-konkretna-button1:hover {
  transform: scale(1.02);
}
.umetnina-konkretna-text24:hover {
  transform: scale(1.02);
}
.umetnina-konkretna-btn-group1 {
  width: 571px;
  display: flex;
  margin-top: 16px;
  align-items: flex-start;
  margin-bottom: 16px;
  flex-direction: column;
}
.umetnina-konkretna-text26 {
  margin-bottom: 8px;
}
.umetnina-konkretna-textinput1 {
  width: 562px;
  height: 43px;
  padding-top: 16px;
  margin-bottom: 16px;
  padding-bottom: 96px;
}
.umetnina-konkretna-button2 {
  color: lightgray;
  align-self: flex-end;
  transition: 0.3s;
  font-weight: 700;
  margin-left: 8px;
  padding-top: 8px;
  margin-right: 8px;
  padding-bottom: 8px;
  background-color: #303030;
}
.umetnina-konkretna-button2:hover {
  transform: scale(1.02);
}
.umetnina-konkretna-features {
  width: 100%;
  display: flex;
  padding: 48px;
  max-width: 1400px;
  flex-direction: column;
}
.umetnina-konkretna-text27 {
  font-size: 3rem;
  margin-bottom: 48px;
}
.umetnina-konkretna-container2 {
  flex: 0 0 auto;
  width: 100%;
  display: grid;
  grid-gap: 32px;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
@media(max-width: 991px) {
  .umetnina-konkretna-hero {
    padding: 48px;
    flex-direction: column;
  }
  .umetnina-konkretna-image {
    order: 2;
  }
  .umetnina-konkretna-container1 {
    align-items: center;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 32px;
  }
  .umetnina-konkretna-text {
    text-align: center;
  }
  .umetnina-konkretna-text01 {
    text-align: center;
  }
  .umetnina-konkretna-text02 {
    text-align: center;
  }
  .umetnina-konkretna-text04 {
    text-align: center;
    padding-left: var(--dl-space-space-fourunits);
  }
  .umetnina-konkretna-text27 {
    align-self: center;
  }
  .umetnina-konkretna-container2 {
    grid-template-columns: 1fr 1fr;
  }
}
@media(max-width: 767px) {
  .umetnina-konkretna-hero {
    padding-left: 32px;
    padding-right: 32px;
  }
  .umetnina-konkretna-image {
    width: 80%;
  }
  .umetnina-konkretna-features {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .umetnina-konkretna-hero {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
  .umetnina-konkretna-container1 {
    margin-bottom: 16px;
  }
  .umetnina-konkretna-text04 {
    padding-left: 16px;
    padding-right: 16px;
  }
  .umetnina-konkretna-btn-group {
    flex-direction: column;
  }
  .umetnina-konkretna-btn-group1 {
    flex-direction: column;
  }
  .umetnina-konkretna-features {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
  .umetnina-konkretna-container2 {
    grid-gap: 8px;
  }
}
</style>
