<template>
  <div class="background">
    <img class="icon" :src="src" :alt="title" />
  </div>
</template>

<script>
const titleMap = {
  jobs: 'Full-time and/or part-time employment',
  advising: 'Advising others',
  mentoring: 'Mentoring others',
  internships: 'Internships',
  gigs: 'Freelance gigs',
  hiring: 'Hiring talent'
}

export default {
  name: 'opportunity-button',
  props: {
    id: String
  },
  computed: {
    title() {
      return titleMap[this.id];
    },
    src() {
      return `/img/icons/${this.id}.svg`
    }
  }
};
</script>

<style scoped>
.background {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2em;
  height: 2em;
  background-color: #383B40;
  border-radius: 2em;
}

.icon {
  width: 1.15em;
  height: 1.15em;
}
</style>
