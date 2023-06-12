<template>
  <header data-role="Header" class="header-header" v-bind:class="rootClassName">
    <img :alt="image_alt" :src="image_src" class="header-image" />
    <div class="header-nav">
      <navigation-links rootClassName="rootClassName10"></navigation-links>
    </div>

    <div data-role="BurgerMenu" class="header-burger-menu">
      <div class="header-nav1">
        <navigation-links rootClassName="rootClassName11"></navigation-links>
      </div>
    </div>

   
  </header>
</template>

<script>
import NavigationLinks from './navigation-links-eng'

export default {
  name: 'HeaderEng',
  props: {
    rootClassName: String,
    image_src: {
      type: String,
      default: '/beoart-200h.png',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default:
        'https://presentation-website-assets.teleporthq.io/logos/logo.png',
    },
  },
  components: {
    NavigationLinks,
  },
}
</script>

<style scoped>
.header-header {
  width: 100%;
  display: flex;
  position: relative;
  max-width: 100%;
  align-items: center;
  padding-top: 32px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 32px;
  justify-content: space-between;
  background-color: #aaf0d1;
}
.header-image {
  margin: 10px;
  width: 200px;
  height: 47px;
  object-fit: cover;
}
.header-nav {
  display: flex;
}

.header-burger-menu {
  display: none;
}
.header-icon {
  width: 16px;
  height: 16px;
}
.header-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.header-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-container {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  justify-content: space-between;
}
.header-image1 {
  height: 2rem;
}
.header-menu-close {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-icon02 {
  width: 16px;
  height: 16px;
}
.header-icon04 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.header-icon06 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.header-icon08 {
  width: 16px;
  height: 16px;
}


@media(max-width: 767px) {
  .header-header {
    padding-left: 32px;
    padding-right: 32px;
  }
  .header-nav {
    display: none;
  }
  .header-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media(max-width: 479px) {
  .header-header {
    padding: 16px;
  }
  .header-mobile-menu {
    padding: 16px;
  }
}
</style>
