<template>
  <div class="umetnici-card" v-bind:class="rootClassName">
    <div class="umetnici-container">
      <span class="umetnici-name">{{ name }}</span>
      <img :alt="picture_alt" :src="picture_src" class="umetnici-image" />
      <button type="button" class="umetnici-button button">
        {{ button }}
      </button>
      <span class="umetnici-bio">{{ bio }}</span>
    </div>
  </div>
</template>

<style scoped>
.umetnici-card {
  display: flex;
  padding: 32px;
  max-width: 1400px;
  background: #fff;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  align-items: center;
  padding-top: 32px;
  flex-direction: column;
  justify-content: space-between;
}
.umetnici-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.umetnici-name {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 8px;
}
.umetnici-image {
  width: 241px;
  height: 256px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 32px;
}
.umetnici-button {
  color: #ffffff;
  border-color: #303030;
  border-radius: 8px;
  margin-bottom: 24px;
  background-color: #303030;
}
.umetnici-bio {
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 8px;
}






@media(max-width: 767px) {
  .umetnici-card {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .umetnici-card {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
  .umetnici-name {
    margin-bottom: 8px;
  }
  .umetnici-bio {
    margin-bottom: 8px;
  }
}
</style>

<script>
export default {
  name: 'UmetniciCard',
  props: {
    bio: {
      type: String,
      default: 'This is a bio for artists',
    },
    rootClassName: String,
    picture_alt: {
      type: String,
      default: 'profile',
    },
    picture_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=300',
    },
    button: {
      type: String,
      default: 'Pregled dela',
    },
    name: {
      type: String,
      default: 'Jane Doe',
    },
  },
}
</script>
