<template>
  <card style="default" :info="user"></card>
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
  }
}
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
body {
  background: transparent;
  font-family: Muli, serif;
}
</style>

<style scoped>
</style>
