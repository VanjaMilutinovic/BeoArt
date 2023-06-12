<template>
  <div class="login-container">
    <app-header></app-header>

    <div class="login-card">
      <h2 class="login-text">Login</h2>
      <span class="login-text1">Username</span>
      <input type="text" class="login-textinput input" placeholder="ex.petar"
              name='username' v-model="username">
      <span class="login-text1">Password</span>
      <input type="text" class="login-textinput input" placeholder="password here"
              name='password' v-model="password">
      <router-link to="/registracija" class="login-navlink">
        <span>You do not have an account?</span>
        <span class="login-text4">Register now!</span>
      </router-link>
      <button @click='login()' class="login-navlink1 button">
        Log in
      </button> 
    </div>
    <app-footer rootClassName="footer-root-class-name6"></app-footer>
  </div>
</template>

<style scoped>
.login-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #202020;
}
.login-card {
  width: 474px;
  display: flex;
  margin-top: 120px;
  align-items: center;
  padding-top: 32px;
  padding-left: 32px;
  border-radius: 8px;
  margin-bottom: 120px;
  padding-right: 32px;
  flex-direction: column;
  padding-bottom: 32px;
  background-color: #ffffff;
}
.login-text {
  color: #202020;
  font-size: 35px;
  font-style: normal;
  margin-top: 16px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 16px;
}
.login-text1 {
  color: #495057;
  text-align: center;
}
.login-textinput {
  font-size: 1rem;  
  border: 2px solid;
  padding: 10px;
  margin-top: 8px;
  border-color: #9966cc;
  margin-bottom: 32px;
}
.login-text2 {
  color: #495057;
  text-align: center;
}
.login-navlink {
  color: #495057;
  text-align: center;
  text-decoration: none;
}
.login-text4 {
  text-decoration: underline;
}
.login-navlink1 {
  margin-top: 16px;
  padding: 10px;
  padding-left: 20px; padding-right: 20px;
  color: lightgray;
  font-style: normal;
  font-family: Inter;
  font-weight: 600;
  text-decoration: none;
  background-color: #9966cc;
}
</style>

<script>
import AppHeader from '../components/header-eng'
import AppFooter from '../components/footer-eng'
import allUsers from '../data/usersEng.js'
export default {
  name: 'LoginEng',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      username: '',
      password: '',
      korisnici: [],
      reload: false
    }
  },
  metaInfo: {
    title: 'Login',
    meta: [
      {
        property: 'og:title',
        content: 'Login',
      },
    ],
  },
   created(){
    if (localStorage.getItem('korisnici')==null)
      localStorage.setItem('korisnici', JSON.stringify(allUsers))

    this.korisnici = JSON.parse(localStorage.getItem('korisnici'))
  },
  methods: {
    login(){
      let user = this.korisnici.find(u => u.username === this.username && u.password === this.password);
      if(user){
        localStorage.setItem('ulogovan', JSON.stringify(user))
        this.$router.push('moj-nalog')
      }else{
        alert('Invalid username or password');
        window.location.reload();
      }
    }
  }
}
</script>
