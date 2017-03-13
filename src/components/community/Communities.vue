<template>
  <div class="card">
    <div v-for="community in communities" class="community">
      <a :href="'/community/' + community.nid"><h2>{{ community.title }}</h2></a>
      <div class="address">
        <span class="address1">{{ community.street1 }}, {{ community.street2 }}</span>
        <span class="address2">{{ community.city }}, {{ community.state }} {{ community.zipcode }}</span>
      </div>
      <div class="image">
        <img :src="community.image_large" />
      </div>
    </div>
  </div>
</template>

<script>

import env from '../../config/environment';

export default {
  name: 'communities',
  data() {
    return {
      communities: []
    }
  },
  created: function() {
    this.$http.get(env.url + env.community_api + 'all').then(response => {
      this.communities = response.data;
    });
  }
}

</script>