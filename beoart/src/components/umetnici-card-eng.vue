<template>
  <div class="umetnici-card" v-bind:class="rootClassName">
    <div class="umetnici-container">
      <span>
        <img :alt="picture_alt" :src="picture_src" class="umetnici-image" />
      </span>
      <span style="width: 60%">
        <div class="umetnici-name">{{ name }}</div>
        <button type="button" class="umetnici-button button" @click='openPdf()'>
          {{ button }}
        </button>
        <div class="umetnici-bio">{{ bio }}</div>
      </span>
    </div>
  </div>
</template>

<style scoped>
.umetnici-card {
  width: 100%; 
  display: flex;
  padding: 32px;
  margin: 24px;
  background: #fff;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.2);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.umetnici-container {
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.umetnici-name {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 8px;
}
.umetnici-image {
  width: 241px;
  height: 256px;
  object-fit: cover;
  border-radius: 50%;
  margin: 32px;
}
.umetnici-button {
  color: #ffffff;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 16px;
  background-color: #9966cc;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.umetnici-bio {
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 8px;
  width:100%
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
      default: 'Art overview',
    },
    name: {
      type: String,
      default: 'Jane Doe',
    },
    pdf_src: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: 1
    }
  },
  methods: {
    openPdf() {
      window.open(this.pdf_src, '_blank');
    },
  }
}
</script>
