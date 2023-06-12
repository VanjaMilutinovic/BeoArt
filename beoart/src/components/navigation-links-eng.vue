<template>
  <nav class="links" v-bind:class="rootClassName">
    <router-link to="/eng" class="navlink">{{ text }}</router-link>
    <router-link to="/umetnine-eng" class="navlink">
      {{ text1 }}
    </router-link>
    <router-link to="/umetnici-eng" class="navlink">
      {{ text2 }}
    </router-link>
    <router-link to="/moj-nalog-eng" class="navlink">
      {{ text3 }}
    </router-link>
    <router-link to="/o-nama-eng" class="navlink">
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
  name: 'NavigationLinksEng',
  props: {
    text4: {
      type: String,
      default: 'About us',
    },
    text: {
      type: String,
      default: 'Home',
    },
    text1: {
      type: String,
      default: 'Art',
    },
    text3: {
      type: String,
      default: 'My account',
    },
    text2: {
      type: String,
      default: 'Artists',
    },
    rootClassName: String,
  },
}
</script>

