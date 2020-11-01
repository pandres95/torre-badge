<template>
  <div class="wrapper">
    <card style="default" :info="user"></card>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'app',
  components: {
    Card
  },
  data() {
    return {
      user: {
        name: 'Pablo Andrés Dorado Suárez',
        pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/9452d46ba9f94fe9851ab4d0bbcb33c81b390f7a/profile_oeuoVH2/2387b40c6bdbd107da26d37a285018f6.jpg'
      }
    };
  },
  async beforeMount() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const search = new URLSearchParams(window.location.search);
      const response = await fetch(`https://torre.bio/api/bios/${search.get('username')}`);
      this.user = response.json();
    }
  }
}
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
html {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

body {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vh;
  background: transparent;
  font-family: Muli, serif;
}

.wrapper {
  width: 100%;
  max-width: 720px;

  padding: 1em;
}
</style>

<style scoped>
</style>
