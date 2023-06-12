<template>
  <div class="o-nama-container">
    <app-header></app-header>
    <!-- ODAVDE -->
    <div class="lang-choice">
      <button type="button" class="header-button button" @click='ENG()'>
        SRB
      </button>
    </div>
    <!-- DO OVDE -->

    <!-- INFO -->
    <h1 class="o-nama-text">We are BeoArt!</h1>
    <span class="o-nama-text01">
      <span class="o-nama-text02">
        Our mission is to enrich your life and brighten your days with the most beautiful pieces
        world art With us you can follow the latest works of art and make offers
        and write your opinion in the form of messages. Also, you have the opportunity to follow
        the latest artists and encourage them to develop new works of art!
      </span>
      <br />
    </span>

    <!-- STATISTIKA -->
    <div class="o-nama-stats">
      <div class="o-nama-stat">
        <h1 class="o-nama-broj">
          <span>50</span>
          <span>+</span>
        </h1>
        <span class="o-nama-tekst">Satisfied customers</span>
      </div>
      <div class="o-nama-stat">
        <h1 class="o-nama-broj"><span>369</span></h1>
        <span class="o-nama-tekst">Exhibited works of art</span>
      </div>
      <div class="o-nama-stat">
        <h1 class="o-nama-broj">
          <span>500</span>
          <span>+</span>
        </h1>
        <span class="o-nama-tekst">Message and offer</span>
      </div>
      <div class="o-nama-stat">
        <h1 class="o-nama-broj"><span>24/7</span></h1>
        <span class="o-nama-tekst">Support</span>
      </div>
    </div>

    <!-- GALERIJA -->
    <div class="o-nama-blog">
      <blog-post-card4
        image_src="/oNama/3.jpg"
      ></blog-post-card4>
      <div class="o-nama-container1">
        <blog-post-card4
          image_src="/oNama/1.jpg"
        ></blog-post-card4>h
        <blog-post-card4
          image_src="/oNama/2.jpg"
        ></blog-post-card4>
      </div>
      <blog-post-card4
        image_src="/oNama/4.jpg"
      ></blog-post-card4>
    </div>
    
    <!-- MAPA -->
    <div style="width: 85%">
      <iframe width="100%" height="600" frameborder="0" scrolling="no" 
        marginheight="0" marginwidth="0" 
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Francuska%11%20Beograd+(Mapa)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        <a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
      </iframe>
    </div>
    
    <!-- KONTAKT -->
    <div class="o-nama-kontakt">
      Contact us 064/ 123 4567
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header-eng'
import BlogPostCard4 from '../components/blog-post-card4'
import AppFooter from '../components/footer-eng'

export default {
  name: 'ONamaEng',
  components: {
    AppHeader,
    BlogPostCard4,
    AppFooter,
  },
  metaInfo: {
    title: 'Oo-nama - BeoArt',
    meta: [
      {
        property: 'og:title',
        content: 'Oo-nama - BeoArt',
      },
    ],
  },
  methods:{
    ENG(){
      this.$router.push('/o-nama')
    }
  }
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
.o-nama-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.o-nama-text {
  color: #303030;
  margin-top: 32px;
}
.o-nama-text01 {
  color: rgb(0, 0, 0);
  font-size: 20px;
  padding-top: 32px;
  padding-left: 96px;
  padding-right: 96px;
  padding-bottom: 32px;
}
.o-nama-text02 {
  color: #303030;
  font-size: 20px;
}
.o-nama-stats {
  width: 100%;
  display: grid;
  padding: 48px;
  grid-gap: 32px;
  max-width: 1400px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.o-nama-stat {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.o-nama-broj {
  color: #9966cc;
  font-size: 3rem;
}
.o-nama-tekst {
  font-size: 1.15rem;
  margin-top: 8px;
  text-align: center;
}
.o-nama-blog {
  width: 100%;
  display: flex;
  padding: 48px;
  max-width: 1400px;
  align-items: center;
  justify-content: space-between;
}
.o-nama-container1 {
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-left: 32px;
  margin-right: 32px;
  flex-direction: column;
  justify-content: flex-start;
}
.o-nama-banner {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-fourunits);
  padding-left: 48px;
  padding-right: 48px;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fourunits);
  background-size: cover;
  justify-content: space-between;
  background-image: url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fHx8MTYyNjE4NDA0Mg&ixlib=rb-1.2.1&w=1500');
  background-position: center;
}
.o-nama-text18 {
  color: rgb(48, 48, 48);
  font-size: 3rem;
  text-align: center;
  margin-bottom: 16px;
}
.o-nama-social-bar {
  width: 100%;
  display: flex;
  padding: 48px;
  justify-content: center;
}
.o-nama-kontakt {
  margin: 32px;
  font-size: 1.2rem;
}
.o-nama-icon {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.o-nama-icon02 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.o-nama-icon04 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.o-nama-icon06 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.o-nama-icon08 {
  width: 16px;
  height: 16px;
}
@media(max-width: 991px) {
  .o-nama-broj {
    text-align: center;
  }
  .o-nama-text08 {
    text-align: center;
  }
  .o-nama-text11 {
    text-align: center;
  }
  .o-nama-text15 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .o-nama-stats {
    padding-left: 32px;
    padding-right: 32px;
    grid-template-columns: 1fr 1fr;
  }
  .o-nama-tekst {
    text-align: center;
  }
  .o-nama-text10 {
    text-align: center;
  }
  .o-nama-text14 {
    text-align: center;
  }
  .o-nama-text17 {
    text-align: center;
  }
  .o-nama-blog {
    padding-left: 32px;
    padding-right: 32px;
    flex-direction: column;
  }
  .o-nama-container1 {
    flex: 0 0 auto;
    margin-left: 0px;
    margin-right: 0px;
  }
  .o-nama-banner {
    padding-left: 32px;
    padding-right: 32px;
  }
  .o-nama-social-bar {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .o-nama-stats {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
    grid-template-columns: 1fr;
  }
  .o-nama-blog {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
  .o-nama-banner {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 48px;
  }
  .o-nama-social-bar {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
}
</style>
