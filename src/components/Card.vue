<template>
  <div class="card">
    <div class="heading">
      <profile-image :src="info.person.pictureThumbnail" :alt="info.person.name" />
    </div>
    <div class="content">
      <span class="name">{{ info.person.name }}</span>
      <span class="headline">{{ info.person.professionalHeadline }}</span>
      <div class="opportunities">
        <opportunity-button v-for="opportunity of opportunities" :key="opportunity" :id="opportunity" />
      </div>
      <signal-me :username="info.person.publicId" />
    </div>
  </div>
</template>

<script>
import ProfileImage from './ProfileImage.vue';
import OpportunityButton from './OpportunityButton.vue';
import SignalMe from './SignalMeButton.vue';

export default {
  components: {
    ProfileImage,
    OpportunityButton,
    SignalMe
  },
  props: {
    info: Object
  },
  computed: {
    opportunities() {
      const opportunities = this.info.opportunities || [];
      return opportunities
        .filter(opportunity => opportunity.field === 'active' && opportunity.data)
        .map(opportunity => opportunity.interest);
    }
  }
}
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 2.75em auto;

  min-height: 12em;

  box-sizing: border-box;
  margin: 1em;
}

.material-icons {
  color: white;
}

.heading {
  display: grid;
  align-items: center;

  padding: 1.5em;
}

.hexagon--background {
  margin-left: -2.5em;
}

.content {
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #27292d;
  box-shadow: -2px -2px 6px #383b40, 6px 6px 6px rgba(0,0,0,.24);
  overflow-x: visible;

  padding: 1em;
  padding-left: 4.5em;
  box-sizing: border-box;
}

.name {
  font-weight: 400;
  font-size: 1.2em;
  margin-block-end: 0.25em;
}

.headline {
  font-weight: 200;
  font-size: 0.85em;
  margin-block-end: 1em;
}

.opportunities {
  display: flex;
  margin-block-end: 1em;
}

.opportunities > .background:not(:last-child) {
  margin-inline-end: 0.25em;
}
</style>
