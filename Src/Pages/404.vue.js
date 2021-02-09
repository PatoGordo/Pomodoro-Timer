Vue.component('Page404', {
  data: function () {
    return {
			giant: "Page404",
      title: "Page not found"
    }
  },
  template: `
	<div class="component 404">
		<h1><strong>{{ giant }}</strong></h1>
		<h1>{{ title }}</h1>
		<router-link to="/">Return to home</router-link>
	</div>`
})



const Page404 = {
	template:`
		<Page404 />
	`
}