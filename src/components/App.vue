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
      user: {}
    };
  },
  async beforeMount() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const search = new URLSearchParams(window.location.search);
      const response = await fetch(`/api/${search.get('username')}`);
      this.user = await response.json();
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
