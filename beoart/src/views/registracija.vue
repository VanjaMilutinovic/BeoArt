<template>
  <div class="registracija-container">
    <app-header></app-header>
    <div class="registracija-feature-card">
      <h2 class="registracija-text">Register</h2>
      <span class="registracija-text01">Korisničko ime</span>
      <input
        type="text"
        placeholder="ex. petar"
        class="registracija-textinput input"
      />
      <span class="registracija-text02">Lozinka</span>
      <input
        type="text"
        placeholder="enter password"
        class="registracija-textinput1 input"
      />
      <span class="registracija-text03">
        <span>Ponovljena lozinka</span>
        <br />
      </span>
      <input
        type="text"
        placeholder="repeat password"
        class="registracija-textinput2 input"
      />
      <span class="registracija-text06">Email</span>
      <input
        type="text"
        placeholder="enter password"
        class="registracija-textinput3 input"
      />
      <span class="registracija-text07">
        <span>Pol</span>
        <br />
      </span>
      <input
        type="text"
        placeholder="      Muško                  Žensko"
        class="registracija-textinput4 input"
      />
      <router-link to="/login" class="registracija-navlink">
        <span>
          Već imaš nalog?
          <span v-html="raw1e7w"></span>
        </span>
        <span class="registracija-text11">Ulog</span>
        <span class="registracija-text12">uj se!</span>
        <br />
      </router-link>
      <router-link to="/moj-nalog" class="registracija-navlink1 button">
        Registruj se
      </router-link>
    </div>
    <app-footer rootClassName="footer-root-class-name7"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppFooter from '../components/footer'

export default {
  name: 'Registracija',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      raw1e7w: ' ',
    }
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
.registracija-feature-card {
  width: 474px;
  height: 709px;
  display: flex;
  position: relative;
  margin-top: 120px;
  align-items: center;
  padding-top: 32px;
  border-color: #303030;
  border-width: 1px;
  padding-left: 32px;
  border-radius: 8px;
  margin-bottom: 120px;
  padding-right: 32px;
  flex-direction: column;
  padding-bottom: 32px;
  background-color: #ffffff;
}
.registracija-text {
  color: rgb(32, 32, 32);
  font-size: 35px;
  font-style: normal;
  margin-top: 8px;
  text-align: center;
  font-weight: 500;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 8px;
}
.registracija-text01 {
  color: #495057;
  margin-top: 16px;
  text-align: center;
}
.registracija-textinput {
  margin-top: 8px;
  border-color: #9966cc;
  margin-bottom: 32px;
}
.registracija-text02 {
  color: #495057;
  text-align: center;
}
.registracija-textinput1 {
  margin-top: 8px;
  border-color: #9966cc;
  margin-bottom: 32px;
}
.registracija-text03 {
  color: #495057;
  text-align: center;
}
.registracija-textinput2 {
  margin-top: 8px;
  border-color: #9966cc;
  margin-bottom: 32px;
}
.registracija-text06 {
  color: #495057;
  text-align: center;
}
.registracija-textinput3 {
  margin-top: 8px;
  border-color: #9966cc;
  margin-bottom: 32px;
}
.registracija-text07 {
  color: #495057;
  text-align: center;
}
.registracija-textinput4 {
  margin-top: 8px;
  border-color: #9966cc;
  margin-bottom: 32px;
}
.registracija-navlink {
  left: 136px;
  color: #495057;
  bottom: 96px;
  margin: auto;
  position: absolute;
  text-align: center;
  text-decoration: none;
}
.registracija-text11 {
  text-decoration: underline;
}
.registracija-text12 {
  text-decoration: underline;
}
.registracija-navlink1 {
  left: 175px;
  color: lightgray;
  bottom: 48px;
  position: absolute;
  font-style: normal;
  font-family: Inter;
  font-weight: 600;
  border-width: 0px;
  text-decoration: none;
  background-color: rgb(181, 126, 220);
}
</style>
