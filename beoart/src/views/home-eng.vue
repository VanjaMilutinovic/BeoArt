<template>

  <div class="home-container">
    <app-header></app-header>
    <!-- ODAVDE -->
    <div class="lang-choice">
      <button type="button" class="header-button button" @click='ENG()'>
        SRB
      </button>
    </div>
    <!-- DO OVDE -->
    <div class="home-banner">
      <h1 class="home-naslov">Dobro došli u BeoArt!</h1>
      <span class="home-misija">
        <span>
          Our mission is to enrich your life and brighten your days with the most beautiful pieces
          world art With us you can follow the latest works of art
          offers and write your opinion in the form of messages. Also, you have the opportunity to
          follow the latest artists and encourage them to develop new artistic
          works!
        </span>
        <br />
        <br />
      </span>
      <router-link to="/o-nama" class="home-navlink button">
        Find out more about us!
      </router-link>
    </div>
    <div class="home-banner1">
      <span class="home-blog" v-for='p in this.top3Ponude' :key=p.id>
        <BlogPostCard1 class="home-container1"
                      :label='p.label' :title='p.title' :author='p.author'
                      :image_src='p.image_src' :description='p.description' >
                      </BlogPostCard1>
      </span>
    </div>
    

    <div class="home-banner1">
      <div class="home-container4">
        <h1 class="home-budi-u-toku">
          Do you want to keep up to date with the latest activities in BeoArt?
        </h1>
        <span class="home-newsletter">
          Sign up for our newsletter now! You just need to enter yours
          email address, and we will report to you about key events in BeoArt
          gallery!
        </span>
        <div class="home-nl-prijava">
          <input type="text" placeholder="Email ..." class="home-naslov-input input"
                  name="newsletter_mail" v-model="newsletter_mail"/>
          <button class="home-button button" @click='newsletter()'>Apply</button>
        </div>
      </div>
      <img
        alt="image"
        src="/screenshot_2023-06-07_at_02.30.42-removebg-preview-300w.png"
        class="home-image"
      />
    </div>
    <app-footer rootClassName="footer-root-class-name"></app-footer>
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
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-banner {
  width: 100%;
  display: flex;
  padding: 48px;
  align-items: center;
  margin-left: 0px;
  margin-right: 0px;
  flex-direction: column;
  padding-bottom: 48px;
  justify-content: space-between;
}
.home-naslov {
  font-size: 3rem;
  text-align: center;
}
.home-misija {
  max-width: 1400px;
  margin-top: 32px;
  text-align: center;
  margin-left: 96px;
  margin-right: 96px;
  margin-bottom: 16px;
  font-size: 20px;
}
.home-navlink {
  font-weight: 500;
  font-size: 25px;
  transition: 0.3s;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 0;
  text-decoration: none;
}
.home-navlink:hover {
  transform: scale(1.02);
}
.home-blog {
  width: 100%;
  display: flex;
  margin: 48px;
  margin-top: 0px; 
  max-width: 1400px;
  align-items: center;
  justify-content: space-between;
}
.home-container1 {
  display: flex;
  width: 30%;
  margin-right: 32px;
  justify-content: space-between;
}
.home-banner1 {
  width: 100%;
  display: flex;
  padding: 48px;
  padding-bottom: 24px;
  max-width: 1400px;
  align-items: center;
  justify-content: space-between;
}
.home-container4 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-right: 96px;
  flex-direction: column;
  justify-content: space-between;
}
.home-budi-u-toku {
  text-align: left;
  font-weight: 600;
  margin-bottom: 16px;
}
.home-newsletter {
  margin-right: 48px;
  font-size: 20px;
}
.home-nl-prijava {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 32px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.home-naslov-input {
  font-size: 1rem;
  border-color: #595959;
  border-radius: 4px;
  border: 2px solid;
  padding: 10px;
}
.home-button {
  font-size: 1rem;
  font-weight: 500;
  transition: 0.3s;
  margin-left: 16px;
  padding: 12px;
  color: #595959;
  background-color: #303030;
}
.home-button:hover {
  color: lightgray;
  background-color: #303030;
}
.home-image {
  width: auto;
  height: auto;
  object-fit: cover;
  flex-shrink: 0;
}
@media(max-width: 991px) {
  .home-misija {
    max-width: 100%;
  }
  .home-blog {
    flex-direction: column;
  }
  .home-container1 {
    margin-right: 0px;
    margin-bottom: 48px;
  }
  .home-banner1 {
    flex-direction: column;
  }
  .home-container4 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: 48px;
  }
  .home-newsletter {
    text-align: center;
    margin-left: 48px;
  }
  .home-nl-prijava {
    justify-content: center;
  }
  .home-image {
    width: 288px;
    height: 288px;
  }
}
@media(max-width: 767px) {
  .home-banner {
    padding-left: 32px;
    padding-right: 32px;
  }
  .home-misija {
    padding-left: 16px;
    padding-right: 16px;
  }
  .home-blog {
    padding-left: 32px;
    padding-right: 32px;
  }
  .home-banner1 {
    padding-left: 32px;
    padding-right: 32px;
  }
  .home-newsletter {
    margin-left: 16px;
    margin-right: 16px;
  }
}
@media(max-width: 479px) {
  .home-banner {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
  .home-blog {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
  .home-banner1 {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
  .home-nl-prijava {
    align-items: center;
    flex-direction: column;
  }
  .home-button {
    margin-top: 16px;
    margin-left: 0px;
  }
  .home-image {
    width: 192px;
    height: 192px;
  }
}
</style>

<script>
import AppHeader from '../components/header-eng'
import BlogPostCard1 from '../components/blog-post-card1'
import AppFooter from '../components/footer-eng'
import Ponude from '../data/ponudeEng'

export default {
  name: 'HomeEng',
  components: {
    AppHeader,
    BlogPostCard1,
    AppFooter,
  },
  created(){
    
    if (localStorage.getItem('ponude')==null){
      localStorage.setItem('ponude', JSON.stringify(Ponude))
      this.ponude = Ponude
    }
    else
      this.ponude = JSON.parse(localStorage.getItem('ponude'))

    this.top3Ponude=[]
    var counter = 0
    for(var i = this.ponude.length-1; i > -1; i--){
      if(this.ponude[i].tip == 0){
        this.top3Ponude.push(this.ponude[i])
        counter++
      }
      if(counter == 3)break
    }
  },
  data(){
    return{
      ponude: [],
      top3ponude: [],
      newsletter_mail: ''
    }
  },
  methods: {
    newsletter(){
      if (this.newsletter_mail=='')
        alert('Morate uneti email adresu!')
      else{
        if(localStorage.getItem('mails')==null)
          localStorage.setItem('mails', JSON.stringify([this.newsletter_mail]))
        else{
          let all_mails = JSON.parse(localStorage.getItem('mails'))
          all_mails.push(this.newsletter_mail)
          localStorage.setItem('mails', JSON.stringify([all_mails]))
        }
        
        alert('Uspešno ste se prijavili na naš newsletter!')
        this.newsletter_mail=''
      }
    },
    ENG(){
      this.$router.push('/home')
    }
    
  },
  metaInfo: {
    title: 'BeoArt',
    meta: [
      {
        property: 'og:title',
        content: 'BeoArt',
      },
    ],
  },
}
</script>
