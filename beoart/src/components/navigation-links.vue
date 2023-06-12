<template>
  <nav class="links" v-bind:class="rootClassName">
    <router-link to="/" class="navlink">{{ text }}</router-link>
    <router-link to="/umetnine" class="navlink">
      {{ text1 }}
    </router-link>
    <router-link to="/umetnici" class="navlink">
      {{ text2 }}
    </router-link>
    <router-link to="/moj-nalog" class="navlink">
      {{ text3 }}
    </router-link>
    <router-link to="/o-nama" class="navlink">
      {{ text4 }}
    </router-link>
  </nav>
</template>

<style scoped>
.links {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  
}
.navlink {
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.2rem;
  
}
@media(max-width: 767px) {
  .links {
    align-items: flex-start;
    flex-direction: column;
  }
  .navlink {
    margin-bottom: 10px;
  }
}
</style>

<script>
export default {
  name: 'NavigationLinks',
  props: {
    text4: {
      type: String,
      default: 'O nama',
    },
    text: {
      type: String,
      default: 'Početna',
    },
    text1: {
      type: String,
      default: 'Umetnine',
    },
    text3: {
      type: String,
      default: 'Moj nalog',
    },
    text2: {
      type: String,
      default: 'Umetnici',
    },
    rootClassName: String,
  },
}
</script>

