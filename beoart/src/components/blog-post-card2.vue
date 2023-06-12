<template>
  <div class="card2" v-bind:class="rootClassName">
    <img
      :alt= "image"
      :src="image_src"
      class="card2-img"
    />
    <div class="card2-container">

      <div class="card2-label">{{ label }}</div>
      <h1 class="card2-title">{{ title }}</h1>
      <span class="card2-desc">{{ description }}</span>

      <button @click='obrisi()' type="button" class="card2-btn button">
        Obriši
      </button>
    </div>
  </div>
</template>

<style scoped>
.card2 {
  width: 100%;
  display: flex;
  max-width: 1400px;
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.2);
  transition: 0.3s;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.card2:hover {
  transform: scale(1.02);
}
.card2-img {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0px;
}
.card2-container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 32px;
  flex-direction: column;
  justify-content: space-between;
}
.card2-container1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: space-between;
}
.card2-label {
  color: #595959;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
}
.card2-title {
  margin-bottom: 32px;
  width: 100%;
}
.card2-desc {
  color: #595959;
  font-size: 1.25rem;
  margin-bottom: 32px;
  width: 100%;
}
.card2-btn {
  align-self: flex-end;
  border: 2px solid #9966cc;
  color: white;
  background-color: #9966cc;
  padding: 8px;
  padding-right: 10px;
}


.blog-post-card2-root-class-name3 {
  flex: 1;
  max-width: 100%;
  min-width: 100%;
  align-self: center;
}
@media(max-width: 991px) {
  .card2 {
    flex-direction: row;
    justify-content: space-between;
  }
}
@media(max-width: 767px) {
  .card2 {
    flex-direction: column;
  }
  .card2-img {
    width: 100%;
  }
}
</style>

<script>
import svePonude from '../data/ponude.js'
export default {
  name: 'BlogPostCard2',
  props: {
    id: {
      type: String,
      default: '1',
    },
    label: {
      type: String,
      default: 'AUTOR',
    },
    profile_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
    },
    rootClassName: String,
    title: {
      type: String,
      default: 'NASLOV',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    description: {
      type: String,
      default:
        'TEKST PORUKE ILI PONUDE sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
    },
  },
  data(){
    return{
      ponude: svePonude
    }
  },
  methods: {
    obrisi(){
      const newPonude = []
      for(var i = 0; i < this.ponude.length; i++){
      	if(this.ponude[i].id != this.id){
      		newPonude.push(this.ponude[i])
      	}
      }
      this.ponude = newPonude
      localStorage.setItem('ponude', JSON.stringify(this.ponude))
      //this.$router.push('moj-nalog')
      window.location.reload();
    }
    
  },
  created(){
    if (localStorage.getItem('ponude')==null){
      localStorage.setItem('ponude', JSON.stringify(this.ponude))
    }
    else
      this.ponude = JSON.parse(localStorage.getItem('ponude')) 
  }
}
</script>
