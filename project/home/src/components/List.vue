<template>
	<div class="List">
		<Item v-for="(todo,index) in todos" :todo="todo" />
	</div>
</template>
<script>
	import Item from './Item.vue'
	export default {
		props:{
			todos:Array
		},
		name:'List',
		components:{
			Item
		}
	}
</script>
<style scoped>
	
</style>