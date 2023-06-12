<template>
  <div class="moj-nalog-container">
    <app-header rootClassName="header-root-class-name5"></app-header>
    <h1 class="moj-nalog-text">
      <span>Zdravo, {{user.name}}!</span>
    </h1>
    <div style="width: 80%">
      <button type="button" class="moj-nalog-button" @click='logout()'> 
        Izloguj se
      </button>
    </div>
    <span class="moj-nalog-text3">
      Vaše ponude i poruke:
    </span>
    <div class="moj-nalog-blog" style="width: 90%">
      <span class="moj-nalog-container1" v-for='p in this.ponude' :key=p.id>
        <span v-if='p.author==this.user.name'>
        <BlogPostCard2 class="home-container1"
                        :label='p.label' :title='p.title' :id='p.id'
                        :image_src='p.image_src' :description='p.description' >
                        </BlogPostCard2></span>
      </span>
    </div>
    <app-footer rootClassName="footer-root-class-name8"></app-footer>
  </div>
</template>

<style scoped>
.moj-nalog-button{
  align-self: flex-end;
  border: 2px solid #9966cc;
  color: white;
  background-color: #9966cc;
  padding: 8px;
  padding-right: 10px;
}
.moj-nalog-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.moj-nalog-text {
  align-self: center;
  margin-top: 32px;
  margin-left: 48px;
  margin-right: 48px;
}
.moj-nalog-text3 {
  font-size: 25px;
  align-self: center;
  margin-top: 32px;
  margin-left: 0px;
}
.home-container1 {
  width: 100%;
  margin-bottom: 32px;
  margin-top: 32px;
  justify-content: space-between;
}
.moj-nalog-blog {
  width: 100%;
  display: flex;
  padding: 0px;
  max-width: 1400px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.moj-nalog-container1 {
  width: 100%;
  position: relative;
  align-items: center;  
  justify-content: space-between;
}
.moj-nalog-container2 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: space-between;
}
@media(max-width: 767px) {
  .moj-nalog-blog {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .moj-nalog-blog {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
}
</style>

<script>
import AppHeader from '../components/header'
import BlogPostCard2 from '../components/blog-post-card2'
import AppFooter from '../components/footer'
import Ponude from '../data/ponude.js'
export default {
  name: 'MojNalog',
  components: {
    AppHeader,
    BlogPostCard2,
    AppFooter,
  },
  metaInfo: {
    title: 'Moj-nalog - BeoArt',
    meta: [
      {
        property: 'og:title',
        content: 'Moj-nalog - BeoArt',
      },
    ],
  },
  data(){
    return{
      ponude: [],
      user: {},
    }
  },
  created(){
    if (localStorage.getItem('ulogovan')==null)
      this.$router.push('login')
    else
      this.user = JSON.parse(localStorage.getItem('ulogovan'))

    if (localStorage.getItem('ponude')==null){
      localStorage.setItem('ponude', JSON.stringify(Ponude))
      this.ponude = Ponude
    }
    else
      this.ponude = JSON.parse(localStorage.getItem('ponude'))   
  },
  methods: {
    logout(){
      localStorage.removeItem('ulogovan')
      this.$router.push('login')
    }
  }

}
</script>
