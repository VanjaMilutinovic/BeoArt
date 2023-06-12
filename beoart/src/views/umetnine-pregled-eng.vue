<template>
  <div class="umetnine-pregled-container">
    <app-header rootClassName="header-root-class-name"></app-header>
    <!-- ODAVDE -->
    <div class="lang-choice">
      <button type="button" class="header-button button" @click='ENG()'>
        SRB
      </button>
    </div>
    <!-- DO OVDE -->
    <select class="umetnine-pregled-select" 
            name='sortiranje' v-model='sortiranje'> 
      <option value="0" selected>Sort</option>
      <option value="2">By artist</option>
      <option value="1">By title</option>
    </select>
    <button type="button" class="umetnine-pregled-button1 button"
            @click='sort()'>Sort</button>
    <input type="text" placeholder="pretrazi" class="umetnine-pregled-textinput input" 
            name='pretraga' v-model='pretraga'/>
    <button type="button" class="umetnine-pregled-button button"
            @click='filter()'>Search</button>
    
    <div class="umetnine-pregled-blog">
      <div class="umetnine-pregled-container1">
        <div  class="umetnine-pregled-navlink" v-for='u in this.umetnineShowing' :key=u.id>
           <span v-if='u.type==this.id'>
          <Card3
            :id="u.id"
            :label="u.label"
            :title="u.title"
            :image_src="u.image_src"
          ></Card3>
          </span>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name1"></app-footer>
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
.umetnine-pregled-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.umetnine-pregled-select {
  margin-top: 200px;
  left: 69px;
  position: absolute;
  align-self: flex-start;
  color: #9966cc;
  border: 2px solid #9966cc;
  padding: 3px;
}
.umetnine-pregled-textinput {
  top: 200px;
  border: 2px solid #9966cc;
  right: 133px;
  position: absolute;
  align-self: flex-end;
}
.umetnine-pregled-button1 {
  top: 200px;
  left: 220px;
  position: absolute;
  color:white;
  background-color: #9966cc;
  padding: 5.5px;

}
.umetnine-pregled-button {
  top: 200px;
  right: 23px;
  color:white;
  background-color: #9966cc;
  padding: 5px;
  position: absolute;
}
.umetnine-pregled-blog {
  width: 100%;
  display: flex;
  padding: 48px;
  max-width: 1400px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.umetnine-pregled-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: center;
}
.umetnine-pregled-navlink {
  display: contents;
  margin: 24px;
}
.umetnine-pregled-component1 {
  text-decoration: none;
}
.umetnine-pregled-container2 {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: space-between;
}
.umetnine-pregled-component2 {
  text-decoration: none;
}
@media(max-width: 767px) {
  .umetnine-pregled-blog {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .umetnine-pregled-blog {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
}
</style>

<script>
import AppHeader from '../components/header-eng'
import Card3 from '../components/blog-post-card3-eng.vue'
import AppFooter from '../components/footer-eng'
import sveUmetnine from '../data/umetnineEng.js'
export default {
  name: 'UmetninePregledEng',
  components: {
    AppHeader,
    Card3,
    AppFooter,
  },
  metaInfo: {
    title: 'UmetninePregled - BeoArt',
    meta: [
      {
        property: 'og:title',
        content: 'UmetninePregled - BeoArt',
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
      umetnine: [],
      pretraga: '',
      sortiranje: '',
      umetnineShowing: []
    }
  },
  created(){
    if (localStorage.getItem('umetnine')==null){
      localStorage.setItem('umetnine', JSON.stringify(sveUmetnine))
      this.umetnine = sveUmetnine
      this.umetnineShowing = sveUmetnine
    }
    else
      this.umetnine = JSON.parse(localStorage.getItem('umetnine'))
      this.umetnineShowing = this.umetnine
  },
  methods: {
    ENG(){
      this.$router.push('/pregled-umetnina/'+this.id)
    },
    filter(){ 
      var neededTitle = this.pretraga
      this.umetnineShowing = []
      for(var i = 0; i < this.umetnine.length; i++){
        if(this.umetnine[i].title == neededTitle || this.umetnine[i].label == neededTitle){
          this.umetnineShowing.push(this.umetnine[i])
        }
      }
    },
    sort(){
      var currentType = this.id
      var typeOfSort = this.sortiranje

      if(typeOfSort == 0)
        this.umetnineShowing = this.umetnine

      if(typeOfSort == 1){//sort po nazivu
        var umetnineForSort = []
        for(var i = 0; i < this.umetnine.length; i++){
          if(this.umetnine[i].type == currentType){
            umetnineForSort.push(this.umetnine[i])
          }
        }
        for(var i = 0; i < umetnineForSort.length; i++){
          for(var j = 0; j < umetnineForSort.length; j++){
            if(umetnineForSort[i].title < umetnineForSort[j].title){
              var x = umetnineForSort[i]
              umetnineForSort[i] = umetnineForSort[j]
              umetnineForSort[j] = x
            }
           }
          this.umetnineShowing = umetnineForSort
        }
      }
      if(typeOfSort == 2){//soru po imenuu
        var umetnineForSort = []
        for(var i = 0; i < this.umetnine.length; i++){
          if(this.umetnine[i].type == currentType){
            umetnineForSort.push(this.umetnine[i])
          }
        }
        for(var i = 0; i < umetnineForSort.length; i++){
          for(var j = 0; j < umetnineForSort.length; j++){
            if(umetnineForSort[i].label < umetnineForSort[j].label){
              var x = umetnineForSort[i]
              umetnineForSort[i] = umetnineForSort[j]
              umetnineForSort[j] = x
            }
          }
          this.umetnineShowing = umetnineForSort
        }
      }
    }
  }
}
</script>