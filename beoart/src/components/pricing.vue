<template>
  <div class="gallery" v-bind:class="rootClassName">
    <div class="gallery-container">
      <div class="gallery-card">
        <span class="gallery-text">{{ text }}</span>
        <img :alt="image_alt" :src="image_src" class="gallery-img" />
      </div>
      <div class="gallery-card1">
        <span class="gallery-text1">{{ text1 }}</span>
        <img :alt="image_alt2" :src="image_src2" class="gallery-img" />
      </div>
      <div class="gallery-card2">
        <span class="gallery-text2">{{ text2 }}</span>
        <img :alt="image_alt1" :src="image_src1" class="gallery-img" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  width: 100%;
  display: flex;
  position: relative;
  background-size: cover;
  justify-content: center;
  background-image: url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzd2lzcyUyMGNoZWVzZSUyMHBsYW50fGVufDB8fHx8MTYyNTg0MTU0Mg&ixlib=rb-1.2.1&h=1200');
  background-position: center;
}
.gallery-container {
  width: 100%;
  display: flex;
  padding: 48px;
  max-width: 1400px;
  align-items: center;
  background-size: cover;
  justify-content: center;
  background-color: #303030;
}
.gallery-card {
  width: 100%;
  display: flex;
  padding: 48px;
  max-width: 450px;
  min-height: 450px;
  transition: 0.3s;
  align-items: flex-start;
  padding-top: 32px;
  margin-right: 32px;
  padding-left: 32px;
  padding-right: 32px;
  flex-direction: column;
  padding-bottom: 32px;
  justify-content: space-between;
  background-color: lightgray;
}
.gallery-card:hover {
  transform: scale(1.02);
}
.gallery-text {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 32px;
  text-transform: uppercase;
}
.gallery-img {
  width: 270px;
  height: 318px;
  align-self: center;
  object-fit: cover;
}
.gallery-card1 {
  width: 100%;
  display: flex;
  padding: 32px;
  max-width: 450px;
  min-height: 450px;
  transition: 0.3s;
  align-items: flex-start;
  margin-right: 32px;
  flex-direction: column;
  background-color: lightgray;
}
.gallery-card1:hover {
  transform: scale(1.02);
}
.gallery-text1 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 32px;
  text-transform: uppercase;
}
.gallery-img1 {
  width: 293px;
  height: 408px;
  align-self: center;
  object-fit: cover;
}
.gallery-card2 {
  width: 100%;
  display: flex;
  padding: 48px;
  max-width: 450px;
  min-height: 450px;
  transition: 0.3s;
  align-items: flex-start;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  flex-direction: column;
  padding-bottom: 32px;
  background-color: lightgray;
}
.gallery-card2:hover {
  transform: scale(1.02);
}
.gallery-text2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 32px;
  text-transform: uppercase;
}
.gallery-img2 {
  width: 270px;
  height: 318px;
  align-self: center;
  object-fit: cover;
}
@media(max-width: 991px) {
  .gallery-card {
    width: 100%;
    padding: 32px;
    max-width: 100%;
    align-items: center;
  }
  .gallery-card1 {
    width: 100%;
    max-width: 100%;
    align-items: center;
  }
  .gallery-card2 {
    width: 100%;
    max-width: 100%;
    align-items: center;
  }
}
@media(max-width: 767px) {
  .gallery-container {
    flex-flow: column;
    padding-left: 32px;
    padding-right: 32px;
  }
  .gallery-card {
    width: 100%;
    max-width: 450px;
    align-items: center;
    margin-right: 0px;
    margin-bottom: 32px;
  }
  .gallery-card1 {
    width: 100%;
    max-width: 450px;
    align-items: center;
    margin-right: 0px;
    margin-bottom: 32px;
  }
  .gallery-card2 {
    width: 100%;
    max-width: 450px;
    align-items: center;
    margin-right: 0px;
    margin-bottom: 32px;
  }
}
@media(max-width: 479px) {
  .gallery-container {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
  .gallery-card2 {
    margin-bottom: 0px;
  }
}
</style>

<script>
export default {
  name: 'Pricing',
  props: {
    text2: {
      type: String,
      default: 'NEKI CAP',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    text: {
      type: String,
      default: 'Neki cap',
    },
    image_alt2: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default: '/40120_girl-with-a-pearl-earring-g1bc78cda1-1920_orig-500h.jpg',
    },
    text1: {
      type: String,
      default: 'NEKI CAP',
    },
    image_src: {
      type: String,
      default: '/40120_girl-with-a-pearl-earring-g1bc78cda1-1920_orig-500h.jpg',
    },
    image_src2: {
      type: String,
      default: '/40120_girl-with-a-pearl-earring-g1bc78cda1-1920_orig-500h.jpg',
    },
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>
