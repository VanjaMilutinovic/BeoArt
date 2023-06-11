<template>
  <div class="card5" v-bind:class="rootClassName">
    <img :alt="image_alt" :src="image_src" class="card5-img" />
  </div>
</template>

<style scoped>
.card5 {
  width: 100%;
  display: flex;
  padding: 16px;
  max-width: 1400px;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.card5:hover {
  transform: scale(1.02);
}
.card5-img {
  width: 96px;
  height: 96px;
  align-self: center;
  object-fit: cover;
  border-radius: 4px;
}
</style>

<script>
export default {
  name: 'FeatureCard1',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000',
    },
    rootClassName: String,
    title: {
      type: String,
      default: 'Lorem ipsum',
    },
  },
}
</script>
