<template>
  <div class="umetnine-pregled-container">
    <app-header rootClassName="header-root-class-name"></app-header>
    <select class="umetnine-pregled-select">
      <option value="Sortiraj">Sortiraj</option>
      <option value="Po Umetniku">Po Umetniku</option>
      <option value="Po Nazivu">Po Nazivu</option>
    </select>
    <input type="text" placeholder=" " class="umetnine-pregled-textinput input" />
    <button type="button" class="umetnine-pregled-button button">Pretrazi</button>
    <div class="umetnine-pregled-blog">
      <div class="umetnine-pregled-container1">
        <router-link to="/umetnina-konkretna" class="umetnine-pregled-navlink">
          <blog-post-card3
            label="Vincent Van Gogh"
            title="Zvezdana Noc"
            author=" "
            image_src="/zvezdana%2Bnoc%C3%AC%C2%81%2C%2Bvinsent%2Bvan%2Bgog-1500w.jpeg"
            rootClassName="rootClassName1"
            class="umetnine-pregled-component1"
          ></blog-post-card3>
        </router-link>
      </div>
      <div class="umetnine-pregled-container2">
        <blog-post-card3
          label="J. Verner"
          title="Devojka sa bisernim minđušama"
          author=" "
          image_src="/40120_girl-with-a-pearl-earring-g1bc78cda1-1920_orig-1500w.jpg"
          rootClassName="rootClassName2"
          class="umetnine-pregled-component2"
        ></blog-post-card3>
      </div>
      <blog-post-card3
        label="Pavle Paja Jovanovic"
        title="Borba Petlova"
        author=" "
        image_src="/gmsu0408_borba-petlova-1500w.jpg"
        rootClassName="rootClassName"
      ></blog-post-card3>
    </div>
    <app-footer rootClassName="footer-root-class-name1"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import BlogPostCard3 from '../components/blog-post-card3'
import AppFooter from '../components/footer'

export default {
  name: 'UmetninePregled',
  components: {
    AppHeader,
    BlogPostCard3,
    AppFooter,
  },
  metaInfo: {
    title: 'UmetninePregled - BeoArt',
    meta: [
      {
        property: 'og:title',
        content: 'UmetninePregled - BeoArt',
      },
    ],
  },
}
</script>

<style scoped>
.umetnine-pregled-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.umetnine-pregled-select {
  top: 122px;
  left: 69px;
  position: absolute;
  align-self: flex-start;
}
.umetnine-pregled-textinput {
  top: 121px;
  right: 133px;
  position: absolute;
  align-self: flex-end;
}
.umetnine-pregled-button {
  top: 120px;
  right: 23px;
  position: absolute;
}
.umetnine-pregled-blog {
  width: 100%;
  display: flex;
  padding: 48px;
  max-width: 1400px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.umetnine-pregled-container1 {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: center;
}
.umetnine-pregled-navlink {
  display: contents;
}
.umetnine-pregled-component1 {
  text-decoration: none;
}
.umetnine-pregled-container2 {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: space-between;
}
.umetnine-pregled-component2 {
  text-decoration: none;
}
@media(max-width: 767px) {
  .umetnine-pregled-blog {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .umetnine-pregled-blog {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
}
</style>
