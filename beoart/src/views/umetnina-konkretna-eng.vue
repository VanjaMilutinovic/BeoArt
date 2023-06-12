<template>
  <div class="umetnina-konkretna-container">
    <app-header></app-header>
    <!-- ODAVDE -->
    <div class="lang-choice">
      <button type="button" class="header-button button" @click='ENG()'>
        SRB
      </button>
    </div>
    <!-- DO OVDE -->
    <div class="umetnina-konkretna-hero">
      <img
        alt="image"
        :src=this.umetnina.image_src
        class="umetnina-konkretna-image"
      />
      <div class="umetnina-konkretna-container1">
        <h1 class="umetnina-konkretna-text">
          {{this.umetnina.title}}
        </h1>
        <h2 class="umetnina-konkretna-text01">
          <span class="umetnina-konkretna-text02">
            {{this.umetnina.label}}
          </span>
          <br />
        </h2>
    
        <div class="umetnina-konkretna-text04">
          {{this.umetnina.desc}}
        </div>
        <div >Estimated value: <b>{{this.umetnina.proc_vrednost}}</b></div>
        <div>Estimated age: <b>{{this.umetnina.proc_starost}}</b></div>
        <br />

        <!-- PONUDE I PORUKE -->
        <div class="umetnina-konkretna-btn-group">
          <span>Enter your offer: </span>
          <input type="text" placeholder="$500000" class="input umetnina-input1" 
                  name='novaPonuda' v-model="novaPonuda"/>
          <button class="umetnina-konkretna-button button" @click='ponudi()'>Offer</button>
        </div>
        <div>
          <button class="umetnina-button button" @click='showAll()'>
            View all offers
          </button>
        </div>
        <div class="umetnina-konkretna-btn-group1">
          <span class="umetnina-konkretna-text26">Enter your message: </span>
          <input
            name='novaPoruka' v-model="novaPoruka"
            type="text" placeholder="text" class="umetnina-input2 input"
          />
          <button class="umetnina-konkretna-button2 button" @click='posalji()'>Send</button>
        </div>
      </div>
    </div>

    <!-- SVE PONUDE -->
    <div class="home-banner1">
      <span class="home-blog" v-for='p in this.ponudeShowing' :key='p.id'>
        <span v-if='p.tip==0 && p.id_umetnine==this.id'>
           <BlogPostCard1 class="home-container1"
                      :label='p.label' :title='p.title' :author='p.author'
                      :image_src='p.image_src' :description='p.description' >
            </BlogPostCard1>
        </span>
      </span>
    </div>
    <!-- GALERIJA -->
    <div class="umetnina-konkretna-features">
      <h1 class="umetnina-konkretna-text27">Picture gallery</h1>
      <div class="umetnina-konkretna-container2">
        <FeatureCard1 :image_src='"/"+this.id+"/1.jpg"'></FeatureCard1>
        <FeatureCard1 :image_src='"/"+this.id+"/2.jpg"'></FeatureCard1>
        <FeatureCard1 :image_src='"/"+this.id+"/3.jpg"'></FeatureCard1>
        <FeatureCard1 :image_src='"/"+this.id+"/4.jpg"'></FeatureCard1>        
      </div>
    </div>

    <!-- FOOTER -->
    <app-footer rootClassName="footer-root-class-name9"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header-eng'
import FeatureCard1 from '../components/feature-card1'
import AppFooter from '../components/footer-eng'
import Umetnine from '../data/umetnineEng.js'
import BlogPostCard1 from '../components/blog-post-card1.vue'

export default {
  name: 'UmetninaKonkretnaEng',
  components: {
    AppHeader,
    FeatureCard1,
    AppFooter,
    BlogPostCard1
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
  props: {
   id: { 
      type: String,
      default: '1',
    },
  },
  data(){
    return{
      umetnina: {},
      user: {},
      novaPonuda: '',
      novaPoruka: '',
      ponude: [],
      ponudeShowing: [],
    }
  },
  methods: {
    ENG(){
      this.$router.push('/konk-umetnina/'+this.id)
    },
    getmax(){
      let svePonude = JSON.parse(localStorage.getItem('ponude'))
      let max = 0
      for (let i=0; i<svePonude.length; i++){
        if (svePonude[i].id>max)
          max = svePonude[i].id
      }
      return max
    },
    ponudi(){
      if (localStorage.getItem('ulogovan')==null){
        this.$router.push('/login')
        return
      }

      let kor = JSON.parse(localStorage.getItem('ulogovan'))
      this.user = kor;
      let svePonude = JSON.parse(localStorage.getItem('ponude'))
      let max = 0
      for (let i=0; i<svePonude.length; i++){
        if (svePonude[i].id>max)
          max = svePonude[i].id
      }
      let nova = {
        id: max+1,
        label: this.umetnina.label,
        title: this.umetnina.title,
        description: this.novaPonuda,
        id_umetnine: this.umetnina.id,
        author: this.user.name, 
        image_src: this.umetnina.image_src,
        tip: 0
      }
      svePonude.push(nova)
      localStorage.setItem('ponude', JSON.stringify(svePonude))
      this.novaPonuda=''
      this.ponude=svePonude
    },
    posalji(){
      if (localStorage.getItem('ulogovan')==null){
        this.$router.push('/login')
        return
      }
      alert(localStorage.getItem('ulogovan'))
      let kor = JSON.parse(localStorage.getItem('ulogovan'))
      this.user = kor;
      let svePonude = JSON.parse(localStorage.getItem('ponude'))
      let max = 0
      for (let i=0; i<svePonude.length; i++){
        if (svePonude[i].id>max)
          max = svePonude[i].id
      }
      let nova = {
        id: max+1,
        label: this.umetnina.label,
        title: this.umetnina.title,
        id_umetnine: this.umetnina.id,
        description: this.novaPoruka,
        author: this.user.name, 
        image_src: this.umetnina.image_src,
        tip: 1
      }
      svePonude.push(nova)
      localStorage.setItem('ponude', JSON.stringify(svePonude))
      this.ponude=svePonude
      this.novaPoruka=''
    },
    showAll(){
      this.ponude = JSON.parse(localStorage.getItem('ponude'))
      this.ponudeShowing = this.ponude;
    }
  },
  created(){
    this.user = localStorage.getItem('ulogovan')
    if(localStorage.getItem('umetnine')==null){
      localStorage.setItem('umetnine', JSON.stringify(Umetnine))
      this.umetnina = Umetnine[this.id-1]
    }
    else{
      let sveUmetnine = JSON.parse(localStorage.getItem('umetnine'))
      this.umetnina = sveUmetnine[this.id-1]
    }
    if (localStorage.getItem('ponude')==null){
      localStorage.setItem('ponude', JSON.stringify(Ponude))
      this.ponude = Ponude
    }
    else
      this.ponude = JSON.parse(localStorage.getItem('ponude'))
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
.umetnina-button {
  color: white;
  width: 100%;
  font-weight: 700;
  padding: 8px;
  background-color: #9966cc;
}
.umetnina-button:hover {
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
.umetnina-input1 {
  padding: 7px;
  margin-left: 16px;
  border: 2px solid #9966cc;
}
.umetnina-input2 {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 2px solid #9966cc;
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
