Vue.component('app-navbar', {
  data: function () {
    return {

    }		
  },
	methods:{
		
	},
  template: `
	<p class="navbar">
		<router-link to="/" class="navbar-item">Pomodoro</router-link>
		<router-link to="/short-break" class="navbar-item">Short Break</router-link>
		<router-link to="/long-break" class="navbar-item">Long Break</router-link>
	</p>
	`
})

