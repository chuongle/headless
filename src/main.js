// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResources from 'vue-resource'
import VueRouter from 'vue-router'
import Communities from './components/community/Communities'
import Community from './components/community/Community'

Vue.config.productionTip = false

Vue.use(VueResources)
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/communities', component: Communities },
		{ path: '/community/:id', component: Community, props: dynamicProp }
	]
});

function dynamicProp(route) {
	return { id: route.params.id };
}

function getAlias(route) {
	// console.log('route.params.id: ', route.params.id);
	this.$http.get(env.url + env.community_api + route.params.id).then(response => {
		console.log('response.data: ', response.data);
	  return '/'+response.data[0].path;
	});
}

new Vue({
  router,
  template: `
  	<div id="app">
  		<ul>
  			<li><router-link to="/communities">Communities</router-link></li>
  		</ul>
  		<router-view class="view"></router-view>
  	</div>
  `,
}).$mount('#app')
