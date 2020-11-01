<template>
  <a :href="url">
    <div class="signal--background">
      <img class="icon" src="/img/icons/signal-inverse.svg" />
      <span>Signal</span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'signal-me',
  props: {
    username: String
  },
  computed: {
    url() {
      return `https://bio.torre.co/${this.username}`;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  max-width: 7em;
}

.signal--background {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.25em;
  background-color: #FF5722;
  border-radius: 0.1em;
  box-sizing: border-box;

  text-transform: uppercase;
  height: 2.25em;
  max-width: 7em;
}

.icon {
  width: 1.15em;
  height: 1.15em;

  margin-inline-end: 0.25em;
}
</style>
