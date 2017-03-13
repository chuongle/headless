<template>
  <div class="wrapper">
    <div class="header object-fit-container">
      <h1>{{ community.title }}</h1>
      <img :src="community.image_large" class="object-fit"/>
    </div>
    <div class="community">
      <div class="address">
        <span class="address1">{{ community.street1 }}, {{ community.street2 }}</span>
        <span class="address2">{{ community.city }}, {{ community.state }} {{ community.zipcode }}</span>
      </div>
    </div>
  </div>
</template>

<script>

import env from '../../config/environment';

export default {
  name: 'community',
  props: {
    id: {
      type: String,
    }
  },
  data() {
    return {
      community: {}
    }
  },
  created: function() {
    this.$http.get(env.url + env.community_api + this.id).then(response => {
      console.log('response.data: ', response.data[0]);
      this.community = response.data[0];
    });
  }
}
</script>