Vue.component('Home', {
  data: function () {
    return {
			time: 1500,
			audio: new Audio('Src/Audios/Timer.mp3'),//Sound by https://freesound.org/people/ZyryTSounds/sounds/219244/
			isFinish: true,
			selected: 'pomodoro'
		}
  },
	methods:{
		timer() {
			if(this.isFinish == false){
				if(this.time > 0) {
					setTimeout(() => {
						this.time -= 1
						this.timer()
					}, 1000)
				}else{
					this.audio.play()
					this.isFinish = true
					this.time = 1500
				}
			}
		},
		startPomodoro(){
			this.selected = 'pomodoro'
			this.time = 1500
			this.isFinish = false
			this.timer()
		},
		startShortBreak(){
			this.selected = 'short-break'
			this.time = 300
			this.isFinish = false
			this.timer()
		},
		startLongBreak(){
			this.selected = 'long-break'
			this.time = 900
			this.isFinish = false
			this.timer()
		},
		abort(){
			window.location.reload()
		}
	},
  template: `
	<div class="component home">
		<div class="pomodoro_" :class="selected">
			<h2>Pomodoro Timer</h2>
			<div class="left">{{Math.floor(time / 60) - (Math.floor(time / 60 / 60) * 60)}} : {{time % 60}}</div>
			<div class="buttons">
				<button class="button" :class="isFinish ? 'none' : 'active'" @click="abort()">Abort All</button>		
				<button class="button" :class="isFinish ? 'active' : 'none'" @click="startPomodoro()">Pomodoro</button>
				<button class="button" :class="isFinish ? 'active' : 'none'" @click="startShortBreak()">Short Break</button>
				<button class="button" :class="isFinish ? 'active' : 'none'" @click="startLongBreak()">Long Break</button>
			</div>
		</div>
	</div>`
})



const Home = {
	template:`
		<Home />
	`
}