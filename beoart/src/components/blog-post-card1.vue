<!-- Kartice na naslovnoj strani -->
<template>
  <div class="card" v-bind:class="rootClassName">
    <img :alt="image_alt" :src="image_src" class="card-img" />
    <div class="card-container">
      <span class="card-text">{{ label }}</span>
      <span class="card-text1">{{ title }}</span>
      <span class="card-text2">{{ description }}</span>
      <div class="card-container1">
        <div class="card-profile">
          <span class="card-text3">{{ author }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  display: flex;
  overflow: hidden;
  max-width: 100%;
  min-width: 100%;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: left;
  flex-direction: column;
  justify-content: center;
}
.card:hover {
  transform: scale(1.02);
}
.card-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.card-container {
  display: flex;
  padding: 32px;
  align-items: left;
  flex-direction: column;
  justify-content: left;
}
.card-text {
  color: #595959;
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
}
.card-text1 {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 32px;
}
.card-text2 {
  color: #595959;
  font-weight: 400;
  margin-bottom: 32px;
}
.card-container1 {
  width: 100%;
  display: flex;
  align-items: left;
  padding-top: 16px;
  border-color:  #212529;
  border-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.card-profile {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.card-text3 {
  font-weight: 300;
  margin-left: 8px;
}
@media(max-width: 991px) {
  .card-img {
    height: 350px;
  }
}
</style>

<script>
export default {
  name: 'BlogPostCard1',
  props: {
    rootClassName: String,
    title: {
      type: String,
      default: 'Lorem ipsum dolor sit amet',
    },
    author: {
      type: String,
      default: 'Jon Doe',
    },
    description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
    },
    label: {
      type: String,
      default: 'ENTERPRISE',
    },
  },
}
</script>