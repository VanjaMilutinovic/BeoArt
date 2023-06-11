<template>
  <div class="card4" v-bind:class="rootClassName">
    <img :alt="image_alt" :src="image_src" class="card4-img" />
  </div>
</template>

<style scoped>
.card4 {
  width: 100%;
  display: flex;
  max-width: 1400px;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  flex-direction: column;
  justify-content: space-between;
}
.card4:hover {
  transform: scale(1.02);
}
.card4-img {
  width: 100%;
  height: 100%;
  max-height: 50rem;
  object-fit: cover;
  border-radius: 0px;
}
.blog-post-card4-root-class-name {
  margin-bottom: 64px;
}

.blog-post-card4-root-class-name2 {
  margin-bottom: 48px;
}


</style>

<script>
export default {
  name: 'BlogPostCard4',
  props: {
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1000',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    date: {
      type: String,
      default: 'JULY 24',
    },
    description: {
      type: String,
      default:
        'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    label: {
      type: String,
      default: 'Food & Drink',
    },
    rootClassName: String,
  }
}
</script>
