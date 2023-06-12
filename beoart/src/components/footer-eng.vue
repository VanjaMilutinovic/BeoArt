<template>
  <footer class="footer-footer" v-bind:class="rootClassName">
    <span class="footer-text">
        Copyright 2023, Vanja Milutinović and Petar Marković,Software Engineering, 
        School of Electrical Engineering, University of Belgrade
    </span>
  </footer>
</template>

<script>
export default {
  name: 'FooterEng',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.footer-footer {
  width: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  padding-top: 32px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 32px;
  justify-content: space-between;
  background-color: #aff0d1;
}
.footer-text {
  font-size: 1.2rem;
  width: 100%;
  height: auto;
  text-align: center;
  margin: 20px;
  padding-left: 40px; padding-right: 40px;
}
.footer-root-class-name {
  max-width: 100%;
}





@media(max-width: 767px) {
  .footer-footer {
    padding-left: 32px;
    padding-right: 32px;
  }
  .footer-text {
    text-align: center;
    margin-left: 16px;
    margin-right: 16px;
  }
  .footer-text1 {
    text-align: center;
    margin-left: 16px;
    margin-right: 16px;
  }
  .footer-text2 {
    text-align: center;
    margin-left: 16px;
    margin-right: 16px;
  }
}
@media(max-width: 479px) {
  .footer-footer {
    padding: 16px;
    flex-direction: column;
  }
  .footer-text {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 16px;
  }
  .footer-text1 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 16px;
  }
  .footer-text2 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 16px;
  }
}
</style>
