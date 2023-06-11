<template>
  <div class="umetnine-card" v-bind:class="rootClassName">
    <div class="umetnine-container">
      <span class="umetnine-name">{{ name }}</span>
      <img :alt="picture_alt" :src="picture_src" class="umetnine-img" />
    </div>
  </div>
</template>

<style scoped>
.umetnine-card {
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
.umetnine-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.umetnine-name {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 8px;
}
.umetnine-img {
  width: 241px;
  height: 256px;
  object-fit: cover;
  border-radius: 50%;
}



@media(max-width: 767px) {
  .umetnine-card {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .umetnine-card {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
  .umetnine-name {
    margin-bottom: 8px;
  }
}
</style>

<script>
export default {
  name: 'UmetnineCard',
  props: {
    picture_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=300',
    },
    quote: {
      type: String,
      default: 'dasdas',
    },
    rootClassName: String,
    picture_alt: {
      type: String,
      default: 'profile',
    },
    name: {
      type: String,
      default: 'Jane Doe',
    },
  },
}
</script>
