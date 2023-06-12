<template>
  <div class="card3" v-bind:class="rootClassName">
    <img :alt="image_alt" :src="image_src" class="card3-img" />
    <div class="card3-container">
      <span class="card3-label">{{ label }}</span>
      <h1 class="card3-title">{{ title }}</h1>
      <div class="card3-container1">
        <span class="card3-desc">{{ description }}</span>
        <button @click='readMore()' class="card3-read-more">Procitaj vise</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card3 {
  width: 100%;
  display: flex;
  max-width: 1400px;
  flex-direction: row;
  justify-content: center;
  margin: 12px;
}
.card3-img {
  width: 500px;
  object-fit: cover;
}
.card3-container {
  flex: 1;
  display: flex;
  padding: 32px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.card3-label {
  color: #595959;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 24px;
  text-transform: uppercase;
}
.card3-title {
  margin-bottom: 48px;
}
.card3-container1 {
  display: flex;
  align-items: flex-start;
  margin-bottom: 48px;
  flex-direction: column;
  justify-content: flex-start;
}
.card3-desc {
  color: #595959;
  margin-bottom: 8px;
}
.card3-read-more {
  font-weight: 500;
  color:white;
  background-color: #9966cc;
  padding: 5px;
  margin-top: 10px;
}
.card3-author {
  color: #595959;
  font-weight: 400;
}


@media(max-width: 991px) {
  .card3-img {
    width: 50%;
  }
}
@media(max-width: 767px) {
  .card3 {
    flex-direction: column;
    justify-content: space-between;
  }
  .card3-img {
    width: 100%;
  }
  .card3-container {
    width: 100%;
  }
  .card3-label {
    margin-bottom: 16px;
  }
  .card3-title {
    margin-bottom: 32px;
  }
  .card3-container1 {
    margin-bottom: 32px;
  }
}
@media(max-width: 479px) {
  .card3-read-more {
    width: auto;
  }
}
</style>

<script>
export default {
  name: 'BlogPostCard3',
  props: {
    rootClassName: String,
    description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&h=1200',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    label: {
      type: String,
      default: 'ENTERPRISE',
    },
    title: {
      type: String,
      default: 'Lorem ipsum dolor sit amet',
    },
    id: {
      type: String,
      default: '1',
    }
  },
  methods: {
    readMore(){
      this.$router.push('/konk-umetnina/' + this.id)
    }
  }
}
</script>
