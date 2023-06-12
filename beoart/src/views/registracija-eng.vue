<template>
  <div class="registracija-container">
    <app-header></app-header>
    <div class="registracija-card">
      <h2 class="registracija-text">Register</h2>

      <span class="registracija-text01">Username</span>
      <input type="text" placeholder="ex. petar" class="registracija-textinput input"
              name="username" v-model="username"/>
      <span class="registracija-text01">Password</span>
      <input type="text" placeholder="enter password" class="registracija-textinput input"
              name="password" v-model="password"/>

      <span class="registracija-text01">Repeat password</span>
      <input type="text" placeholder="repeat password" class="registracija-textinput input"
              name='repeat' v-model="repeat"/>

      <span class="registracija-text01">Name</span>
      <input type="text" placeholder="enter password" class="registracija-textinput input"
              name="name" v-model="name"/>
      
      <router-link to="/login" class="registracija-navlink">
        <span>Already have an account?</span>
        <span class="registracija-text11">Log in!</span>
        <br />
      </router-link>
      <button @click='register()' class="registracija-navlink1 button">
        Register
      </button> 
    </div>
    <app-footer rootClassName="footer-root-class-name7"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header-eng'
import AppFooter from '../components/footer-eng'

export default {
  name: 'RegistracijaEng',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      korisnici: [],
      password: '',
      name: '',
      repeat: '',
      username: ''
    }
  },
  created(){
    if (localStorage.getItem('korisnici')==null)
      localStorage.setItem('korisnici', JSON.stringify(allUsers))

    this.korisnici = JSON.parse(localStorage.getItem('korisnici'))
  },
  metaInfo: {
    title: 'Registracija - BeoArt',
    meta: [
      {
        property: 'og:title',
        content: 'Registracija - BeoArt',
      },
    ],
  },
  methods: {
    register(){
      let user = this.korisnici.find(u => u.username === this.username);
  
      if(!user){
        //novi user
        if(this.password!=this.repeat){
          alert('Password and repeat password dont match')
          window.location.reload();
          return
        }
        let max = 0
        for (let i=0; i<this.korisnici.length; i++){
          if (this.korisnici[i].id>max)
            max = this.korisnici[i].id
        }
        let newUser = {
          id: max+1,
          username: this.username,
          password: this.password,
          name: this.name,
        }
        this.korisnici.push(newUser)
        localStorage.setItem('korisnici', JSON.stringify(this.korisnici))
        this.$router.push('login')
      }else{
        alert('This username is taken');
        window.location.reload();
      }
    }
  }
}
</script>

<style scoped>
.registracija-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #202020;
}
.registracija-card {

  display: flex;
  position: relative;
  margin-top: 120px;
  align-items: center;
  padding-top: 32px;
  border-color: #303030;
  border-width: 1px;
  padding-left: 60px;
  border-radius: 8px;
  margin-bottom: 120px;
  padding-right: 60px;
  flex-direction: column;
  padding-bottom: 32px;
  background-color: #ffffff;
}
.registracija-text {
  color: #202020;
  font-size: 35px;
  font-style: normal;
  margin-top: 16px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 16px;
}
.registracija-text01 {
  color: #495057;
  text-align: center;
}
.registracija-textinput {
  font-size: 1rem;  
  border: 2px solid;
  padding: 10px;
  margin-top: 8px;
  border-color: #9966cc;
  margin-bottom: 32px;
  
}
.registracija-navlink {
  left: 136px;
  color: #495057;
  bottom: 96px;
  text-align: center;
  text-decoration: none;
}
.registracija-text11 {
  text-decoration: underline;
}

.registracija-navlink1 {
  margin-top: 16px;
  padding: 10px;
  padding-left: 20px; padding-right: 20px;
  color: white;
  font-style: normal;
  font-family: Inter;
  font-weight: 600;
  text-decoration: none;
  background-color: #9966cc;
}
</style>
